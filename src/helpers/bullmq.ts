import { Queue, Worker } from 'bullmq';
// import IORedis from 'ioredis';
const Redis = require('ioredis');

export const redisConnection = new Redis('redis://redis:6379');

// Create a new connection in every instance
export const labelQueue = new Queue('labels', { 
  connection: redisConnection, 
  defaultJobOptions: {
    removeOnComplete: true, 
  },
});


