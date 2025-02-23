import { NestFactory } from '@nestjs/core';
import { TravelingoBatchModule } from './travelingo-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(TravelingoBatchModule);
  await app.listen(process.env.PORT_BATCH ?? 3000);
}
bootstrap();
