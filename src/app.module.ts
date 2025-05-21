import { Module } from '@nestjs/common';
import { BusController } from './controllers/bus/bus.controller';
import { BusService } from './providers/bus/bus.service';
import { MorganInterceptor } from 'nest-morgan';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganModule } from 'nest-morgan';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { TicketController } from './controllers/ticket/ticket.controller';
import { TicketService } from './providers/ticket/ticket.service';

@Module({
  imports: [
    MorganModule,
    ServeStaticModule.forRoot({ rootPath: './client' }),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [BusController, TicketController],
  providers: [
    TicketService,
    BusService,
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('combined'),
    },
  ],
})
export class AppModule {}
