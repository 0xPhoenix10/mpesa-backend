import { Injectable } from '@nestjs/common';
import { elastic } from '../repositories/es.repository';
import { generalAggs } from '../repositories/queries/agr';

@Injectable()
export class StatsService {
  async generalTransaction() {
    const overview = await elastic.query(generalAggs, 'mpesa-transactions');
    return overview;
  }

  // async totalInPerDay() {
  //   const overview = await elastic.query(top10, 'mpesa-transactions');
  //   return overview;
  // }

}