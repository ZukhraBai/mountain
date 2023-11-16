import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Reservation } from './models/reservation.model';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectModel(Reservation)
    private reservationModel: typeof Reservation,
  ) {}

  async createReservation(createReservationDto: CreateReservationDto) {
    try {
      await this.reservationModel.create({ ...createReservationDto });
    } catch (error) {
      throw new HttpException(
        'fail to make reservation.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  findOne(id: string): Promise<Reservation> {
    return this.reservationModel.findOne({
      where: {
        id,
      },
    });
  }

  async cancelReservation(id: string) {
    try {
      const reservation = await this.findOne(id);
      await reservation.update({ status: 'canceled' });
    } catch (error) {
      throw new HttpException(
        'Fail to cancel reservation',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
