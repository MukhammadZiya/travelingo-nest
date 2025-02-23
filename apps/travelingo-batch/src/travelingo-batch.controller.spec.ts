import { Test, TestingModule } from '@nestjs/testing';
import { TravelingoBatchController } from './travelingo-batch.controller';
import { TravelingoBatchService } from './travelingo-batch.service';

describe('TravelingoBatchController', () => {
  let travelingoBatchController: TravelingoBatchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TravelingoBatchController],
      providers: [TravelingoBatchService],
    }).compile();

    travelingoBatchController = app.get<TravelingoBatchController>(TravelingoBatchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(travelingoBatchController.getHello()).toBe('Hello World!');
    });
  });
});
