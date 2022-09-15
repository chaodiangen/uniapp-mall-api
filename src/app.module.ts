import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Log4jsModule } from '@nestx-log4js/core';
import { DbModule } from './db/db.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { EmailModule } from './modules/email/email.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { PopularModule } from './modules/commodity/popular/popular.module';
import { IndexListModule } from './modules/commodity/index_list/index_list.module';
import { GoodsModule } from './modules/commodity/goods/goods.module';
import EmailConfig from './utils/email.config';

@Module({
  imports: [
    Log4jsModule.forRoot(),
    DbModule,
    UserModule,
    AuthModule,
    EmailModule,
    MailerModule.forRoot({
      ...EmailConfig,
    }),
    PopularModule,
    IndexListModule,
    GoodsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
