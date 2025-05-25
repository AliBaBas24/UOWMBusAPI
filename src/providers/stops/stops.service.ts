import { Injectable } from '@nestjs/common';
import * as StopLocations from '../../util/busStops/stops.json'

@Injectable()
export class StopsService {
  getBusStops(): any {
    return StopLocations;
  }
}
