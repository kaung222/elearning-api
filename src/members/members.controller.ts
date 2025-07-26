import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpStatus,
} from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { SignedUser, User } from 'src/security/user.decorator';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { ROLE_USER } from 'src/security/role.decorator';
import { Role } from 'generated/org-database-client-types';

@Controller('members')
@ApiTags('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  @ROLE_USER(Role.ORG_ADMIN)
  @ApiOperation({ summary: 'Create a new organization member' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Member created successfully',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input data',
  })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'User not found' })
  create(
    @User() signedUser: SignedUser,
    @Body() createMemberDto: CreateMemberDto,
  ) {
    return this.membersService.create(signedUser, createMemberDto);
  }

  @Get()
  @ROLE_USER(Role.ORG_ADMIN, Role.STUDENT)
  @ApiOperation({ summary: 'Get all organization members' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Members retrieved successfully',
  })
  findAll(@User() user: SignedUser) {
    return this.membersService.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an organization member by ID' })
  @ApiParam({ name: 'id', description: 'Member ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Member retrieved successfully',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Member not found',
  })
  findOne(@Param('id') id: string, @User() user: SignedUser) {
    return this.membersService.findOne(id, user);
  }

  @Patch(':id')
  @ROLE_USER(Role.ORG_ADMIN)
  @ApiOperation({ summary: 'Update an organization member' })
  @ApiParam({ name: 'id', description: 'Member ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Member updated successfully',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Member not found',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input data',
  })
  update(
    @Param('id') id: string,
    @Body() updateMemberDto: UpdateMemberDto,
    @User() user: SignedUser,
  ) {
    return this.membersService.update(id, updateMemberDto, user);
  }

  @Delete(':id')
  @ROLE_USER(Role.ORG_ADMIN)
  @ApiOperation({ summary: 'Delete an organization member' })
  @ApiParam({ name: 'id', description: 'Member ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Member deleted successfully',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Member not found',
  })
  remove(@Param('id') id: string, @User() user: SignedUser) {
    return this.membersService.remove(id, user);
  }
}
