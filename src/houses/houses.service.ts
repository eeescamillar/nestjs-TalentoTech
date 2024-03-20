import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { House } from './houses.entity';
import { CreateHouseDto } from './dto/create-house.dto';

@Injectable()
export class HousesService {
  constructor(@InjectModel('House') private readonly houseModel: Model<House>) { }

  async create(createHouseDto: CreateHouseDto): Promise<House> {
    const newHouse = new this.houseModel({
      ...createHouseDto
    });
    return newHouse.save();
  }

  async findAll(): Promise<House[]> {
    return this.houseModel.find();
  }

  async findOne(id: string): Promise<House> {
    try {
      return this.houseModel.findById(id);
    } catch (error) {
      throw new HttpException('notFound', HttpStatus.NOT_FOUND);
    }
  }

  async update(id: string, updateHouse: CreateHouseDto): Promise<House> {
    updateHouse = {
      ...updateHouse,
    };
    try {
      return await this.houseModel.findByIdAndUpdate(id, updateHouse, { new: true });
    } catch (error) {
      throw new NotFoundException('Inmueble no encontrado')
    }
  }

  async deleteOne(id: string): Promise<boolean> {
    try {
      await this.houseModel.findByIdAndDelete(id);
      return true;
    } catch (error) {
      throw new NotFoundException('Inmueble no encontrado')
    }
  }

}
