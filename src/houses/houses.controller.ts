import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { HousesService } from './houses.service';
import { CreateHouseDto } from './dto/create-house.dto';
import { House } from './houses.entity';
import { ApiValidation } from './dto/validations/apiColombia.validator';

@Controller('houses')
export class HousesController {
  constructor(private readonly housesService: HousesService,
    private readonly validateStatement: ApiValidation) { }

  @Post()
  @HttpCode(201)
  async create(@Body() CreateHouseDto: CreateHouseDto): Promise<House> {
    const validState = await this.validateStatement.validateState(CreateHouseDto.state)
    const validCity = await this.validateStatement.validateCity(CreateHouseDto.city)
    if (!validState) {
      throw new Error('Departamento no valido');
    }else if(!validCity){
      throw new Error('Ciudad no valida')
    }

    return this.housesService.create(CreateHouseDto);
  }

  @Get()
  async findAll(): Promise<House[]> {
    return this.housesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<House> {
    return this.housesService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateHouse: CreateHouseDto,
  ): Promise<House> {
    return this.housesService.update(id, updateHouse);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return this.housesService.deleteOne(id);
  }
}
