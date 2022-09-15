import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IndexListService } from './index_list.service';

@Controller('index_list')
@Controller('popular')
@ApiTags('导航信息')
export class IndexListController {
  constructor(private readonly indexListService: IndexListService) {}

  @Get('data')
  @ApiOperation({
    summary: '首页信息',
  })
  async selectBar() {
    return await this.indexListService.selectBar();
  }
  @Get('/2/data/1')
  @ApiOperation({
    summary: '分类商品',
  })
  async find() {
    return await this.indexListService.find();
  }
}
