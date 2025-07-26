import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EnrollmentsService } from './enrollments.service';
import { CreateEnrollmentDto } from './dto/enroll.dto';
import { SignedUser } from 'src/security/user.decorator';
import { ROLE_USER } from 'src/security/role.decorator';
import { Role } from 'generated/org-database-client-types';

@Controller('enrollments')
@ApiTags('enrollments')
export class EnrollmentsController {
  constructor(private enrollmentService: EnrollmentsService) {}

  // get all enrollments by user
  @ROLE_USER(Role.STUDENT)
  @Get()
  findAll(user: SignedUser) {
    return this.enrollmentService.findAll(user);
  }

  @Post()
  @ROLE_USER(Role.STUDENT)
  create(@Body() createEnrollmentDto: CreateEnrollmentDto) {
    return this.enrollmentService.create(createEnrollmentDto);
  }

  @Patch('approved')
  @ROLE_USER(Role.INSTRUCTOR, Role.ORG_ADMIN)
  @ROLE_USER()
  approved(@Body() id: string, user: SignedUser) {
    return this.enrollmentService.approved(id, user);
  }
  @Patch('rejected')
  @ROLE_USER(Role.INSTRUCTOR, Role.ORG_ADMIN)
  rejected(@Body() id: string, user: SignedUser) {
    return this.enrollmentService.rejected(id, user);
  }
}
