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
import { UserRole } from 'generated/user-database-client-types';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    try {
      const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
        ROLE_KEY,
        [context.getHandler(), context.getClass()],
      );
      if (!requiredRoles) {
        return true;
      }
      const request = context.switchToHttp().getRequest();
      const accessToken = request.headers?.authorization?.split(' ')[1];
      if (!accessToken) throw new UnauthorizedException();
      const user: SignedUser = this.jwtService.verify(accessToken);
      request.user = user;
      console.log(requiredRoles);
      const isAuthenticated = Array.from(requiredRoles).includes(user.role);
      if (!isAuthenticated)
        throw new UnauthorizedException('Role cannot access!');
      return true;
    } catch (error) {
      console.log('user role guard error:', error);
      throw new UnauthorizedException(error.message);
    }
  }
}
