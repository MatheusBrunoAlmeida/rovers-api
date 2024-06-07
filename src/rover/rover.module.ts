import { Module } from '@nestjs/common';
import { RoverService } from './rover.service';
import { RoverController } from './rover.controller';
import { FileReaderService } from '../services/file-reader.service';

@Module({
  providers: [RoverService, FileReaderService],
  controllers: [RoverController],
})
export class RoverModule {}
