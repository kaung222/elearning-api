import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsUUID, IsEmail, IsDateString } from 'class-validator';

export class CreateCertificateDto {
  @ApiProperty({ description: 'Certificate title' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Certificate description', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Template ID to use', required: false, default: 'default' })
  @IsString()
  @IsOptional()
  templateId?: string;

  @ApiProperty({ description: 'Recipient name' })
  @IsString()
  recipientName: string;

  @ApiProperty({ description: 'Recipient email' })
  @IsEmail()
  recipientEmail: string;

  @ApiProperty({ description: 'Course ID' })
  @IsUUID()
  courseId: string;

  @ApiProperty({ description: 'Organization ID' })
  @IsUUID()
  organizationId: string;

  @ApiProperty({ description: 'Instructor ID' })
  @IsUUID()
  instructorId: string;

  @ApiProperty({ description: 'Instructor name' })
  @IsString()
  instructorName: string;

  @ApiProperty({ description: 'Expiry date', required: false })
  @IsDateString()
  @IsOptional()
  expiryDate?: string;
}