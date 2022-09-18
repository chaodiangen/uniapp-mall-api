import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Catelogy } from './catelogy.entities';
@Table({
  tableName: 'catelogyData',
  timestamps: false,
})
export class CatelogyList extends Model<CatelogyList> {
  @ApiProperty({
    type: String,
  })
  @Column
  readonly name: string;
  @ApiProperty({
    type: String,
  })
  @Column
  readonly icon: string;
  @ApiProperty({
    type: String,
  })
  @Column
  readonly level: string;
  @ApiProperty({
    type: String,
  })
  @Column
  readonly cid: string;

  @ForeignKey(() => Catelogy)
  @Column
  readonly parentId: string;
  //定义关系
  @BelongsTo(() => Catelogy)
  catelogy: Catelogy;
}
