import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaUserService } from 'src/prisma/prisma-user.service';
import { AuthService } from './auth.service';

@Injectable()
export class UserAuthService {
  constructor(
    private userService: PrismaUserService,
    private authService: AuthService,
  ) {}

  async login(loginDto: any) {
    const { email, password } = loginDto;
    const user = await this.userService.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.authService.checkPassword(password, user.password);
    return user;
  }
}
