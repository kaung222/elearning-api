import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { LessonType } from 'generated/course-database-client-types';

class CreateModuleDto {
  @ValidateNested()
  @ApiProperty({ type: () => CreateLessonDto, isArray: true })
  @Type(() => CreateLessonDto)
  lessons: CreateLessonDto[];

  @IsNotEmpty()
  @ApiProperty({ description: 'Module title' })
  @IsString()
  title: string;

  @IsInt()
  @ApiProperty({ description: 'Module order' })
  order: number;

  @IsOptional()
  @ApiProperty({ description: 'Module description' })
  description: string;

  @ApiProperty()
  @IsOptional()
  @IsUUID()
  id?: string;
}

class CreateLessonDto {
  @IsNotEmpty()
  @ApiProperty({ description: 'Lesson title' })
  title: string;

  @IsOptional()
  @ApiProperty({ description: 'Lesson description' })
  description: string;

  @IsOptional()
  @ApiProperty({ description: 'Lesson url' })
  url: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Lesson order' })
  @IsInt()
  order: number;

  @ApiProperty({ enum: LessonType })
  @IsEnum(LessonType)
  type: LessonType;

  @ApiProperty()
  @IsOptional()
  @IsUUID()
  id?: string;
}

export class CreateManyModuleDto {
  @ValidateNested({ each: true })
  @ValidateNested()
  @ApiProperty({ type: () => CreateModuleDto, isArray: true })
  @Type(() => CreateModuleDto)
  modules: CreateModuleDto[];

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({ description: 'Course ID' })
  courseId: string;
}
