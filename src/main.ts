import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ExceptionHandler } from './exceptions/exceptionHandler';
import { description, version } from './swagger/doc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ExceptionHandler());

  const config = new DocumentBuilder()
    .setTitle('Descomplication')
    .setDescription(description)
    .setVersion(version)
    .addBearerAuth()
    .addTag('AUTHENTICATE')
    .addTag('Activity')
    .addTag('Badge')
    .addTag('Question')
    .addTag('Squad')
    .addTag('Tutorial')
    .addTag('User')
    .addTag('Health')
    .addTag('Google')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(process.env.PORT);
}
bootstrap();
