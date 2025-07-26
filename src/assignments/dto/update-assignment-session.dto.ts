import { PartialType } from '@nestjs/swagger';
import { CreateAssignmentSessionDto } from './create-assignment-session.dto';

export class UpdateAssignmentSessionDto extends PartialType(CreateAssignmentSessionDto) {}