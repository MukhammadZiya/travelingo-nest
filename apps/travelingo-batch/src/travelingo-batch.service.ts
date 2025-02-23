import { Injectable } from '@nestjs/common';

@Injectable()
export class TravelingoBatchService {
  getHello(): string {
    return 'Hello travelingo batch!';
  }
}
