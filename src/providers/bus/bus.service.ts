import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as tei from '../../util/schedules/tei.json';
import * as mesopotamia from '../../util/schedules/mesopotamia.json';
import * as maniakoi from '../../util/schedules/maniakoi.json';
import * as info from '../../util/areas/info.json';

@Injectable()
export class BusService {
  getSchedule(id: number): any {
    switch (id.toString()) {
      case '1':
        return tei;
      case '2':
        return maniakoi;
      case '3':
        return mesopotamia;
      case '52100':
        return info;
      default:
        throw new HttpException('Invalid schedule', HttpStatus.BAD_REQUEST);
    }
  }
}
