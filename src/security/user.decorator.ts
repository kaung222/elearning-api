import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { OrgRole } from 'generated/org-database-client-types';
import { UserRole } from 'generated/user-database-client-types';

export class SignedUser {
  sub: string;
  role: UserRole;
  username: string;
  email: string;
  avatar: string | null;
  instructor?: {
    type: 'individual' | 'organization';
    id: string;
  };
  organization?: { organizationId: string; role: OrgRole };
}

export const User = createParamDecorator(
  (data: keyof SignedUser, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user: SignedUser = request.user;
    return data ? user?.[data] : user;
  },
);
