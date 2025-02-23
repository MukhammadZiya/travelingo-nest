import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { DestinationsModule } from './destinations/destinations.module';

@Module({
  imports: [MemberModule, DestinationsModule]
})
export class ComponentsModule {}
