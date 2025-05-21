import { Controller, Get } from '@nestjs/common';
import { TicketService } from '../../providers/ticket/ticket.service';

@Controller()
export class TicketController {
  constructor(private ticketService: TicketService) {}
  @Get('tickets')
  getTickets(): any {
    return this.ticketService.getZone();
  }
}
