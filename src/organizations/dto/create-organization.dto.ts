import {
  IsString,
  IsEnum,
  IsUrl,
  IsEmail,
  IsPhoneNumber,
  IsArray,
  IsJSON,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrganizationDto {
  @ApiProperty({ description: 'Organization name' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Organization type', type: 'string' })
  type: string;

  @ApiProperty({ description: 'Organization logo URL' })
  @IsUrl()
  logo: string;

  @ApiProperty({ description: 'Detailed description of the organization' })
  @IsString()
  shortDescription: string;

  @ApiProperty({ description: 'Short description of the organization' })
  @IsString()
  description: string;

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
  phone: string;

  @ApiProperty({ description: 'Organization specialties' })
  @IsArray()
  @IsString({ each: true })
  specialties: string[];

  @ApiProperty({ description: 'Organization mission statement' })
  @IsString()
  mission: string;

  @ApiProperty({ description: 'Organization vision statement' })
  @IsString()
  vision: string;

  @ApiProperty({ description: 'Social media links' })
  @IsJSON()
  social: Record<string, string>;

  @ApiProperty({ description: 'Organization city' })
  @IsOptional()
  city: string;

  @ApiProperty({ description: 'Organization address' })
  @IsOptional()
  address: string;

  @ApiProperty({ description: 'Organization country' })
  @IsOptional()
  country: string;
}
