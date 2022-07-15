/* eslint-disable prettier/prettier */
import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';;
import { ItemsResolver } from './items.resolver';
@Module({
  providers: [ItemsResolver,PrismaService],
})
export class ItemsModule {}
