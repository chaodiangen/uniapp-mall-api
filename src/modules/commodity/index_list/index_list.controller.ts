import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IndexListService } from './index_list.service';

@Controller('index_list')
@Controller('popular')
@ApiTags('导航信息')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
export class IndexListController {
  constructor(private readonly indexListService: IndexListService) {}

  @Get('data')
  @ApiOperation({
    summary: '查找bar',
  })
  async selectBar() {
    return await this.indexListService.selectBar();
  }
  @Get('/:type/data/:id')
  @ApiOperation({
    summary: '查找当前用户的商品',
  })
  async find() {
    return await this.indexListService.find();
  }
}
