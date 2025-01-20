import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'Title must be string' })
  @IsNotEmpty({ message: 'Title must not be empty' })
  title: string;

  @IsString({ message: 'Description must be string' })
  @IsNotEmpty({ message: 'Description must not be empty' })
  description: string;

  @IsNotEmpty({ message: 'Price cannot be empty' })
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Enter a valid price!' })
  @IsPositive({ message: 'Price cannot be negative' })
  price: number;

  @IsNotEmpty({ message: 'stock should not be empty' })
  @IsNumber({}, { message: 'Stock should be a number' })
  @Min(0, { message: 'Stock cannot be negative' })
  stock: number;

  @IsNotEmpty({ message: 'Images should not be empty' })
  @IsArray({ message: 'Images should be in array format' })
  images: string[];

  @IsNotEmpty({ message: 'Category ID should not be empty' })
  @IsNumber({}, { message: 'Category ID should be a number' })
  category: number;
}
