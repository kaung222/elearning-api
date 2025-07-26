import {
  IsString,
  IsEnum,
  IsUrl,
  IsEmail,
  IsPhoneNumber,
  IsInt,
  IsNumber,
  IsArray,
  IsBoolean,
  IsOptional,
  IsJSON,
  IsNotEmpty,
  IsUUID,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { OrgType } from 'generated/org-database-client-types';

export class CreateOrganizationDto {
  @ApiProperty({ description: 'Organization name' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Organization type', enum: OrgType })
  @IsEnum(OrgType)
  type: OrgType;

  @ApiProperty({ description: 'Organization logo URL' })
  @IsUrl()
  logo: string;

  @ApiProperty({ description: 'Organization cover image URL' })
  @IsUrl()
  coverImage: string;

  @ApiProperty({ description: 'Short description of the organization' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Detailed description of the organization' })
  @IsString()
  longDescription: string;

  @ApiProperty({ description: 'Organization location' })
  @IsString()
  location: string;

  @ApiProperty({ description: 'Organization website' })
  @IsUrl()
  website: string;

  @ApiProperty({ description: 'Organization contact email' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Organization phone number' })
  @IsPhoneNumber()
  phone: string;

  @ApiProperty({ description: 'Year the organization was founded' })
  @IsString()
  founded: string;

  @ApiProperty({ description: 'Total number of courses offered' })
  @IsInt()
  totalCourses: number;

  @ApiProperty({ description: 'Total number of students enrolled' })
  @IsInt()
  totalStudents: number;

  @ApiProperty({ description: 'Total number of instructors' })
  @IsInt()
  totalInstructors: number;

  @ApiProperty({ description: 'Organization specialties' })
  @IsArray()
  @IsString({ each: true })
  specialties: string[];

  @ApiProperty({ description: 'Whether the organization is featured' })
  @IsBoolean()
  featured: boolean;

  @ApiProperty({ description: 'Whether the organization is verified' })
  @IsBoolean()
  verified: boolean;

  @ApiProperty({ description: 'Organization accreditations' })
  @IsArray()
  @IsString({ each: true })
  accreditation: string[];

  @ApiProperty({ description: 'Organization mission statement' })
  @IsString()
  mission: string;

  @ApiProperty({ description: 'Organization vision statement' })
  @IsString()
  vision: string;

  @ApiProperty({ description: 'Organization achievements' })
  @IsArray()
  @IsString({ each: true })
  achievements: string[];

  @ApiProperty({ description: 'Organization partnerships' })
  @IsArray()
  @IsString({ each: true })
  partnerships: string[];

  @ApiProperty({ description: 'Social media links' })
  @IsJSON()
  social: Record<string, string>;
}
