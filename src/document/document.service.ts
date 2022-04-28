import { HttpStatus, Injectable } from '@nestjs/common';
const https = require('https');
import { MpesaStatements } from './services/getMpesaStatements.service';
const fs = require('fs');
import { findPhoneNumbersInText } from 'libphonenumber-js';
import parseMobile from 'libphonenumber-js/mobile';
import { CrackPassword } from './services/crackPassword.service';
import { getDataFromPDF } from './services/tabula.service';
import { MpesaTransactions } from './services/mpesa/transactions.service';
import { OriginUser } from './services/mpesa/originUser';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'; // ES Modules import
import { elastic } from './repositories/es.repository';
import {
  allDocs,
  avg3month, avgFromRange,
  generalAggs,
  personalTransactionCountLast30days, searchTransactionByDescription,
  totalCash,
} from './repositories/queries/agr';
@Injectable()
export class DocumentService {
  async onModuleInit() {
    // console.log('run');
    // console.log('start');
    // this.mpesaStatements();


    // const val = await getDataFromPDF('./input/MPESA_Statement_2021-03-22_to_2022-03-22_2547xxxxxx246.pdf', '24564409-1877', 'all');
    // console.log('val:', val);
    
    // toExcel(val);
    // console.log('val:', val);

    // const originUser = await OriginUser(val);

    // await MpesaTransactions(originUser, val.transactions);

    // this.getDocumentDetails({ password: '24564409-1877', key:'locked/1.pdf', fileName: '1.pdf' });
  }

  async stats(userId): Promise<any> {
    const { _source: user } = await  elastic.doc(userId, 'user' );
    console.log('user:', user);
    
    const transactionDetails =  await elastic.query(generalAggs(userId), 'mpesa-transactions' );
    return ({ transactionDetails, user });
  }

  async transactionStats(userId) {
    const { _source: user } = await elastic.doc(userId, 'user');

    const transactionPromises = [
      await elastic.query(avg3month(userId), 'mpesa-transactions'),
      await elastic.query(totalCash(userId), 'mpesa-transactions'),
      // @ts-ignore: next-line
      await elastic.query(personalTransactionCountLast30days(userId, user.phoneNumber), 'mpesa-transactions'),
    ]
    const [avg3monthData, totalCashData, personalTransactionData] = await Promise.all(transactionPromises);

    return { avg3monthData, totalCashData, personalTransactionData };
  }

  getByDate(userId, start, end) {
    return elastic.query(avgFromRange(userId, start, end), 'mpesa-transactions');
  }

  searchByDescription(userId, searchText) {
    return elastic.query(searchTransactionByDescription(userId, searchText), 'mpesa-transactions');
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
              // console.log('start crach');
              // const password = await CrackPassword(file, documentDetails.potentialPassword );
              // console.log('password:', password);

              const val = await getDataFromPDF(`./input/${documentDetails.fileName}`, '35388008', 'all');
              // const originUser = await OriginUser(val);
              // console.log('originUser:', originUser);
              // await MpesaTransactions(originUser, val.transactions);

              // // move statement to output folder if all above is done correctly.
              // await fs.copyFile(`./input/${file}`, `./output/${file}`, function (err) {
              //   if (err) throw err;
              //   console.log('Successfully renamed - AKA moved!');
              //   fs.unlink(`./input/${file}`, (err) => {
              //     if (err) {
              //       console.error(err);
              //       return;
              //     }
              //     console.log('file removed');
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




function getSignedUrl(client: S3Client, command: GetObjectCommand, arg2: { expiresIn: number; }) {
  throw new Error('Function not implemented.');
}