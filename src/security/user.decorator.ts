import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Role } from 'generated/org-database-client-types';

export class SignedUser {
  sub: string;
  role: Role;
  username: string;
  avatar?: string;
  orgId?: string;
  instructorId?: string;
}

export const User = createParamDecorator(
  (data: keyof SignedUser, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user: SignedUser = request.user;
    return data ? user?.[data] : user;
  },
);
