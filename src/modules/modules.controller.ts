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
import { ModulesService } from './modules.service';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { SignedUser, User } from 'src/security/user.decorator';
import { ROLE_USER } from 'src/security/role.decorator';
import { Role } from 'generated/org-database-client-types';
import { CreateManyModuleDto } from './dto/update-many.dto';

@Controller('modules')
@ApiTags('modules')
@ROLE_USER(Role.Instructor, Role.Admin, Role.Manager)
export class ModulesController {
  constructor(private readonly modulesService: ModulesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new module' })
  @ApiResponse({ status: 201, description: 'Module created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createModuleDto: CreateModuleDto, @User() user: SignedUser) {
    return this.modulesService.create(createModuleDto, user);
  }

  @Put('update/many')
  @ApiOperation({ summary: 'Create many modules' })
  @ApiResponse({ status: 201, description: 'Modules created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  createMany(@Body() dto: CreateManyModuleDto, @User() user: SignedUser) {
    return this.modulesService.createMany(dto, user);
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
