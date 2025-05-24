import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EnrollmentsService } from './enrollments.service';
import { CreateEnrollmentDto } from './dto/enroll.dto';

@Controller('enrollments')
@ApiTags('enrollments')
export class EnrollmentsController {
  constructor(private enrollmentService: EnrollmentsService) {}
  @Get()
  findAll() {
    return this.enrollmentService.findAll();
  }

  @Post()
  create(@Body() createEnrollmentDto: CreateEnrollmentDto) {
    return this.enrollmentService.create(createEnrollmentDto);
  }
}
