import { Body, Controller, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignedUser, User } from 'src/security/user.decorator';
import { ROLE_USER } from 'src/security/role.decorator';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Role } from 'generated/org-database-client-types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login/:orgId')
  @ROLE_USER(Role.Student)
  async loginAsOrganization(
    @User() user: SignedUser,
    @Param('orgId') orgId: string,
  ) {
    return this.authService.loginToDashboard(user, orgId);
  }
}
