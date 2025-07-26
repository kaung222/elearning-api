import { IsString, IsUUID, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFaqDto {
  @ApiProperty({ description: 'Question for the FAQ' })
  @IsNotEmpty()
  @IsString()
  question: string;

  @ApiProperty({ description: 'Answer for the FAQ' })
  @IsNotEmpty()
  @IsString()
  answer: string;

  @ApiProperty({ description: 'ID of the course this FAQ belongs to' })
  @IsNotEmpty()
  @IsUUID()
  courseId: string;
}