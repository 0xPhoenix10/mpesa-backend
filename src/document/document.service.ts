import { Injectable } from '@nestjs/common';
import { MpesaStatements } from './services/getMpesaStatements.service';
const fs = require('fs');
import { findPhoneNumbersInText } from 'libphonenumber-js';
import parseMobile from 'libphonenumber-js/mobile';
import { getDataFromPDF } from './services/tabula.service';
import { elastic } from './repositories/es.repository';
import {
  avg3month, avgFromRange,
  generalAggs,
  personalTransactionCountLast30days, searchTransactionByDescription,
  totalCash,
} from './repositories/queries/agr';
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
      // fs.writeFile('./input/test.txt', JSON.stringify(val), null, (err) => {
      //   console.log('err:', err);
      // });
      const user = await elastic.user(val);
      // console.log('user:', user);
      const initiateDocCheck = await new LabelService().run(val.transaction);
      // console.log('initiateDocCheck:', initiateDocCheck);

      return { userId: user._id, name: val.user.name, phoneNumber: val.user.phoneNumber, awaitToken: initiateDocCheck };
    } catch (err){
      throw new Error(err);
    }
  }

  async stats(userId): Promise<any> {
    const { _source: user } = await  elastic.doc(userId, 'user' );
    // console.log('user:', user);
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
    ];
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
