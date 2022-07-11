/* eslint-disable prettier/prettier */
import { CreateItemDto } from './dto/create-item.dto'
import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common'
import { ItemsService } from './items.service'
import { Item } from './interfaces/items.interfaces'
@Controller('items')
export class ItemsController {
  //injecting service
  constructor (private readonly itemsService: ItemsService) {}
  @Get()
  findAll (): Promise<Item[]> {
    return this.itemsService.findAll()
  }
  @Get(':id')
  findOne (@Param('id') id:number): Promise<Item> {
    return this.itemsService.findOne(id)
  }
  @Post()
  createItem (@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.createItem(createItemDto)
  }
  @Put(':id')
  updateItem (
    @Body() updateItemDto: CreateItemDto,
    @Param() params: { id: number }
  ): Promise<Item> {
    console.log(params.id)
    return this.itemsService.updateItem(params.id, updateItemDto)
  }
  @Delete(':id')
  deleteItem (@Param() param:{id:number}):Promise<Item> {
    return this.itemsService.deleteItem(param.id)
  }
}
