import { Module } from '@nestjs/common';
import { ToursController } from './tours.controller';
import { ToursService } from './tours.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tour } from './models/tour.model';

@Module({
  imports: [SequelizeModule.forFeature([Tour])],
  providers: [ToursService],
  controllers: [ToursController],
  exports: [ToursService],
})
export class ToursModule {}
