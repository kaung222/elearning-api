import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { SignedUser, User } from 'src/security/user.decorator';
import { ROLE_USER } from 'src/security/role.decorator';
import { Role } from 'generated/org-database-client-types';
import { Status } from 'generated/course-database-client-types';

@Controller('courses')
@ApiTags('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @ROLE_USER(Role.Admin, Role.Instructor)
  @ApiOperation({ summary: 'Create a new course' })
  @ApiResponse({ status: 201, description: 'Course created successfully' })
  create(@Body() createCourseDto: CreateCourseDto, @User() user: SignedUser) {
    return this.coursesService.create(createCourseDto, user);
  }

  @Get()
  @ROLE_USER(Role.Admin, Role.Instructor)
  @ApiOperation({ summary: 'Get all courses for organization' })
  @ApiResponse({ status: 200, description: 'Courses retrieved successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden - Admin role required' })
  findAll(@User() user: SignedUser) {
    console.log(user);
    return this.coursesService.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a course by ID' })
  @ApiParam({ name: 'id', description: 'Course ID' })
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Get(':id/modules')
  @ApiOperation({ summary: 'Get all modules for a course' })
  @ApiParam({ name: 'id', description: 'Course ID' })
  @ApiResponse({ status: 200, description: 'Modules retrieved successfully' })
  findCourseModules(@Param('id') id: string) {
    return this.coursesService.findCourseModules(id);
  }

  @Get(':id/reviews')
  @ApiOperation({ summary: 'Get all reviews for a course' })
  @ApiParam({ name: 'id', description: 'Course ID' })
  @ApiResponse({ status: 200, description: 'Reviews retrieved successfully' })
  findCourseReviews(@Param('id') id: string) {
    return this.coursesService.findCourseReviews(id);
  }

  @Patch(':id')
  @ROLE_USER(Role.Admin, Role.Instructor)
  @ApiOperation({ summary: 'Update a course' })
  @ApiParam({ name: 'id', description: 'Course ID' })
  update(
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto,
    @User() user: SignedUser,
  ) {
    return this.coursesService.update(id, updateCourseDto, user);
  }

  @Patch(':id/status')
  @ROLE_USER(Role.Admin)
  @ApiOperation({ summary: 'Update a course' })
  @ApiParam({ name: 'id', description: 'Course ID' })
  updateStatus(
    @Param('id') id: string,
    @Body() { status }: { status: Status },
    @User() user: SignedUser,
  ) {
    return this.coursesService.updateStatus(id, status, user);
  }

  @Delete(':id')
  @ROLE_USER(Role.Admin)
  @ApiOperation({ summary: 'Delete a course' })
  @ApiParam({ name: 'id', description: 'Course ID' })
  @ApiResponse({ status: 200, description: 'Course deleted successfully' })
  @ApiResponse({ status: 404, description: 'Course not found' })
  @ApiResponse({ status: 403, description: 'Forbidden - Admin role required' })
  remove(@Param('id') id: string, @User() user: SignedUser) {
    return this.coursesService.remove(id, user);
  }
}
