import { PrismaService } from './prisma.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Learning swagger')
    .setDescription('The Items API description')
    .setVersion('1.0')
    .addTag('items')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
}
bootstrap();
