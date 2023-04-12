import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEndPoints(): any {
    return {
      characters: '/api/character',
      locations: '/api/location',
      episodes: '/api/episode',
    };
  }
}
