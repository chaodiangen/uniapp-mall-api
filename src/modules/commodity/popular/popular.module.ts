import { Module } from '@nestjs/common';
import { PopularController } from './popular.controller';
import { PopularService } from './popular.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from '../../user/user.module';
import { Popular } from './entities/popular.entities';

@Module({
  controllers: [PopularController],
  providers: [PopularService],
  imports: [UserModule, SequelizeModule.forFeature([Popular])],
})
export class PopularModule {}
