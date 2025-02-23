import { Controller, Get } from '@nestjs/common';
import { TravelingoBatchService } from './travelingo-batch.service';

@Controller()
export class TravelingoBatchController {
  constructor(private readonly travelingoBatchService: TravelingoBatchService) {}

  @Get()
  getHello(): string {
    return this.travelingoBatchService.getHello();
  }
}
