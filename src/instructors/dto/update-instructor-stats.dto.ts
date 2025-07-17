import { PartialType } from '@nestjs/swagger';
import { CreateInstructorStatsDto } from './create-instructor-stats.dto';

export class UpdateInstructorStatsDto extends PartialType(
  CreateInstructorStatsDto,
) {}
