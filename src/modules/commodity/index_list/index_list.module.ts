import { Module } from '@nestjs/common';
import { Bar } from './entities/bar.entities';
import { IndexListController } from './index_list.controller';
import { IndexListService } from './index_list.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from '../../user/user.module';
@Module({
  controllers: [IndexListController],
  providers: [IndexListService],
  imports: [UserModule, SequelizeModule.forFeature([Bar])],
})
export class IndexListModule {}
