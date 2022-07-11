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
  findOne (@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id)
  }
  @Post()
  createItem (@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.createItem(createItemDto)
  }
  @Put(':id')
  updateItem (
    @Body() updateItemDto: CreateItemDto,
    @Param('id') id,
  ): Promise<Item> {
    console.log(id)
    return this.itemsService.updateItem(id, updateItemDto)
  }
  @Delete(':id')
  deleteItem (@Param('id') id): Promise<Item> {
    return this.itemsService.deleteItem(id)
  }
}
