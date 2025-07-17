import { IsEnum, IsString, IsUUID } from 'class-validator';
import { OrgRole } from 'generated/org-database-client-types';

export class CreateMemberDto {
  @IsUUID()
  userId: string;

  @IsEnum(OrgRole)
  role: OrgRole;
}
