import { Injectable } from '@nestjs/common';
import { MpesaStatements } from './services/getMpesaStatements.service';
const fs = require('fs');
import { findPhoneNumbersInText } from 'libphonenumber-js';
import parseMobile from 'libphonenumber-js/mobile';
import { getDataFromPDF } from './services/tabula.service';
import { elastic } from '../helpers/es.repository';

import { LabelService } from './services/getLabels.service';

@Injectable()
export class DocumentService {
  async onModuleInit() {
    // console.log('process:', process);
  }

  async processDoc(document, password) {
    try {
      const [ filename ] = document.split('.');
      const val: any = await getDataFromPDF(`./input/${filename}`, password, 'all');
      // console.log('val:', val);
      // fs.writeFile('./input/test.txt', JSON.stringify(val), null, (err) => {
      //   console.log('err:', err);
      // });
      const user = await elastic.user(val);
      console.log('user:', user);
      const initiateDocCheck = await new LabelService().run(val.transactions);
      console.log('initiateDocCheck:', initiateDocCheck);

      return { userId: user._id, name: val.user.name, phoneNumber: val.user.phoneNumber, awaitToken: initiateDocCheck };
    } catch (err){
      throw new Error(err);
    }
  }

  async excelData(userId): Promise<any> {
    const { _source: user } = await  elastic.doc(userId, 'user' );
    const { hits: transactionsDetails } = await  elastic.query({ size:10000 }, 'mpesa-transactions' );
    return { user, transactions: transactionsDetails.hits.map(item => item._source) };
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
              // const password = await CrackPassword(file, documentDetails.potentialPassword );

              const val = await getDataFromPDF(`./input/${documentDetails.fileName}`, '35388008', 'all');
              // const originUser = await OriginUser(val);
              // await MpesaTransactions(originUser, val.transactions);

              // // move statement to output folder if all above is done correctly.
              // await fs.copyFile(`./input/${file}`, `./output/${file}`, function (err) {
              //   if (err) throw err;
              //   fs.unlink(`./input/${file}`, (err) => {
              //     if (err) {
              //       console.error(err);
              //       return;
              //     }
              //     //file removed
              //   });
              // });
 
             

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
