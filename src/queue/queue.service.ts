import { Injectable } from '@nestjs/common';
import { redisConnection } from '../helpers/bullmq';
import { Worker } from 'bullmq';
import axios from 'axios';
import { elasticSearch } from '../helpers/es.repository';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
@Injectable()
export class QueueService {
  onModuleInit() {
    this.listenLabels();
  }

  listenLabels() {
    new Worker('labels', async (job)=>{

      if (job.name === 'labels') {
        try {
          // console.log('job:', job.data);
          const { transactions, awaitLabelId, userId } = job.data;
          // job.moveToFailed(new Error('this failed yes'), '123');
          await this.awaitForDoneToMapData(transactions, awaitLabelId);
          // console.log('done getting the Labels');
          const labels = await this.export(awaitLabelId);
          // console.log('labels:', labels);
          await this.toElasticSearch(userId, transactions, labels.data );
          // send Email with Result
        } catch (err){
          throw new Error(err);
        }
      }
  
    }, { connection: redisConnection });
  }


  async awaitForDoneToMapData(transactions: any, id: string) {
    const getData = async (id: string): Promise<any> => {
      const status = await this.check(id);
      return status;
    };

    for (const loop of [...Array(1000)]) {
      const checkStatus = await getData(id);
      if (checkStatus.status === 'done') {
        // great we can proceed
        console.log('all done');
        return 'success';
      } else {
        await sleep(1000);
        getData(id);
      }
    }
  }

  async check(id):  Promise<any> {
    const resolve = await axios({
      method: 'post',
      url: `${process.env.LABELS_URL}/api-v2/check`,
      data: { id },
    });
    return resolve.data;
  }


  async export(id) {
    const resolve = await axios({
      method: 'post',
      url: `${process.env.LABELS_URL}/api-v2/export`,
      data: { id },
    });
    return resolve.data;
  }


  async toElasticSearch(userId: string, transactions: Array<any>, labels: Array<any>) {
    try {
      const list = transactions.map((item, index) => {
        return { ...item, userId, entities: labels[index].entities };
      });
      console.log('list:', list);
      await elasticSearch.mpesaTransactions(list, 'transactions', userId);
      console.log('done sending to elastic');
   
    } catch (err) {
      throw new Error('could not send transactions to elastic seatch');
    }
  }
}
