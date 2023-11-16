import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tour } from './models/tour.model';
import { CreateTourDto } from './dto/create-tour.dto';

@Injectable()
export class ToursService {
  constructor(
    @InjectModel(Tour)
    private tourModel: typeof Tour,
  ) {}

  mockTours = [
    {
      name: 'Arkhiz',
      price: 100,
    },
    {
      name: 'Bermamit',
      price: 100,
    },
    {
      name: 'Gumbashi',
      price: 100,
    },
  ];

  async createTour(createTourDto: CreateTourDto) {
    try {
      await this.tourModel.create({ ...createTourDto });
    } catch (error) {
      throw new HttpException('fail to create tour.', HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number) {
    try {
      return await this.tourModel.findOne({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException('fail to find tour.', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      const tours = await this.tourModel.findAll();
      if (!tours.length) {
        // TODO: delete mockes; create tours in admin panel
        this.tourModel.bulkCreate([...this.mockTours]);
      }
      return tours;
    } catch (error) {
      throw new HttpException('Fail to find tours', HttpStatus.BAD_REQUEST);
    }
  }

  async removeTour(id: number) {
    try {
      const tour = await this.findOne(id);
      await tour.destroy();
    } catch (error) {
      throw new HttpException('Fail to remove tour', HttpStatus.BAD_REQUEST);
    }
  }
}
