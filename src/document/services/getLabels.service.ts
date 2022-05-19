import { Injectable } from '@nestjs/common';
import axios from 'axios';
// import { labelQueue } from '../../helpers/bullmq';
import { Worker, Job } from 'bullmq';
import { labelQueue } from '../../helpers/bullmq';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

@Injectable()
export class LabelService {
  async onModuleInit() {
    // this.run({});
    // labelQueue.add('transactions description', { id: 'resolve.data.dssid' });
    // labelQueue.add('transactions description', { id: 'resolve.data.dsfdasfdssid' });

    // const worker = new Worker('labels', async (job: Job) => {
    //   // Optionally report some progress
    //   await job.updateProgress(42);
    
    //   // Optionally sending an object as progress
    //   await job.updateProgress({ foo: 'bar' });
    
    //   // Do something with job
    //   return 'some value';
    // });
  }
  

  async run(transactions) {
    const cleanArray = transactions.map(item => {
      return item.description;
    });
    try {
      const body = {
        'texts': cleanArray,
        'token': 'fegj3498543u2489uefilsdjfds98sg98',
      };

      const url = `${process.env.LABELS_URL}/api-v2/run`;
      const resolve = await axios({
        method: 'post',
        url,
        data: body,
      });
      
      if (resolve.data.message === 'success') {
        // add to queue
        labelQueue.add('transactions description', { id: resolve.data.id });

        // this.awaitForDoneToMapData(transactions, resolve.data.id);
        return resolve.data.id;
      } 
    } catch (err){
      console.log('err:', err);
      throw new Error('something went wrong');
    }

  }

  async awaitForDoneToMapData(transactions: any, id: string) {
    const getData = async (id: string): Promise<any> => {
      const status = await this.check(id);
      return status;
    };

    for (const loop of [...Array(1000)]) {
      const checkStatus = await getData(id);
      console.log('checkStatus:', checkStatus);
      if (checkStatus.status === 'done') {
        // great we can proceed
        console.log('all done');
        this.export(id, transactions);
        break;
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

  async export(id, transactions) {
    const resolve = await axios({
      method: 'post',
      url: `${process.env.LABELS_URL}/api-v2/export`,
      data: { id },
    });

    console.log('resolve:', resolve.data);

    // Combine all data



    // const setData = await elastic.mpesaTransactions(val, 'mpesa-transactions', user);
  }

}