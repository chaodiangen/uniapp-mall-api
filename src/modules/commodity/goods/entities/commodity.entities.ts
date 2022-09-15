import { Column, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
@Table({
  tableName: 'commodity',
})
export class Commodity extends Model<Commodity> {
  @ApiProperty({
    type: String,
  })
  @Column
  readonly name: string;
  @ApiProperty({
    type: String,
  })
  @Column
  readonly url: string;
  @ApiProperty({
    type: String,
  })
  @Column
  readonly goodCount: string;
  @ApiProperty({
    type: String,
  })
  @Column
  readonly intro: string;
  @ApiProperty({
    type: String,
  })
  @Column
  readonly firstTypeName: string;
  @ApiProperty({
    type: String,
  })
  @Column
  readonly pprice: string;
  @ApiProperty({
    type: String,
  })
  @Column
  readonly oprice: string;
  @ApiProperty({
    type: String,
  })
  @Column
  readonly title: string;
  @ApiProperty({
    type: String,
  })
  @Column
  readonly mallName: string;
  @ApiProperty({
    type: Number,
  })
  @Column
  readonly secondTypeId: number;
  @ApiProperty({
    type: Number,
  })
  @Column
  readonly userId: number;
}
