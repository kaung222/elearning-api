import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { InstructorsService } from './instructors.service';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto } from './dto/update-instructor.dto';
import { CreateInstructorStatsDto } from './dto/create-instructor-stats.dto';
import { UpdateInstructorStatsDto } from './dto/update-instructor-stats.dto';
import { CreateWorkExperienceDto } from './dto/create-work-experience.dto';
import { UpdateWorkExperienceDto } from './dto/update-work-experience.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ROlE_ORG } from 'src/security/role.decorator';
import { OrgRole } from 'generated/org-database-client-types';

@Controller('instructors')
@ApiTags('instructors')
export class InstructorsController {
  constructor(private readonly instructorsService: InstructorsService) {}

  @Post()
  @ROlE_ORG(OrgRole.INSTRUCTOR, OrgRole.ORG_ADMIN)
  @ApiOperation({ summary: 'Create a new instructor' })
  @ApiResponse({ status: 201, description: 'Instructor created successfully' })
  create(@Body() createInstructorDto: CreateInstructorDto) {
    return this.instructorsService.create(createInstructorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all instructors' })
  @ApiResponse({
    status: 200,
    description: 'Instructors retrieved successfully',
  })
  findAll() {
    return this.instructorsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an instructor by ID' })
  @ApiParam({ name: 'id', description: 'Instructor ID' })
  @ApiResponse({
    status: 200,
    description: 'Instructor retrieved successfully',
  })
  findOne(@Param('id') id: string) {
    return this.instructorsService.findOne(id);
  }

  @Patch(':id')
  @ROlE_ORG(OrgRole.INSTRUCTOR, OrgRole.ORG_ADMIN)
  @ApiOperation({ summary: 'Update an instructor' })
  @ApiParam({ name: 'id', description: 'Instructor ID' })
  @ApiResponse({ status: 200, description: 'Instructor updated successfully' })
  update(
    @Param('id') id: string,
    @Body() updateInstructorDto: UpdateInstructorDto,
  ) {
    return this.instructorsService.update(id, updateInstructorDto);
  }

  @Delete(':id')
  @ROlE_ORG(OrgRole.INSTRUCTOR, OrgRole.ORG_ADMIN)
  @ApiOperation({ summary: 'Delete an instructor' })
  @ApiParam({ name: 'id', description: 'Instructor ID' })
  @ApiResponse({ status: 200, description: 'Instructor deleted successfully' })
  remove(@Param('id') id: string) {
    return this.instructorsService.remove(id);
  }

  // Stats endpoints
  @Post(':id/stats')
  @ROlE_ORG(OrgRole.INSTRUCTOR, OrgRole.ORG_ADMIN)
  @ApiOperation({ summary: 'Create stats for an instructor' })
  @ApiParam({ name: 'id', description: 'Instructor ID' })
  @ApiResponse({ status: 201, description: 'Stats created successfully' })
  createStats(
    @Param('id') id: string,
    @Body() createInstructorStatsDto: CreateInstructorStatsDto,
  ) {
    return this.instructorsService.createStats(id, createInstructorStatsDto);
  }

  @Get(':id/stats')
  @ApiOperation({ summary: 'Get stats for an instructor' })
  @ApiParam({ name: 'id', description: 'Instructor ID' })
  @ApiResponse({ status: 200, description: 'Stats retrieved successfully' })
  findStats(@Param('id') id: string) {
    return this.instructorsService.findStats(id);
  }

  @Patch(':id/stats')
  @ROlE_ORG(OrgRole.INSTRUCTOR, OrgRole.ORG_ADMIN)
  @ApiOperation({ summary: 'Update stats for an instructor' })
  @ApiParam({ name: 'id', description: 'Instructor ID' })
  @ApiResponse({ status: 200, description: 'Stats updated successfully' })
  updateStats(
    @Param('id') id: string,
    @Body() updateInstructorStatsDto: UpdateInstructorStatsDto,
  ) {
    return this.instructorsService.updateStats(id, updateInstructorStatsDto);
  }

  // Work experience endpoints
  @Post(':id/experience')
  @ROlE_ORG(OrgRole.INSTRUCTOR, OrgRole.ORG_ADMIN)
  @ApiOperation({ summary: 'Add work experience for an instructor' })
  @ApiParam({ name: 'id', description: 'Instructor ID' })
  @ApiResponse({
    status: 201,
    description: 'Work experience added successfully',
  })
  addWorkExperience(
    @Param('id') id: string,
    @Body() createWorkExperienceDto: CreateWorkExperienceDto,
  ) {
    return this.instructorsService.addWorkExperience(
      id,
      createWorkExperienceDto,
    );
  }

  @Get(':id/experience')
  @ApiOperation({ summary: 'Get all work experiences for an instructor' })
  @ApiParam({ name: 'id', description: 'Instructor ID' })
  @ApiResponse({
    status: 200,
    description: 'Work experiences retrieved successfully',
  })
  findWorkExperiences(@Param('id') id: string) {
    return this.instructorsService.findWorkExperiences(id);
  }

  @Patch(':id/experience/:expId')
  @ROlE_ORG(OrgRole.INSTRUCTOR, OrgRole.ORG_ADMIN)
  @ApiOperation({ summary: 'Update work experience for an instructor' })
  @ApiParam({ name: 'id', description: 'Instructor ID' })
  @ApiParam({ name: 'expId', description: 'Work Experience ID' })
  @ApiResponse({
    status: 200,
    description: 'Work experience updated successfully',
  })
  updateWorkExperience(
    @Param('id') id: string,
    @Param('expId') expId: string,
    @Body() updateWorkExperienceDto: UpdateWorkExperienceDto,
  ) {
    return this.instructorsService.updateWorkExperience(
      expId,
      updateWorkExperienceDto,
    );
  }

  @Delete(':id/experience/:expId')
  @ROlE_ORG(OrgRole.INSTRUCTOR, OrgRole.ORG_ADMIN)
  @ApiOperation({ summary: 'Delete work experience for an instructor' })
  @ApiParam({ name: 'id', description: 'Instructor ID' })
  @ApiParam({ name: 'expId', description: 'Work Experience ID' })
  @ApiResponse({
    status: 200,
    description: 'Work experience deleted successfully',
  })
  removeWorkExperience(@Param('id') id: string, @Param('expId') expId: string) {
    return this.instructorsService.removeWorkExperience(expId);
  }
}
