import { IsEnum, IsString, IsUUID } from 'class-validator';
import { Role } from 'generated/org-database-client-types';

export class CreateMemberDto {
  @IsUUID()
  userId: string;

  @IsEnum(Role)
  role: Role;
}
