import { SetMetadata } from '@nestjs/common';
import { OrgRole } from 'generated/org-database-client-types';
import { UserRole } from 'generated/user-database-client-types';

export const ROLE_KEY = 'role';
export const ROLE_USER = (...roles: UserRole[]) => SetMetadata(ROLE_KEY, roles);

export const ORG_ROLE_KEY = 'org_role';
export const ROlE_ORG = (...roles: OrgRole[]) =>
  SetMetadata(ORG_ROLE_KEY, roles);
