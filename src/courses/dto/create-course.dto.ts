import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsInt,
  IsNumber,
  IsArray,
  IsUUID,
  IsPositive,
  IsDateString,
  IsEnum,
  IsDate,
} from 'class-validator';
import { Level, Status, Type } from 'generated/course-database-client-types';

export class CreateCourseDto {
  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsUUID()
  @ApiProperty()
  instructorId: string;

  // Pricing and duration
  @IsString()
  @ApiProperty()
  duration: string;

  @IsNumber()
  @ApiProperty()
  price: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  salePrice?: number;

  @IsString()
  @ApiProperty()
  thumbnail: string;

  @IsOptional()
  @ApiProperty()
  @IsInt()
  maxStudent?: number;

  @IsOptional()
  @ApiProperty()
  @IsString()
  language?: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  shortDescription: string;

  @IsDate()
  @IsOptional()
  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  endDate: Date;

  @IsString()
  @ApiProperty()
  categoryId: string;

  // Course details
  @IsArray()
  @ApiProperty()
  @IsString({ each: true })
  tags: string[];

  @IsArray()
  @ApiProperty()
  @IsString({ each: true })
  whatYouWillLearn: string[];

  @IsArray()
  @ApiProperty()
  @IsString({ each: true })
  requirements: string[];

  @IsArray()
  @ApiProperty()
  @IsString({ each: true })
  includes: string[];

  // Status, level, type
  @ApiProperty()
  @IsEnum(Status) // Adjust the values based on actual enum values
  status: Status;

  @IsEnum(Level)
  @ApiProperty()
  level: Level; // Adjust based on enum or string values

  @IsString()
  @IsEnum(Type)
  @ApiProperty()
  type: Type; // Adjust based on enum or string values

  @IsOptional()
  @ApiProperty()
  @IsDateString()
  publishedAt?: string;
}
