// import {
//   Injectable,
//   CanActivate,
//   ExecutionContext,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { ROLE_KEY } from './role.decorator';
// import { SignedUser } from './user.decorator';
// import { JwtService } from '@nestjs/jwt';
// import { OrgRole } from 'generated/org-database-client-types';

// @Injectable()
// export class OrgRolesGuard implements CanActivate {
//   constructor(
//     private reflector: Reflector,
//     private jwtService: JwtService,
//   ) {}

//   canActivate(context: ExecutionContext): boolean {
//     try {
//       const requiredRoles = this.reflector.getAllAndOverride<OrgRole[]>(
//         ROLE_KEY,
//         [context.getHandler(), context.getClass()],
//       );
//       if (!requiredRoles) {
//         return true;
//       }
//       const request = context.switchToHttp().getRequest();

//       // check access token
//       const accessToken = request.headers?.authorization?.split(' ')[1];
//       if (!accessToken) throw new UnauthorizedException();
//       const user: SignedUser = this.jwtService.verify(accessToken);
//       request.user = user;
//       const organization = user.organization;

//       // check organization role
//       if (!organization) throw new UnauthorizedException();
//       const isAuthenticated = Array.from(requiredRoles).includes(
//         organization.role,
//       );
//       if (!isAuthenticated)
//         throw new UnauthorizedException('Role cannot access!');
//       return true;
//     } catch (error) {
//       console.log('Org role guard error:', error);
//       throw new UnauthorizedException(error.message);
//     }
//   }
// }
