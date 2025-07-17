import { IsString, IsOptional, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateOrgStatsDto {
  @ApiPropertyOptional({ description: 'Graduation rate percentage' })
  @IsOptional()
  @IsString()
  graduationRate?: string;

  @ApiPropertyOptional({ description: 'Employment rate percentage' })
  @IsOptional()
  @IsString()
  employmentRate?: string;

  @ApiPropertyOptional({ description: 'Average salary of graduates' })
  @IsOptional()
  @IsString()
  averageSalary?: string;

  @ApiProperty({ description: 'Student satisfaction rating' })
  @IsString()
  studentSatisfaction: string;

  @ApiProperty({ description: 'Organization ID' })
  @IsUUID()
  organizationId: string;
}