import { IsString, IsBoolean, IsDateString, IsUUID, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAssignmentSessionDto {
  @ApiProperty({ description: 'Title of the assignment session' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ description: 'Description of the assignment session' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ description: 'Due date of the assignment session' })
  @IsNotEmpty()
  @IsDateString()
  dueDate: string;

  @ApiProperty({ description: 'Whether the assignment session is completed', required: false })
  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean;

  @ApiProperty({ description: 'ID of the course this assignment session belongs to' })
  @IsNotEmpty()
  @IsUUID()
  courseId: string;
}