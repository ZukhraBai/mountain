import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tour } from './tours/models/tour.model';
import { Guide } from './guides/models/guide.model';
import { Reservation } from './reservations/models/reservation.model';
import { ReservationsModule } from './reservations/reservations.module';
import { ToursModule } from './tours/tours.module';
import { GuidesModule } from './guides/guides.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mountain',
      models: [Tour, Guide, Reservation],
      autoLoadModels: true,
      synchronize: true, // TODO: remove for production
    }),
    ReservationsModule,
    ToursModule,
    GuidesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
