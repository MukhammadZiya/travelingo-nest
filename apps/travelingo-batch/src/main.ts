import { NestFactory } from '@nestjs/core';
import { TravelingoBatchModule } from './travelingo-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(TravelingoBatchModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
