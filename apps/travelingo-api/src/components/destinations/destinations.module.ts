import { Module } from '@nestjs/common';
import { DestinationsResolver } from './destinations.resolver';
import { DestinationsService } from './destinations.service';

@Module({
  providers: [DestinationsResolver, DestinationsService]
})
export class DestinationsModule {}
