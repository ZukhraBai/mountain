import { Body, Controller, Post } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
@Controller()
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post('/reserve')
  async makeAReservation(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationsService.createReservation({
      ...createReservationDto,
      status: 'active',
    });
  }
}
