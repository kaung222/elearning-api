import { Body, Controller, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignedUser, User } from 'src/security/user.decorator';
import { ROLE_USER } from 'src/security/role.decorator';
import { UserRole } from 'generated/user-database-client-types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  async login(@Body() loginDto: any) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  async register(@Body() registerDto: any) {
    return this.authService.register(registerDto);
  }

  @Post('login/:orgId')
  @ROLE_USER(UserRole.USER)
  async loginAsOrganization(
    @User() user: SignedUser,
    @Param('orgId') orgId: string,
  ) {
    return this.authService.loginAsOrganization(user, orgId);
  }
}
