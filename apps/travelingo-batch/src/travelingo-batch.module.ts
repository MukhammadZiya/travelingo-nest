import { Module } from '@nestjs/common';
import { TravelingoBatchController } from './travelingo-batch.controller';
import { TravelingoBatchService } from './travelingo-batch.service';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [TravelingoBatchController],
  providers: [TravelingoBatchService],
})
export class TravelingoBatchModule {}
