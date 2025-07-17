import {
  IsString,
  IsOptional,
  IsInt,
  IsNumber,
  IsArray,
  IsUUID,
  IsJSON,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateInstructorDto {
  @ApiProperty({ description: 'Instructor name' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Instructor title/position' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Instructor avatar URL' })
  @IsString()
  avatar: string;

  @ApiPropertyOptional({ description: 'Instructor cover image URL' })
  @IsOptional()
  @IsString()
  coverImage?: string;

  @ApiProperty({ description: 'Short instructor bio' })
  @IsString()
  bio: string;

  @ApiPropertyOptional({ description: 'Detailed instructor bio' })
  @IsOptional()
  @IsString()
  longBio?: string;

  @ApiProperty({ description: 'Instructor rating' })
  @IsNumber()
  rating: number;

  @ApiProperty({ description: 'Total students taught' })
  @IsInt()
  totalStudents: number;

  @ApiProperty({ description: 'Total courses created' })
  @IsInt()
  totalCourses: number;

  @ApiPropertyOptional({ description: 'Years of experience' })
  @IsOptional()
  @IsString()
  experience?: string;

  @ApiPropertyOptional({ description: 'Instructor location' })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional({ description: 'Date joined the platform' })
  @IsOptional()
  @IsString()
  joinedDate?: string;

  @ApiProperty({ description: 'Instructor specialties' })
  @IsArray()
  @IsString({ each: true })
  specialties: string[];

  @ApiProperty({ description: 'Instructor achievements' })
  @IsArray()
  @IsString({ each: true })
  achievements: string[];

  @ApiProperty({ description: 'Instructor education history' })
  @IsArray()
  @IsString({ each: true })
  education: string[];

  @ApiProperty({ description: 'Social media links' })
  @IsJSON()
  social: Record<string, string>;

  // @ApiPropertyOptional({ description: 'Organization ID' })
  // @IsOptional()
  // @IsUUID()
  // organizationId?: string;
}
