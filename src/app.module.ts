/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import {GraphQLModule} from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
@Module({
  imports: [
    ItemsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      typePaths:["./**/*.graphql"]
    })
  ],
  providers: [AppService],
})
export class AppModule {}
