import { PartialType } from '@nestjs/swagger';
import { CreateOrgStatsDto } from './create-org-stats.dto';

export class UpdateOrgStatsDto extends PartialType(CreateOrgStatsDto) {}