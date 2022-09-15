import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IResponse } from 'src/interface/response.interface';
import { Popular } from './entities/popular.entities';
import { Op } from 'sequelize';

const logger = new Logger('popular.service');
@Injectable()
export class PopularService {
  private response: IResponse;
  constructor(
    @InjectModel(Popular) private readonly popularModel: typeof Popular, // private readonly userService: UserService,
  ) {}

  /**
   * 创建项目
   * @param popular
   */
  async createProject(popular, request) {
    try {
      await this.popularModel.create({
        ...popular,
        userId: request.user.userId,
      });
      return (this.response = {
        code: 0,
        data: '创建成功',
      });
    } catch (error) {
      logger.log(error);
      return (this.response = {
        code: 1,
        data: '创建失败',
      });
    }
  }

  /**
   * 查找项目
   * @param id
   * @returns
   */
  async findOneById(id: string): Promise<Popular> {
    return this.popularModel.findOne({
      where: {
        id,
      },
    });
  }

  /**
   * 删除项目
   * @param projectId
   * @returns
   */
  async deleteProject(projectId: string) {
    const data = await this.findOneById(projectId);
    try {
      await data.destroy();
      return (this.response = {
        code: 0,
        data: '删除成功',
      });
    } catch (error) {
      return (this.response = {
        code: 1,
        data: '删除失败',
      });
    }
  }

  /**
   * 修改项目
   * @param projectId 项目id
   * @param popular 修改值
   * @returns
   */
  async updateProject(projectId: string, popular: Popular) {
    const data = await this.findOneById(projectId);
    try {
      data.update(popular);
      return (this.response = {
        code: 0,
        data: '修改成功',
      });
    } catch (error) {
      return (this.response = {
        code: 1,
        data: '修改失败',
      });
    }
  }

  /**
   * 查看当前登录用户上传的热门作品项目
   * @param popular
   * @returns
   */
  async searchUserAllProject(
    pageNum: number,
    pageSize: number,
    sectionName: string,
    request,
  ) {
    try {
      const _id = request.user.userId;
      const { count, rows } = await this.popularModel.findAndCountAll({
        offset: Number(pageNum) - 1, // 查询的起始下标
        limit: Number(pageSize), // 查询的条数
        where: {
          sectionName: {
            [Op.like]: '%' + sectionName + '%',
          },
          userId: {
            [Op.eq]: _id,
          },
        },
      });
      return (this.response = {
        code: 0,
        data: {
          data: rows,
          total: count,
        },
      });
    } catch (error) {
      return (this.response = {
        code: 1,
        data: '查找失败',
      });
    }
  }

  /**
   * 查看热门作品项目
   * @param popular
   * @returns
   */
  async searchAllProject(
    pageNum: number,
    pageSize: number,
    sectionName: string,
  ) {
    try {
      const { count, rows } = await this.popularModel.findAndCountAll({
        offset: Number(pageNum) - 1, // 查询的起始下标
        limit: Number(pageSize), // 查询的条数
        where: {
          sectionName: {
            [Op.like]: '%' + sectionName + '%',
          },
        },
      });
      return (this.response = {
        code: 0,
        data: {
          data: rows,
          total: count,
        },
      });
    } catch (error) {
      return (this.response = {
        code: 1,
        data: '查找失败',
      });
    }
  }
}
