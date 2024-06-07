import { Test, TestingModule } from '@nestjs/testing';
import { RoverService } from '../rover/rover.service';

describe('RoverService', () => {
  let service: RoverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoverService],
    }).compile();

    service = module.get<RoverService>(RoverService);
  });

  it('should execute commands correctly', () => {
    const plateau = [5, 5];
    const roversData = ['1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM'];
    const result = service.executeCommands(plateau, roversData);
    expect(result).toEqual(['1 3 N', '5 1 E']);
  });
});
