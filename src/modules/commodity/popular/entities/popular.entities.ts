import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'commodity',
})
export class Popular extends Model<Popular> {
  @ApiProperty({
    type: String,
    example: '优惠',
    description: '商品标签',
  })
  @Column
  readonly sectionName: string;
  @ApiProperty({
    type: String,
    example: '',
    description: '封面',
  })
  @Column
  readonly cover: string;
  @ApiProperty({
    type: String,
    example: '1',
    description: '数量',
  })
  @Column
  readonly goodCount: string;
  @ApiProperty({
    type: String,
    example: '1',
    description: '商品类型',
  })
  @Column
  readonly firstTypeName: string;
  @ApiProperty({
    type: String,
    example: '1',
    description: '商品介绍',
  })
  @Column
  readonly intro: string;
  @ApiProperty({
    type: String,
    example: '1',
    description: '标签类型',
  })
  @ApiProperty({
    type: String,
    example: 1,
    description: '商品标签',
  })
  @Column
  readonly tagIds: string;
  @Column
  readonly userId?: string;
}
