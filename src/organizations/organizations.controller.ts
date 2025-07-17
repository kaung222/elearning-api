import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { CreateOrgStatsDto } from './dto/create-org-stats.dto';
import { UpdateOrgStatsDto } from './dto/update-org-stats.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ROlE_ORG, ROLE_USER } from 'src/security/role.decorator';
import { UserRole } from 'generated/user-database-client-types';
import { OrgRole } from 'generated/org-database-client-types';
import { SignedUser, User } from 'src/security/user.decorator';
import { RolesGuard } from 'src/security/role.guard';
import { OrgRolesGuard } from 'src/security/org-role.guard';

@Controller('organizations')
@ApiTags('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post()
  @ROLE_USER(UserRole.USER)
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
  @ApiOperation({ summary: 'Get all organizations' })
  @ApiResponse({
    status: 200,
    description: 'Organizations retrieved successfully',
  })
  findAll() {
    return this.organizationsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an organization by ID' })
  @ApiParam({ name: 'id', description: 'Organization ID' })
  @ApiResponse({
    status: 200,
    description: 'Organization retrieved successfully',
  })
  @ApiResponse({ status: 404, description: 'Organization not found' })
  findOne(@Param('id') id: string) {
    return this.organizationsService.findOne(id);
  }

  @Patch(':id')
  @ROLE_USER(UserRole.ADMIN)
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
  ) {
    return this.organizationsService.update(id, updateOrganizationDto);
  }

  @Delete(':id')
  @ROLE_USER(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete an organization' })
  @ApiParam({ name: 'id', description: 'Organization ID' })
  @ApiResponse({
    status: 200,
    description: 'Organization deleted successfully',
  })
  @ApiResponse({ status: 404, description: 'Organization not found' })
  remove(@Param('id') id: string) {
    return this.organizationsService.remove(id);
  }

  // Contact endpoints
  @Post(':id/contact')
  @ROLE_USER(UserRole.ADMIN)
  @ApiOperation({ summary: 'Create contact information for an organization' })
  @ApiParam({ name: 'id', description: 'Organization ID' })
  @ApiResponse({ status: 201, description: 'Contact created successfully' })
  createContact(
    @Param('id') id: string,
    @Body() createContactDto: CreateContactDto,
  ) {
    return this.organizationsService.createContact(id, createContactDto);
  }

  @Get(':id/contact')
  @ApiOperation({ summary: 'Get contact information for an organization' })
  @ApiParam({ name: 'id', description: 'Organization ID' })
  @ApiResponse({ status: 200, description: 'Contact retrieved successfully' })
  findContact(@Param('id') id: string) {
    return this.organizationsService.findContact(id);
  }

  @Patch(':id/contact')
  @UseGuards(RolesGuard, OrgRolesGuard)
  @ROlE_ORG(OrgRole.ORG_ADMIN)
  @ApiOperation({ summary: 'Update contact information for an organization' })
  @ApiParam({ name: 'id', description: 'Organization ID' })
  @ApiResponse({ status: 200, description: 'Contact updated successfully' })
  updateContact(
    @Param('id') id: string,
    @Body() updateContactDto: UpdateContactDto,
  ) {
    return this.organizationsService.updateContact(id, updateContactDto);
  }

  // Stats endpoints
  @Post(':id/stats')
  @ROlE_ORG(OrgRole.ORG_ADMIN)
  @ApiOperation({ summary: 'Create stats for an organization' })
  @ApiParam({ name: 'id', description: 'Organization ID' })
  @ApiResponse({ status: 201, description: 'Stats created successfully' })
  createStats(
    @Param('id') id: string,
    @Body() createOrgStatsDto: CreateOrgStatsDto,
  ) {
    return this.organizationsService.createStats(id, createOrgStatsDto);
  }

  @Get(':id/stats')
  @ApiOperation({ summary: 'Get stats for an organization' })
  @ApiParam({ name: 'id', description: 'Organization ID' })
  @ApiResponse({ status: 200, description: 'Stats retrieved successfully' })
  findStats(@Param('id') id: string) {
    return this.organizationsService.findStats(id);
  }

  @Patch(':id/stats')
  @ROlE_ORG(OrgRole.ORG_ADMIN)
  @ApiOperation({ summary: 'Update stats for an organization' })
  @ApiParam({ name: 'id', description: 'Organization ID' })
  @ApiResponse({ status: 200, description: 'Stats updated successfully' })
  updateStats(
    @Param('id') id: string,
    @Body() updateOrgStatsDto: UpdateOrgStatsDto,
  ) {
    return this.organizationsService.updateStats(id, updateOrgStatsDto);
  }
}
