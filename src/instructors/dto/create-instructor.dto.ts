import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsArray,
  IsJSON,
  IsNotEmpty,
  IsUUID,
  IsBoolean,
} from 'class-validator';

export class CreateInstructorDto {
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  avatar: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  coverImage?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  bio?: string;

  @IsString()
  @ApiProperty()
  shortBio: string;

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({ type: [String] })
  specialties: string[];

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({ type: [String] })
  achievements: string[];

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({ type: [String] })
  education: string[];

  @ApiProperty({ type: Object })
  social: Record<string, any>; // Prisma `Json` maps well to this

  @IsString()
  @IsOptional()
  password: string;

  @IsBoolean()
  @IsNotEmpty()
  access_lms: boolean;
}
