import { IsNotEmpty, IsNumber, IsString, Validate } from "class-validator";

export class CreateHouseDto {
  @IsNotEmpty()
  readonly address: string;
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  state: string;
  @IsNotEmpty()
  @IsNumber()
  size: number;
  @IsNotEmpty()
  type: string;
  @IsNotEmpty()
  zip_code: string;
  @IsNotEmpty()
  code: string;
  @IsNotEmpty()
  @IsNumber()
  rooms: number;
  @IsNumber()
  @IsNotEmpty()
  bathrooms: number;
  @IsNotEmpty()
  @IsNumber()
  price: number;
  image: string;
}
