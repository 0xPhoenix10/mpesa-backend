import { Injectable } from '@nestjs/common';
import { redisConnection } from '../helpers/bullmq';
import { Worker } from 'bullmq';

@Injectable()
export class QueueService {
  onModuleInit() {
    this.listen();
  }

  listen() {
    const labelWorker = new Worker('labels', async (job)=>{
      console.log('job:', job);
      // job.moveToFailed(new Error('this failed'), '123');

      throw new Error('this is wrong');
    }, { connection: redisConnection });
  }
}
