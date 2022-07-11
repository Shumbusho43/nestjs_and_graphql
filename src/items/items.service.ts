import { PrismaService } from './../prisma.service';
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
 import { Item } from './interfaces/items.interfaces';
import { CreateItemDto } from './dto/create-item.dto';
@Injectable()
export class ItemsService {
    constructor(private prisma:PrismaService){}
    async findAll():Promise<Item[]>{
        return await this.prisma.items.findMany();
    }
    async findOne(id:number):Promise<Item>{
        return await this.prisma.items.findUnique({
            where:{
                id
            }
        })
    }
    async createItem(createItemDto:CreateItemDto):Promise<Item>{
        const createdItem =this.prisma.items.create({
            data:{
                name:createItemDto.name,
                description:createItemDto.description,
                qty:createItemDto.qty
            }
        })
        return createdItem;
    }
    async updateItem(id:number,updateItemDto:CreateItemDto):Promise<Item>{
        return await this.prisma.items.update({
            where:{
                id
            },
            data:{
            name:updateItemDto.name,
            description:updateItemDto.description,
            qty:updateItemDto.qty
            }
        })
    }
    async deleteItem(id:number):Promise<Item>{
        return await this.prisma.items.delete({
            where:{
                id
            }
        })
    }
}
