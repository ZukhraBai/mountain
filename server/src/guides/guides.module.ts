import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Guide } from './models/guide.model';
import { GuidesService } from './guides.service';
import { guidesController } from './guides.controller';

@Module({
  imports: [SequelizeModule.forFeature([Guide])],
  providers: [GuidesService],
  controllers: [guidesController],
  exports: [GuidesService],
})
export class GuidesModule {}
