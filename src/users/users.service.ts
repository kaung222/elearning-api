import { Injectable } from '@nestjs/common';
import { PrismaUserService } from 'src/prisma/prisma-user.service';

@Injectable()
export class UsersService {
  constructor(private userService: PrismaUserService) {}
  findAll() {
    return this.userService.user.findMany();
  }
}
