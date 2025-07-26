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
import { InstructorsService } from './instructors.service';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto } from './dto/update-instructor.dto';
import { CreateInstructorStatsDto } from './dto/create-instructor-stats.dto';
import { UpdateInstructorStatsDto } from './dto/update-instructor-stats.dto';
import { CreateWorkExperienceDto } from './dto/create-work-experience.dto';
import { UpdateWorkExperienceDto } from './dto/update-work-experience.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ROLE_USER } from 'src/security/role.decorator';
import { SignedUser, User } from 'src/security/user.decorator';
import { Role } from 'generated/org-database-client-types';

@Controller('instructors')
@ROLE_USER(Role.ORG_ADMIN, Role.ORG_STAFF)
@ApiTags('instructors')
@ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
@ApiResponse({
  status: HttpStatus.FORBIDDEN,
  description: 'Forbidden resource',
})
export class InstructorsController {
  constructor(private readonly instructorsService: InstructorsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new instructor' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Instructor created successfully',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input data',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User not found or not an instructor',
  })
  create(
    @User() user: SignedUser,
    @Body() createInstructorDto: CreateInstructorDto,
  ) {
    return this.instructorsService.create(user, createInstructorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all instructors' })
  findAll(@User() user: SignedUser) {
    return this.instructorsService.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an instructor by ID' })
  @ApiParam({ name: 'id', description: 'Instructor ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Instructor retrieved successfully',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Instructor not found',
  })
  findOne(@Param('id') id: string, @User() user: SignedUser) {
    return this.instructorsService.findOne(id, user);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an instructor' })
  @ApiParam({ name: 'id', description: 'Instructor ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Instructor updated successfully',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Instructor not found',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input data',
  })
  update(
    @Param('id') id: string,
    @Body() updateInstructorDto: UpdateInstructorDto,
    @User() user: SignedUser,
  ) {
    return this.instructorsService.update(id, updateInstructorDto, user);
  }

  // Stats endpoints
  @Post(':id/stats')
  @ApiOperation({ summary: 'Create stats for an instructor' })
  @ApiParam({ name: 'id', description: 'Instructor ID' })
  @ApiResponse({ status: 201, description: 'Stats created successfully' })
  createStats(
    @Param('id') id: string,
    @Body() createInstructorStatsDto: CreateInstructorStatsDto,
    @User() user: SignedUser,
  ) {
    return this.instructorsService.createStats(
      id,
      createInstructorStatsDto,
      user,
    );
  }

  @Get(':id/stats')
  @ApiOperation({ summary: 'Get stats for an instructor' })
  @ApiParam({ name: 'id', description: 'Instructor ID' })
  @ApiResponse({ status: 200, description: 'Stats retrieved successfully' })
  findStats(@Param('id') id: string) {
    return this.instructorsService.findStats(id);
  }

  @Patch(':id/stats')
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
  @ApiOperation({ summary: 'Add work experience for an instructor' })
  @ApiParam({ name: 'id', description: 'Instructor ID' })
  @ApiResponse({
    status: 201,
    description: 'Work experience added successfully',
  })
  addWorkExperience(
    @Param('id') id: string,
    @Body() createWorkExperienceDto: CreateWorkExperienceDto,
    @User() user: SignedUser,
  ) {
    return this.instructorsService.addWorkExperience(
      id,
      createWorkExperienceDto,
      user,
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
