import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BusService } from '../../providers/bus/bus.service';

@Controller()
export class BusController {
  constructor(private busService: BusService) {}
  @Get('schedule/:id')
  getBusScheduleById(@Param('id', ParseIntPipe) id: number): any {
    return this.busService.getSchedule(id);
  }
}
