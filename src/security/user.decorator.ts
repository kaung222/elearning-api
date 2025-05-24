import { createParamDecorator, ExecutionContext } from '@nestjs/common';
export class SignedUser {
  id: string;
  role: Roles;
  branch: number;
  name: string;
  email: string;
  image: string;
}

export enum Roles {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  BRANCH_ADMIN = 'BRANCH_ADMIN',
  BRANCH_EMPLOYEE = 'BRANCH_EMPLOYEE',
}

export const User = createParamDecorator(
  (data: 'id' | 'role' | 'orgId', ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user: SignedUser = request.user;
    return data ? user?.[data] : user;
  },
);

export const Org = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const org = request.org;
    return org;
  },
);
