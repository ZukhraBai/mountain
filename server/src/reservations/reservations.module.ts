import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Reservation } from './models/reservation.model';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';

@Module({
  imports: [SequelizeModule.forFeature([Reservation])],
  providers: [ReservationsService],
  controllers: [ReservationsController],
})
export class ReservationsModule {}
