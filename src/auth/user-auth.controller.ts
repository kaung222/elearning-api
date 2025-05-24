import { Body, Controller, Post } from '@nestjs/common';
import { UserAuthService } from './user-auth.service';

@Controller('user')
export class UserAuthController {
  constructor(private readonly userAuthService: UserAuthService) {}

  @Post('login')
  async login(@Body() loginDto: any) {
    return this.userAuthService.login(loginDto);
  }
}
