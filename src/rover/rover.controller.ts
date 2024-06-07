import { Controller, Get } from '@nestjs/common';
import { RoverService } from './rover.service';
import { FileReaderService } from '../services/file-reader.service';

@Controller('rover')
export class RoverController {
  constructor(
    private readonly roverService: RoverService,
    private readonly fileReaderService: FileReaderService,
  ) {}

  @Get('execute')
  async execute() {
    // Get the input on file
    const input = this.fileReaderService.readInputFile('input.txt');

    const [plateau, ...roversData] = input.trim().split('\n');
    const plateauCoordinates = plateau.split(' ').map(Number);
    const result = this.roverService.executeCommands(plateauCoordinates, roversData);
    return result.join(' ');
  }
}
