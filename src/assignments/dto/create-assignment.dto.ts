import {
  IsString,
  IsBoolean,
  IsDateString,
  IsUUID,
  IsOptional,
  IsNotEmpty,
  IsInt,
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
  @IsInt()
  maxPoints: number;

  @ApiProperty({
    description: 'ID of the assignment session this assignment belongs to',
  })
  @IsNotEmpty()
  @IsUUID()
  courseId: string;
}

// assignmentId String
// userId       String // userId
// title        String
// notes        String?
// url          String?
// submittedAt  DateTime   @default(now())
// enrollmentId String
