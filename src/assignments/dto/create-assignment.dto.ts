import {
  IsString,
  IsBoolean,
  IsDateString,
  IsUUID,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAssignmentDto {
  @ApiProperty({ description: 'Title of the assignment' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ description: 'Description of the assignment' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ description: 'Due date of the assignment' })
  @IsNotEmpty()
  @IsDateString()
  dueDate: string;

  @ApiProperty({
    description: 'Whether the assignment is completed',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean;

  @ApiProperty({
    description: 'ID of the assignment session this assignment belongs to',
  })
  @IsNotEmpty()
  @IsUUID()
  assignmentSessionId: string;

  @ApiProperty({
    description: 'ID of the user this assignment is assigned to',
    required: false,
  })
  @IsOptional()
  @IsString()
  userId: string;
}
