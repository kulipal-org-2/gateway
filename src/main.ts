import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { operationIdFactory, swaggerConfig } from 'kulipal-shared';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, swaggerConfig, {
    operationIdFactory,
  });

  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
      docExpansion: 'none',
      displayOperationId: true,
    },
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
