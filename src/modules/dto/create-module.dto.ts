import { IsString, IsOptional, IsInt, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateModuleDto {
  @ApiProperty({ description: 'Module title' })
  @IsString()
  title: string;

  @ApiPropertyOptional({ description: 'Module description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Module order in the course' })
  @IsInt()
  order: number;

  @ApiProperty({ description: 'Course ID this module belongs to' })
  @IsUUID()
  courseId: string;
}
