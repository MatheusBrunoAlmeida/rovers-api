import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FileReaderService {
  // Read the file txt
  readInputFile(filename: string): string {
    const filePath = path.join(__dirname, '..', '..', filename);
    return fs.readFileSync(filePath, 'utf8');
  }
}
