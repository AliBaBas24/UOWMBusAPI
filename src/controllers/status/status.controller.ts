import { Controller, Get } from '@nestjs/common';

@Controller()
export class StatusController {
  @Get('status')
  getStatus(): any {
    return { status: 'success' };
  }
}
