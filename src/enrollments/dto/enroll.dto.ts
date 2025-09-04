import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEnrollmentDto {
  @IsNotEmpty()
  courseId: string;

  @IsOptional()
  @IsString()
  description?: string;
}
