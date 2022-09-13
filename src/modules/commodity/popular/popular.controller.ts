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
import { PopularPagination } from 'src/interface/popular.interface';
import { Popular } from './entities/popular.entities';
import { PopularService } from './popular.service';

@Controller('popular')
@ApiTags('热门商品')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
export class PopularController {
  constructor(private readonly popularService: PopularService) {}

  @Post('create')
  @ApiOperation({
    summary: '创建商品',
  })
  async createProject(@Body() project: Popular, @Req() request) {
    return await this.popularService.createProject(project, request);
  }

  @Post('delete/:id')
  @ApiOperation({
    summary: '删除商品',
  })
  async deleteProject(@Param('id') popularId: string) {
    return await this.popularService.deleteProject(popularId);
  }

  @Get('update/:id')
  @ApiOperation({
    summary: '修改商品',
  })
  async updateProject(@Param('id') id: string, @Body() Popular: Popular) {
    return await this.popularService.updateProject(id, Popular);
  }

  @Post('all')
  @ApiOperation({
    summary: '查找当前用户的商品',
  })
  async searchUserAllProject(@Body() body: PopularPagination, @Req() request) {
    return await this.popularService.searchUserAllProject(
      body.pageNum,
      body.pageSize,
      body.name,
      request,
    );
  }
  @Post('popular')
  @ApiOperation({
    summary: '查找当前用户的商品',
  })
  async searchAllProject(@Body() body: PopularPagination) {
    return await this.popularService.searchAllProject(
      body.pageNum,
      body.pageSize,
      body.name,
    );
  }
}
