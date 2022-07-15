/* eslint-disable prettier/prettier */
import { PrismaService } from './../prisma.service';
import { Args, Mutation, Query,Resolver } from "@nestjs/graphql";   
import { Injectable } from '@nestjs/common';
@Resolver()
@Injectable()
export class ItemsResolver{
constructor(private prisma:PrismaService){}
 @Query()
 items(){
return this.prisma.items.findMany();
 }
 @Query()
 item(@Args('id') id:number){
    const item= this.prisma.items.findUnique({
        where:{
            id:Number(id)
        }
    })
    console.log(item)
    return item;
 }
 @Mutation()
createItem(@Args('name') name,@Args('description') description,@Args('qty') qty){
    return this.prisma.items.create({
        data:{
          name,
          description,
          qty
        }
    })
 }
 @Mutation()
 updateItem(@Args('id') id:number,@Args('name') name,@Args('description') description,@Args('qty') qty){
    return this.prisma.items.update({
        where:{
            id:Number(id)
        },
        data:{
            name,
            description,
            qty
        }
    })
 }
 @Mutation()
 deleteItem(@Args('id') id){
    return this.prisma.items.delete({
        where:{
            id:Number(id)
        }
    })
 }
}   