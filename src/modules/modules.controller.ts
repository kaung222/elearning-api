import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ModulesService } from './modules.service';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { SignedUser, User } from 'src/security/user.decorator';
import { ROLE_USER } from 'src/security/role.decorator';
import { Role } from 'generated/org-database-client-types';

@Controller('modules')
@ApiTags('modules')
@ROLE_USER(Role.INSTRUCTOR, Role.ORG_ADMIN)
export class ModulesController {
  constructor(private readonly modulesService: ModulesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new module' })
  @ApiResponse({ status: 201, description: 'Module created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createModuleDto: CreateModuleDto, @User() user: SignedUser) {
    return this.modulesService.create(createModuleDto, user);
  }

  @Get()
  @ApiOperation({ summary: 'Get all modules for organization' })
  @ApiResponse({ status: 200, description: 'Modules retrieved successfully' })
  findAll(@User() user: SignedUser) {
    return this.modulesService.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a module by ID' })
  @ApiParam({ name: 'id', description: 'Module ID' })
  @ApiResponse({ status: 200, description: 'Module retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Module not found' })
  findOne(@Param('id') id: string) {
    return this.modulesService.findOne(id);
  }

  @Get(':id/lessons')
  @ApiOperation({ summary: 'Get all lessons for a module' })
  @ApiParam({ name: 'id', description: 'Module ID' })
  @ApiResponse({ status: 200, description: 'Lessons retrieved successfully' })
  findModuleLessons(@Param('id') id: string) {
    return this.modulesService.findModuleLessons(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a module' })
  @ApiParam({ name: 'id', description: 'Module ID' })
  update(
    @Param('id') id: string,
    @Body() updateModuleDto: UpdateModuleDto,
    @User() user: SignedUser,
  ) {
    return this.modulesService.update(id, updateModuleDto, user);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a module' })
  @ApiParam({ name: 'id', description: 'Module ID' })
  @ApiResponse({ status: 200, description: 'Module deleted successfully' })
  @ApiResponse({ status: 404, description: 'Module not found' })
  remove(@Param('id') id: string, @User() user: SignedUser) {
    return this.modulesService.remove(id, user);
  }
}
