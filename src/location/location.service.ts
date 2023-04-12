import { Injectable } from '@nestjs/common';
import * as locationData from './locations.json';

@Injectable()
export class LocationService {
  getLocations(): any {
    return locationData;
  }

  getLocation(id: number): any {
    return locationData.find((location) => location.id === Number(id));
  }
}
