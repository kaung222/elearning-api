import { SetMetadata } from '@nestjs/common';
import { Role } from 'generated/org-database-client-types';

export const ROLE_KEY = 'role';
export const ROLE_USER = (...roles: Role[]) => SetMetadata(ROLE_KEY, roles);

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
