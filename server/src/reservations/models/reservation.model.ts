import {
  AllowNull,
  AutoIncrement,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Guide } from 'src/guides/models/guide.model';
import { Tour } from 'src/tours/models/tour.model';

@Table
export class Reservation extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  persons_count: number;

  @AllowNull(false)
  @Column
  date: Date;

  @AllowNull(false)
  @Column
  phone: string;

  @AllowNull(false)
  @Column
  firstname: string;

  @AllowNull(false)
  @Column
  lastname: string;

  @AllowNull(false)
  @ForeignKey(() => Tour)
  @Column
  tour_id: number;

  @AllowNull(false)
  @ForeignKey(() => Guide)
  @Column
  guide_id: number;
}
