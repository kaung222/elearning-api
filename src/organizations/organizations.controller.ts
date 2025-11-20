import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { SignedUser, User } from 'src/security/user.decorator';
import { Role } from 'generated/org-database-client-types';
import { ROLE_USER } from 'src/security/role.decorator';

@Controller('organizations')
@ApiTags('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post()
  @ROLE_USER(Role.Student)
  @ApiOperation({ summary: 'Create a new organization' })
  @ApiResponse({
    status: 201,
    description: 'Organization created successfully',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(
    @User() signedUser: SignedUser,
    @Body() createOrganizationDto: CreateOrganizationDto,
  ) {
    return this.organizationsService.create(signedUser, createOrganizationDto);
  }

  @Get()
  @ROLE_USER(Role.Student, Role.Instructor, Role.Admin, Role.Manager)
  @ApiOperation({ summary: 'Get all associated organizations' })
  @ApiResponse({
    status: 200,
    description: 'Organizations retrieved successfully',
  })
  findAll(@User() signedUser: SignedUser) {
    return this.organizationsService.findAll(signedUser);
  }

  @Get(':id')
  @ROLE_USER(Role.Admin, Role.Instructor, Role.Student, Role.Manager)
  @ApiOperation({ summary: 'Get an organization by ID' })
  @ApiParam({ name: 'id', description: 'Organization ID' })
  @ApiResponse({
    status: 200,
    description: 'Organization retrieved successfully',
  })
  @ApiResponse({ status: 404, description: 'Organization not found' })
  findOne(@Param('id') id: string, @User() signedUser: SignedUser) {
    return this.organizationsService.findOne(id, signedUser);
  }

  @Patch(':id')
  @ROLE_USER(Role.Admin)
  @ApiOperation({ summary: 'Update an organization' })
  @ApiParam({ name: 'id', description: 'Organization ID' })
  @ApiResponse({
    status: 200,
    description: 'Organization updated successfully',
  })
  @ApiResponse({ status: 404, description: 'Organization not found' })
  update(
    @Param('id') id: string,
    @Body() updateOrganizationDto: UpdateOrganizationDto,
    @User() user: SignedUser,
  ) {
    return this.organizationsService.update(id, updateOrganizationDto, user);
  }

  @Put(':id')
  @ROLE_USER(Role.Admin)
  @ApiOperation({ summary: 'Publish an organization' })
  @ApiParam({ name: 'id', description: 'Organization ID' })
  @ApiResponse({
    status: 200,
    description: 'Organization published successfully',
  })
  @ApiResponse({ status: 404, description: 'Organization not found' })
  publish(@Param('id') id: string, @User() signedUser: SignedUser) {
    // return this.organizationsService.publish(id, signedUser);
  }

  @Delete(':id')
  @ROLE_USER(Role.Admin)
  @ApiOperation({ summary: 'Delete an organization' })
  @ApiParam({ name: 'id', description: 'Organization ID' })
  @ApiResponse({ status: 404, description: 'Organization not found' })
  remove(@Param('id') id: string, @User() signedUser: SignedUser) {
    return this.organizationsService.remove(id, signedUser);
  }
}
