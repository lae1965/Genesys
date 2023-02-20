import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';

import { AppModule } from './app.module';
import { requestCRMInit } from './_util/request';

dotenv.config();

const PORT = +process.env.PORT | 3000;

async function bootstrap() {
  await requestCRMInit();
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT} port...`);
  });
}
bootstrap();
