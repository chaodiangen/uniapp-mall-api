import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'bar',
})
export class Bar extends Model<Bar> {
  @ApiProperty({
    type: String,
  })
  @Column
  readonly name: string;
}
