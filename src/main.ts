import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ExpressAdapter } from '@bull-board/express';
import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { labelQueue } from './helpers/bullmq';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const serverAdapter = new ExpressAdapter();
  serverAdapter.setBasePath('/admin/queues');

  createBullBoard({
    queues: [
      new BullMQAdapter(labelQueue),
    ],
    serverAdapter,
  });
  
  app.use('/admin/queues', serverAdapter.getRouter());  

  const port = process.env.PORT || 7000;
  await app.listen(port);

}

bootstrap();


