import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HouseSchema } from './house.schema';
import { HousesController } from './houses.controller';
import { HousesService } from './houses.service';
import { ApiValidation } from './dto/validations/apiColombia.validator';

@Module({
  imports: [MongooseModule.forFeature([{name: 'House', schema: HouseSchema}])],
  controllers: [HousesController],
  providers: [HousesService, ApiValidation]
})
export class HousesModule {}
