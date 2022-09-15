import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IResponse } from 'src/interface/response.interface';
import { Op } from 'sequelize';
import { Commodity } from './entities/commodity.entities';

const logger = new Logger('popular.service');
@Injectable()
export class GoodsService {
  private response: IResponse;
  constructor(
    @InjectModel(Commodity) private readonly commodityModel: typeof Commodity,
  ) {}
  /**
   * 分查找数据
   * @param pageNum
   * @param pageSize
   * @param sectionName
   * @returns
   */

  async search(
    pageNum: number,
    pageSize: number,
    sectionName: string,
    orderName: string,
  ) {
    try {
      const { count, rows } = await this.commodityModel.findAndCountAll({
        offset: Number(pageNum) - 1, // 查询的起始下标
        limit: Number(pageSize), // 查询的条数
        where: {
          title: {
            [Op.like]: '%' + sectionName + '%',
          },
        },
        order: [['pprice', orderName]],
      });
      return (this.response = {
        code: 0,
        data: {
          data: rows,
          total: count,
        },
      });
    } catch (error) {
      console.log(error);
      return (this.response = {
        code: 1,
        data: '获取失败',
      });
    }
  }
}
