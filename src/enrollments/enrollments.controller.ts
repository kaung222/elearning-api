import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EnrollmentsService } from './enrollments.service';
import { CreateEnrollmentDto } from './dto/enroll.dto';
import { SignedUser, User } from 'src/security/user.decorator';
import { ROLE_USER } from 'src/security/role.decorator';
import { Role } from 'generated/org-database-client-types';
import { EnrollmentStatus } from 'generated/enroll-database-client-types';

@Controller('enrollments')
@ApiTags('enrollments')
export class EnrollmentsController {
  constructor(private enrollmentService: EnrollmentsService) {}

  // get all enrollments by user
  @ROLE_USER(Role.Student)
  @Get()
  findAll(@User() user: SignedUser) {
    return this.enrollmentService.findAll(user);
  }

  @ROLE_USER(Role.Admin, Role.Instructor)
  @Get('course/:courseId')
  getEnrollments(@Param('courseId') courseId: string) {
    return this.enrollmentService.getEnrollments(courseId);
  }

  @Post()
  @ROLE_USER(Role.Student)
  create(
    @User() user: SignedUser,
    @Body() createEnrollmentDto: CreateEnrollmentDto,
  ) {
    return this.enrollmentService.create(user, createEnrollmentDto);
  }

  @Patch(':enrollmentId/status')
  @ROLE_USER(Role.Instructor, Role.Admin, Role.Manager)
  updateStatus(
    @Param('enrollmentId') id: string,
    @User() user: SignedUser,
    @Body() { status }: { status: EnrollmentStatus },
  ) {
    return this.enrollmentService.updateStatus(id, status, user);
  }
}
