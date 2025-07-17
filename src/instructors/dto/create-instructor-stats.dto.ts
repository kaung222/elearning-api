import { IsString, IsInt, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInstructorStatsDto {
  @ApiProperty({ description: 'Total number of reviews' })
  @IsInt()
  totalReviews: number;

  @ApiProperty({ description: 'Response rate to student inquiries' })
  @IsString()
  responseRate: string;

  @ApiProperty({ description: 'Average response time to inquiries' })
  @IsString()
  avgResponseTime: string;

  @ApiProperty({ description: 'Instructor ID' })
  @IsUUID()
  instructorId: string;
}