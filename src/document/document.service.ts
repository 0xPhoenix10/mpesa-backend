import { Injectable } from '@nestjs/common';
import { MpesaStatements } from './services/getMpesaStatements.service';
const fs = require('fs');
import { findPhoneNumbersInText } from 'libphonenumber-js';
import parseMobile from 'libphonenumber-js/mobile';
import { CrackPassword } from './services/crackPassword.service';
import { getDataFromPDF } from './services/tabula.service';
import { MpesaTransactions } from './services/mpesa/transactions.service';
import { OriginUser } from './services/mpesa/originUser';
import { client } from '../search/auth';
import { toExcel } from './export/toExcel';

@Injectable()
export class DocumentService {
  async onModuleInit() {
    // console.log('start');
    // this.mpesaStatements();


    const val = await getDataFromPDF('./input/MPESA_Statement_20220101_to_20220131_254722522382.pdf', '13319712', '1');
    
    
    toExcel(val);
    // console.log('val:', val);

    // const originUser = await OriginUser(val);

    // await MpesaTransactions(originUser, val.transactions);
  }

  async mpesaStatements() {
    try {

      // get mpesa statements
      await MpesaStatements();
    
      // find passwords for input folder files
      const filesNames = fs.readdirSync('./input');

      for (const file of filesNames ) {
        const items = file.split('_');
        // eslint-disable-next-line @typescript-eslint/no-loop-func
        items.forEach(async (element) => {
          const cleanString = element.replace('.pdf', '');
          const [findPhone] =  findPhoneNumbersInText(cleanString, 'KE');
          if (findPhone) {
            const phoneDetails = parseMobile(findPhone.number.number, 'KE');
            if (phoneDetails.getType() === 'MOBILE') {
              const documentDetails = { password: null, phoneNumber: findPhone.number.number.toString(), fileName: file, potentialPassword:  null };
            
              //
              // Get Passwords
              //
              const password = await CrackPassword(file, documentDetails.potentialPassword );
              console.log('password:', password);

              const val = await getDataFromPDF(`./input/${documentDetails.fileName}`, password, 'all');
              const originUser = await OriginUser(val);
              console.log('originUser:', originUser);
              await MpesaTransactions(originUser, val.transactions);

              // move statement to output folder if all above is done correctly.
              await fs.copyFile(`./input/${file}`, `./output/${file}`, function (err) {
                if (err) throw err;
                console.log('Successfully renamed - AKA moved!');
                fs.unlink(`./input/${file}`, (err) => {
                  if (err) {
                    console.error(err);
                    return;
                  }
                  console.log('file removed');
                  //file removed
                });
              });
 
             

              return;
            }
          }
        });
      }

    } catch (err){
      throw new Error(err);
    }
  }
}
