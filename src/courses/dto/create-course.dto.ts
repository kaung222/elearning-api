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
} from 'class-validator';
import { Level, Status, Type } from 'generated/course-database-client-types';

export class CreateCourseDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  longDescription?: string;

  // Instructor info
  @IsString()
  instructor: string;

  @IsString()
  instructorAvatar: string;

  @IsOptional()
  @IsString()
  instructorTitle?: string;

  @IsOptional()
  @IsString()
  instructorBio?: string;

  @IsUUID()
  instructorId: string;

  // Pricing and duration
  @IsString()
  duration: string;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  salePrice?: number;

  @IsString()
  thumbnail: string;

  @IsOptional()
  @IsInt()
  maxStudents?: number;

  @IsOptional()
  @IsString()
  language?: string;

  @IsOptional()
  @IsString()
  category?: string;

  // Course details
  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsArray()
  @IsString({ each: true })
  whatYouWillLearn: string[];

  @IsArray()
  @IsString({ each: true })
  requirements: string[];

  @IsArray()
  @IsString({ each: true })
  includes: string[];

  // Status, level, type
  @IsEnum(Status) // Adjust the values based on actual enum values
  status: Status;

  @IsEnum(Level)
  level: Level; // Adjust based on enum or string values

  @IsString()
  @IsEnum(Type)
  type: Type; // Adjust based on enum or string values

  @IsOptional()
  @IsDateString()
  publishedAt?: string;
}
