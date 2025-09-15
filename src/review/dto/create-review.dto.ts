import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty()
  @ApiProperty()
  @IsUUID()
  enrollmentId: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsInt()
  rating: number;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  comment: string;
}
