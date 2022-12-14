import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Log4jsLogger } from '@nestx-log4js/core';
import { AppModule } from './app.module';

const listenPort = 3000;
const logger = new Logger('main.ts');
const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  /**
   * 接口文档
   */
  const config = new DocumentBuilder()
    .setTitle('接口文档')
    .setDescription('商城后端接口文档')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'jwt',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  /**
   * 使用log4框架打印日志
   */
  app.useLogger(app.get(Log4jsLogger));

  // 处理跨域
  app.enableCors();

  await app.listen(listenPort);
};
bootstrap().then(() => {
  logger.log(`listen in http://localhost:${listenPort}`);
});
