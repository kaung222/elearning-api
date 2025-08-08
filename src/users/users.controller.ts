import { Controller, Delete, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/security/user.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(@Query('page') page = 1) {
    return this.usersService.findAll(page);
  }

  @Get('me')
  getProfile(@User('sub') id: string) {
    return this.usersService.getProfile(id);
  }

  @Get('search')
  searchUser(@Query('q') search: string) {
    console.log(search);
    return this.usersService.searchUser(search);
  }

  @Delete('account/me')
  deleteAccount(@User('sub') id: string) {
    return this.usersService.remove(id);
  }
}
