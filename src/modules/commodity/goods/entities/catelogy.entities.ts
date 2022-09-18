import {
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { CatelogyList } from './catelogyData.entities';

@Table({
  tableName: 'catelogy',
  timestamps: false,
})
export class Catelogy extends Model<Catelogy> {
  @ApiProperty({
    type: String,
  })
  @Column
  readonly name: string;
  @ApiProperty({
    type: String,
  })
  @Column
  readonly level: string;
  @ApiProperty({
    type: String,
  })
  @PrimaryKey //主键
  @Column
  readonly cid: string;
  @HasMany(() => CatelogyList)
  catelogyList: CatelogyList[];
}
