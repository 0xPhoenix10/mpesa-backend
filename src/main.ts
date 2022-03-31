import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import './neo/auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: false,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: false,
  });
  const port = process.env.PORT || 7000;
  await app.listen(port);
}

bootstrap();
