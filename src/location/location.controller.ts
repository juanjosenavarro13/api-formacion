import { Controller, Get, Param } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private LocationService: LocationService) {}

  @Get()
  getEpisodes(): any {
    return this.LocationService.getLocations();
  }

  @Get('/:id')
  getEpisode(@Param() params): any {
    return this.LocationService.getLocation(params.id);
  }
}
