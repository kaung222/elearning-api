import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ManagersService } from './managers.service';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
import { Role } from 'generated/org-database-client-types';
import { ROLE_USER } from 'src/security/role.decorator';
import { SignedUser, User } from 'src/security/user.decorator';
import { ApiOperation } from '@nestjs/swagger';

@Controller('managers')
@ROLE_USER(Role.Admin)
export class ManagersController {
  constructor(private readonly managersService: ManagersService) {}

  @Post()
  create(
    @User('orgId') orgId: string,
    @Body() createManagerDto: CreateManagerDto,
  ) {
    return this.managersService.create(orgId, createManagerDto);
  }

  @Get()
  findAll(@User('orgId') orgId: string) {
    return this.managersService.findAll(orgId);
  }

  @Delete(':userId')
  @ApiOperation({ summary: 'Delete manager by user Id' })
  remove(@User('orgId') orgId: string, @Param('userId') userId: string) {
    return this.managersService.remove(orgId, userId);
  }
}
