import { Controller, Get } from '@nestjs/common';
import { StopsService } from '../../providers/stops/stops.service';

@Controller()
export class StopsController {
  constructor(private stopsService: StopsService) {}
  @Get('stops')
  getStops(): any {
    return this.stopsService.getBusStops();
  }
  
}
