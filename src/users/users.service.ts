import { Injectable } from '@nestjs/common';
import { PrismaUserService } from 'src/prisma/prisma-user.service';
import { SignedUser } from 'src/security/user.decorator';

@Injectable()
export class UsersService {
  constructor(private userService: PrismaUserService) {}

  // get users by admins
  findAll(page = 1) {
    return this.userService.user.findMany({ take: 10, skip: 10 * (page - 1) });
  }

  findOne(id: string) {
    return this.userService.user.findUnique({
      where: { id },
    });
  }

  searchUser(search: string) {
    return this.userService.user.findMany({
      where: {
        OR: [
          {
            email: {
              contains: search,
            },
          },
          {
            username: {
              contains: search,
            },
          },
        ],
      },
    });
  }

  async getProfile(signedUser: SignedUser) {
    const user = await this.userService.user.findFirst({
      where: { id: signedUser.sub },
    });
    return {
      ...user,
      role: signedUser.role,
    };
  }

  remove(id: string) {
    return this.userService.user.delete({
      where: { id },
    });
  }
}
