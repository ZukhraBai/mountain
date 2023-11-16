import {
  AllowNull,
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class Guide extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  firstname: string;

  @AllowNull(false)
  @Column
  lastname: string;

  @AllowNull(false)
  @Column
  phone: string;

  @Column
  about: string;
}
