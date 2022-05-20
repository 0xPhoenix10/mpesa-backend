import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { labelQueue } from '../../helpers/bullmq';
import { rawDocData } from '../tests/mocks/docToDataTest';

@Injectable()
export class LabelService {
  async onModuleInit() {
    // this.run(rawDocData.transactions, '123');
  }
  
  async run(transactions, userId) {
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
        labelQueue.add('labels', { awaitLabelId: resolve.data.id, transactions, userId }, { attempts: 10,  backoff: {
          type: 'exponential',
          delay: 1000,
        } });
        return resolve.data.id;
      } 
    } catch (err) {
      console.log('err:', err);
      throw new Error('something went wrong');
    }

  }







}