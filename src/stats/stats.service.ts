import { Injectable } from '@nestjs/common';
import { elastic } from './repositories/es.repository';
import {
  avg3month, avgFromRange,
  generalAggs,
  personalTransactionCountLast30days, searchTransactionByDescription,
  totalCash,
} from './repositories/queries/agr';
@Injectable()
export class StatsService {

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
}
