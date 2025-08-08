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
import { AssignmentsService } from './assignments.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { CreateAssignmentSessionDto } from './dto/create-assignment-session.dto';
import { UpdateAssignmentSessionDto } from './dto/update-assignment-session.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ROLE_USER } from '../security/role.decorator';
import { Role } from 'generated/org-database-client-types';
import { SignedUser, User } from 'src/security/user.decorator';

@Controller('assignments')
@ApiTags('assignments')
export class AssignmentsController {
  constructor(private readonly assignmentsService: AssignmentsService) {}

  // Assignment Session endpoints
  @Post('sessions')
  @ROLE_USER(Role.INSTRUCTOR)
  @ApiOperation({ summary: 'Create a new assignment session' })
  @ApiResponse({
    status: 201,
    description: 'Assignment session created successfully',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  createAssignmentSession(
    @Body() createAssignmentSessionDto: CreateAssignmentSessionDto,
    @User() user: SignedUser,
  ) {
    return this.assignmentsService.createAssignmentSession(
      createAssignmentSessionDto,
      user,
    );
  }

  @Get('sessions/course/:courseId')
  @ApiOperation({ summary: 'Get all assignment sessions for a course' })
  @ApiParam({ name: 'courseId', description: 'Course ID' })
  @ApiResponse({
    status: 200,
    description: 'Assignment sessions retrieved successfully',
  })
  findAssignmentSessionsByCourse(@Param('courseId') courseId: string) {
    return this.assignmentsService.findAssignmentSessionsByCourse(courseId);
  }

  @Patch('sessions/:id')
  @ROLE_USER(Role.INSTRUCTOR)
  @ApiOperation({ summary: 'Update an assignment session' })
  @ApiParam({ name: 'id', description: 'Assignment Session ID' })
  @ApiResponse({
    status: 200,
    description: 'Assignment session updated successfully',
  })
  updateAssignmentSession(
    @Param('id') id: string,
    @Body() updateAssignmentSessionDto: UpdateAssignmentSessionDto,
    @User() user: SignedUser,
  ) {
    return this.assignmentsService.updateAssignmentSession(
      id,
      updateAssignmentSessionDto,
      user,
    );
  }

  @Delete('sessions/:id')
  @ROLE_USER(Role.INSTRUCTOR)
  @ApiOperation({ summary: 'Delete an assignment session' })
  @ApiParam({ name: 'id', description: 'Assignment Session ID' })
  @ApiResponse({
    status: 200,
    description: 'Assignment session deleted successfully',
  })
  @ApiResponse({ status: 404, description: 'Assignment session not found' })
  removeAssignmentSession(@Param('id') id: string, @User() user: SignedUser) {
    return this.assignmentsService.removeAssignmentSession(id, user);
  }

  // Assignment endpoints
  @Post()
  @ROLE_USER(Role.STUDENT)
  @ApiOperation({ summary: 'Create a new assignment' })
  @ApiResponse({ status: 201, description: 'Assignment created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  createAssignment(
    @Body() createAssignmentDto: CreateAssignmentDto,
    @User() user: SignedUser,
  ) {
    return this.assignmentsService.createAssignment(createAssignmentDto, user);
  }

  @Get('session/:sessionId')
  @ApiOperation({ summary: 'Get all assignments for a session' })
  @ApiParam({ name: 'sessionId', description: 'Assignment Session ID' })
  @ApiResponse({
    status: 200,
    description: 'Assignments retrieved successfully',
  })
  findAssignmentsBySession(@Param('sessionId') sessionId: string) {
    return this.assignmentsService.findAssignmentsBySession(sessionId);
  }

  @Delete(':id')
  @ROLE_USER(Role.INSTRUCTOR)
  @ApiOperation({ summary: 'Delete an assignment' })
  @ApiParam({ name: 'id', description: 'Assignment ID' })
  @ApiResponse({ status: 200, description: 'Assignment deleted successfully' })
  @ApiResponse({ status: 404, description: 'Assignment not found' })
  removeAssignment(@Param('id') id: string, user: SignedUser) {
    return this.assignmentsService.removeAssignment(id, user);
  }
}
