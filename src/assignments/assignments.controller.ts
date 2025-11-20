import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ROLE_USER } from '../security/role.decorator';
import { Role } from 'generated/org-database-client-types';
import { SignedUser, User } from 'src/security/user.decorator';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';

@Controller('assignments')
@ApiTags('assignments')
export class AssignmentsController {
  constructor(private readonly assignmentsService: AssignmentsService) {}

  // Assignment Session endpoints
  @Post()
  @ROLE_USER(Role.Instructor, Role.Admin)
  @ApiOperation({ summary: 'Create a new assignment session' })
  @ApiResponse({
    status: 201,
    description: 'Assignment session created successfully',
  })
  createAssignmentSession(
    @Body() createAssignmentSessionDto: CreateAssignmentDto,
    @User() user: SignedUser,
  ) {
    return this.assignmentsService.createAssignment(
      createAssignmentSessionDto,
      user,
    );
  }

  @Get()
  @ROLE_USER(Role.Student)
  @ApiOperation({ summary: 'Get all assignment sessions' })
  @ApiResponse({
    status: 200,
    description: 'Return all assignment sessions',
  })
  findAllByStudent(@User() user: SignedUser) {
    return this.assignmentsService.findAllByStudent(user);
  }

  @Get(':courseId')
  findAll(@Param('courseId') courseId: string, @User() user: SignedUser) {
    return this.assignmentsService.findAll(courseId, user);
  }

  @Patch(':id')
  @ROLE_USER(Role.Instructor)
  @ApiOperation({ summary: 'Update an assignment session' })
  @ApiParam({ name: 'id', description: 'Assignment Session ID' })
  @ApiResponse({
    status: 200,
    description: 'Assignment session updated successfully',
  })
  updateAssignmentSession(
    @Param('id') id: string,
    @Body() updateAssignmentSessionDto: UpdateAssignmentDto,
    @User() user: SignedUser,
  ) {
    return this.assignmentsService.updateAssignment(
      id,
      updateAssignmentSessionDto,
      user,
    );
  }

  @Delete(':id')
  @ROLE_USER(Role.Instructor)
  @ApiOperation({ summary: 'Delete an assignment session' })
  @ApiParam({ name: 'id', description: 'Assignment Session ID' })
  @ApiResponse({
    status: 200,
    description: 'Assignment session deleted successfully',
  })
  @ApiResponse({ status: 404, description: 'Assignment session not found' })
  removeAssignmentSession(@Param('id') id: string, @User() user: SignedUser) {
    return this.assignmentsService.removeAssignment(id, user);
  }
}
