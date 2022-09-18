import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IResponse } from 'src/interface/response.interface';
import { Op } from 'sequelize';
import { Commodity } from './entities/commodity.entities';
import { Catelogy } from './entities/catelogy.entities';
import { CatelogyList } from './entities/catelogyData.entities';

const logger = new Logger('popular.service');
@Injectable()
export class GoodsService {
  private response: IResponse;
  constructor(
    @InjectModel(Commodity) private readonly commodityModel: typeof Commodity,
    @InjectModel(Catelogy) private readonly catelogyModel: typeof Catelogy,
    @InjectModel(CatelogyList)
    private readonly catelogyListModel: typeof CatelogyList,
  ) {}

  /**
   * 分查找数据
   * @param pageNum
   * @param pageSize
   * @param sectionName
   * @returns
   */
  async search(body) {
    try {
      const { count, rows } = await this.commodityModel.findAndCountAll({
        offset: Number(body.pageNum) - 1, // 查询的起始下标
        limit: Number(body.pageSize), // 查询的条数
        where: {
          title: {
            [Op.like]: '%' + body.name + '%',
          },
        },
        order: [[body.type, body.order]],
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

  async list() {
    try {
      const data = await this.catelogyModel.findAll({
        include: {
          model: CatelogyList,
          attributes: ['cid', 'name', 'level', 'icon', 'parentId'],
        },
      });
      return (this.response = {
        code: 0,
        data,
      });
    } catch (error) {
      return (this.response = {
        code: 1,
        data: error,
      });
    }
  }
}
