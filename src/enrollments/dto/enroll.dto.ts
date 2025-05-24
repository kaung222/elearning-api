import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEnrollmentDto {
  @IsNotEmpty()
  courseId: string;

  @IsNotEmpty()
  userId: string;

  @IsOptional()
  @IsString()
  description?: string;
}
