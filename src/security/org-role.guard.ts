import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLE_KEY } from './role.decorator';
import { SignedUser } from './user.decorator';
import { JwtService } from '@nestjs/jwt';
import { OrgRole } from 'generated/org-database-client-types';

@Injectable()
export class OrgRolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    try {
      const requiredRoles = this.reflector.getAllAndOverride<OrgRole[]>(
        ROLE_KEY,
        [context.getHandler(), context.getClass()],
      );
      if (!requiredRoles) {
        return true;
      }
      const request = context.switchToHttp().getRequest();
      const organization = request.user?.organization;
      if (!organization) throw new UnauthorizedException();
      const isAuthenticated = Array.from(requiredRoles).includes(
        organization.role,
      );
      if (!isAuthenticated)
        throw new UnauthorizedException('Role cannot access!');
      return true;
    } catch (error) {
      console.log('Org role guard error:', error);
      throw new UnauthorizedException(error.message);
    }
  }
}
