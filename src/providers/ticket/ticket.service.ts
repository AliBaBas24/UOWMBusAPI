import { Injectable } from '@nestjs/common';
import * as ticket from '../../util/tickets/tickets.json';

@Injectable()
export class TicketService {
  getZone() {
    return ticket;
  }
}
