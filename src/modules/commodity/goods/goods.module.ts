import { Module } from '@nestjs/common';
import { GoodsController } from './goods.controller';
import { GoodsService } from './goods.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Commodity } from './entities/commodity.entities';

@Module({
  controllers: [GoodsController],
  providers: [GoodsService],
  imports: [SequelizeModule.forFeature([Commodity])],
})
export class GoodsModule {}
