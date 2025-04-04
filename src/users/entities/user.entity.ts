
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  firstname: string;

  @Column
  lastname: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;

  @Column
  pic: string;
}
