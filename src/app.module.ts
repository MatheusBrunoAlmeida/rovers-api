import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoverController } from './rover/rover.controller';
import { RoverModule } from './rover/rover.module';

@Module({
  imports: [RoverModule],
})
export class AppModule {}
