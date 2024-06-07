import { Injectable } from '@nestjs/common';
import { Rover } from './rover.entity';

@Injectable()
export class RoverService {
  private directions = ['N', 'E', 'S', 'W'];

  executeCommands(plateau: number[], roversData: string[]): string[] {
    const results = [];

    for (let i = 0; i < roversData.length; i += 2) {
      let rover = this.parseRoverData(roversData[i]);
      const commands = roversData[i + 1];

      for (const command of commands) {
        if (command === 'L' || command === 'R') {
          rover.direction = this.changeDirection(rover.direction, command);
        } else if (command === 'M') {
          rover = this.moveRover(rover, plateau);
        }
      }

      results.push(`${rover.x} ${rover.y} ${rover.direction}`);
    }

    return results;
  }

  private parseRoverData(data: string): Rover {
    const [x, y, direction] = data.split(' ');
    return { x: parseInt(x, 10), y: parseInt(y, 10), direction };
  }

  private changeDirection(currentDirection: string, turn: string): string {
    const currentIndex = this.directions.indexOf(currentDirection);
    if (turn === 'L') {
      return this.directions[(currentIndex + 3) % 4];
    }
    return this.directions[(currentIndex + 1) % 4];
  }

  private moveRover(rover: Rover, plateau: number[]): Rover {
    const { x, y, direction } = rover;

    if (direction === 'N' && y < plateau[1]) {
      rover.y += 1;
    } else if (direction === 'E' && x < plateau[0]) {
      rover.x += 1;
    } else if (direction === 'S' && y > 0) {
      rover.y -= 1;
    } else if (direction === 'W' && x > 0) {
      rover.x -= 1;
    }

    return rover;
  }
}
