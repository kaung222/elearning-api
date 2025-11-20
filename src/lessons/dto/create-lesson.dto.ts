import {
  IsString,
  IsOptional,
  IsInt,
  IsUUID,
  IsBoolean,
  IsEnum,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateLessonDto {
  @ApiProperty({ description: 'Lesson title' })
  @IsString()
  title: string;

  @ApiPropertyOptional({ description: 'Lesson description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Lesson URL (for video or external content)',
  })
  @IsOptional()
  @IsString()
  url?: string;

  @ApiProperty({ description: 'Type of lesson' })
  type: string;

  @ApiProperty({ description: 'Duration in minutes', default: 0 })
  @IsInt()
  duration: number = 0;

  @ApiProperty({ description: 'Lesson order in the module' })
  @IsInt()
  order: number;

  @ApiProperty({
    description: 'Whether this lesson is a preview',
    default: false,
  })
  @IsBoolean()
  isPreview: boolean = false;

  // @ApiProperty({ description: 'Organization ID' })
  // @IsUUID()
  // organizationId: string;

  @ApiProperty({ description: 'Module ID this lesson belongs to' })
  @IsUUID()
  moduleId: string;

  @ApiProperty({ description: 'Course ID this lesson belongs to' })
  @IsUUID()
  courseId: string;
}
