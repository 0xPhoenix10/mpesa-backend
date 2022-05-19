import { Injectable } from '@nestjs/common';
import { elasticSearch } from '../helpers/es.repository';
import {
  avg3month, avgFromRange,
  generalAggs,
  personalTransactionCountLast30days, searchTransactionByDescription,
  totalCash,
} from './repositories/queries/agr';
@Injectable()
export class StatsService {

  async stats(userId): Promise<any> {
    const { _source: user } = await  elasticSearch.doc(userId, 'user' );
    // console.log('user:', user);
    const transactionDetails =  await elasticSearch.query(generalAggs(userId), 'mpesa-transactions' );
    return ({ transactionDetails, user });
  }

  async transactionStats(userId) {
    const { _source: user } = await elasticSearch.doc(userId, 'user');

    const transactionPromises = [
      await elasticSearch.query(avg3month(userId), 'mpesa-transactions'),
      await elasticSearch.query(totalCash(userId), 'mpesa-transactions'),
      // @ts-ignore: next-line
      await elasticSearch.query(personalTransactionCountLast30days(userId, user.phoneNumber), 'mpesa-transactions'),
    ];
    const [avg3monthData, totalCashData, personalTransactionData] = await Promise.all(transactionPromises);

    return { avg3monthData, totalCashData, personalTransactionData };
  }


  getByDate(userId, start, end) {
    return elasticSearch.query(avgFromRange(userId, start, end), 'mpesa-transactions');
  }

  searchByDescription(userId, searchText) {
    return elasticSearch.query(searchTransactionByDescription(userId, searchText), 'mpesa-transactions');
  }
}
