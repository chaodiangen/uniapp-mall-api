import { PopularPagination } from 'src/interface/popular.interface';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GoodsService } from './goods.service';

@ApiTags('搜索商品')
@Controller('goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}
  @Post('/search')
  @ApiOperation({
    summary: '搜索商品',
  })
  async search(@Body() body: PopularPagination) {
    return await this.goodsService.search(body);
  }
  @Get('/list')
  @ApiOperation({
    summary: '商品分类',
  })
  async list() {
    return await this.goodsService.list();
  }
}
