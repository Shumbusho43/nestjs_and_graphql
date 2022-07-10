/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/items.interfaces';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
    constructor(@InjectModel("Item") private readonly itemModel:Model<Item>){}
    async findAll():Promise<Item[]>{
        return await this.itemModel.find();
    }
    async findOne(id:string):Promise<Item>{
        return await this.itemModel.findById(id);
    }
    async createItem(createItemDto:CreateItemDto):Promise<Item>{
        const createdItem = new this.itemModel(createItemDto);
        return await createdItem.save();
    }
    async updateItem(id:string,updateItemDto:CreateItemDto):Promise<Item>{
        return await this.itemModel.findByIdAndUpdate(id,updateItemDto,{
            new:true
        });
    }
    async deleteItem(id:string):Promise<Item>{
        return await this.itemModel.findByIdAndRemove(id);
    }
}
