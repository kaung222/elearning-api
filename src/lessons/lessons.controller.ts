import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ROLE_USER } from 'src/security/role.decorator';
import { SignedUser, User } from 'src/security/user.decorator';
import { Role } from 'generated/org-database-client-types';

@Controller('lessons')
@ApiTags('lessons')
@ROLE_USER(Role.INSTRUCTOR, Role.ORG_ADMIN)
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new lesson' })
  @ApiResponse({ status: 201, description: 'Lesson created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden - Admin role required' })
  create(@Body() createLessonDto: CreateLessonDto, @User() user: SignedUser) {
    return this.lessonsService.create(createLessonDto, user);
  }

  @Get()
  @ApiOperation({ summary: 'Get all lessons for organization' })
  @ApiResponse({ status: 200, description: 'Lessons retrieved successfully' })
  findAll(@User() user: SignedUser) {
    return this.lessonsService.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a lesson by ID' })
  @ApiParam({ name: 'id', description: 'Lesson ID' })
  @ApiResponse({ status: 200, description: 'Lesson retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Lesson not found' })
  findOne(@Param('id') id: string) {
    return this.lessonsService.findOne(id);
  }

  @Get(':id/assignments')
  @ApiOperation({ summary: 'Get all assignments for a lesson' })
  @ApiParam({ name: 'id', description: 'Lesson ID' })
  @ApiResponse({
    status: 200,
    description: 'Assignments retrieved successfully',
  })
  findLessonAssignments(@Param('id') id: string) {
    // return this.lessonsService.findLessonAssignments(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a lesson' })
  @ApiParam({ name: 'id', description: 'Lesson ID' })
  @ApiResponse({ status: 200, description: 'Lesson updated successfully' })
  @ApiResponse({ status: 404, description: 'Lesson not found' })
  update(@Param('id') id: string, @Body() updateLessonDto: UpdateLessonDto) {
    return this.lessonsService.update(id, updateLessonDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a lesson' })
  @ApiParam({ name: 'id', description: 'Lesson ID' })
  @ApiResponse({ status: 200, description: 'Lesson deleted successfully' })
  @ApiResponse({ status: 404, description: 'Lesson not found' })
  remove(@Param('id') id: string) {
    return this.lessonsService.remove(id);
  }
}
