import { IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateWorkExperienceDto {
  @ApiProperty({ description: 'Company name' })
  @IsString()
  company: string;

  @ApiProperty({ description: 'Position held' })
  @IsString()
  position: string;

  @ApiProperty({ description: 'Duration of employment' })
  @IsString()
  duration: string;

  @ApiProperty({ description: 'Instructor ID' })
  @IsUUID()
  instructorId: string;
}