import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { InstructorsService } from './instructors.service';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto } from './dto/update-instructor.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ROLE_USER } from 'src/security/role.decorator';
import { SignedUser, User } from 'src/security/user.decorator';
import { Role } from 'generated/org-database-client-types';

@Controller('instructors')
@ROLE_USER(Role.Admin, Role.Manager)
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
}
