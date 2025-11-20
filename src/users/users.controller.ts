import { Controller, Delete, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { SignedUser, User } from 'src/security/user.decorator';
import { ApiOperation } from '@nestjs/swagger';
import { Role } from 'generated/org-database-client-types';
import { ROLE_USER } from 'src/security/role.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ROLE_USER(Role.Admin)
  findAll(@Query('page') page = 1) {
    return this.usersService.findAll(page);
  }

  @Get('me')
  @ROLE_USER(Role.Admin, Role.Instructor, Role.Manager, Role.Student)
  getProfile(@User() signedUser: SignedUser) {
    return this.usersService.getProfile(signedUser);
  }

  @Get('search')
  @ApiOperation({ summary: 'Search user by name' })
  searchUser(@Query('q') search: string) {
    console.log(search);
    return this.usersService.searchUser(search);
  }

  @Delete('account/me')
  @ROLE_USER(Role.Student)
  deleteAccount(@User('sub') id: string) {
    return this.usersService.remove(id);
  }
}
