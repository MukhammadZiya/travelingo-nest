import { Module } from '@nestjs/common';
import { TravelingoBatchController } from './travelingo-batch.controller';
import { TravelingoBatchService } from './travelingo-batch.service';

@Module({
  imports: [],
  controllers: [TravelingoBatchController],
  providers: [TravelingoBatchService],
})
export class TravelingoBatchModule {}
