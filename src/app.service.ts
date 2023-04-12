import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEndPoints(): any {
    return {
      characters: '/character',
      locations: '/location',
      episodes: '/episode',
    };
  }
}
