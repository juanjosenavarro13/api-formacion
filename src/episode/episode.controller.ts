import { EpisodeService } from './episode.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('episode')
export class EpisodeController {
  constructor(private EpisodeService: EpisodeService) {}

  @Get()
  getEpisodes(): any {
    return this.EpisodeService.getEpisodes();
  }

  @Get('/:id')
  getEpisode(@Param() params): any {
    return this.EpisodeService.getEpisode(params.id);
  }
}
