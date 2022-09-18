import { Module } from '@nestjs/common';
import { GoodsController } from './goods.controller';
import { GoodsService } from './goods.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Commodity } from './entities/commodity.entities';
import { Catelogy } from './entities/catelogy.entities';
import { CatelogyList } from './entities/catelogyData.entities';

@Module({
  controllers: [GoodsController],
  providers: [GoodsService],
  imports: [SequelizeModule.forFeature([Commodity, Catelogy, CatelogyList])],
})
export class GoodsModule {}
