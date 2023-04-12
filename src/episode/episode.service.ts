import { Injectable } from '@nestjs/common';
import * as episodeData from './episodes.json';

@Injectable()
export class EpisodeService {
  getEpisodes(): any {
    return episodeData;
  }

  getEpisode(id: number): any {
    return episodeData.find((episode) => episode.id === Number(id));
  }
}
