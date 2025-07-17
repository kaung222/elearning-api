import { Injectable } from '@nestjs/common';
import { PrismaEnrollService } from 'src/prisma/prisma-enroll.service';
import { CreateEnrollmentDto } from './dto/enroll.dto';
import { User } from 'generated/user-database-client-types';
import { PrismaUserService } from 'src/prisma/prisma-user.service';
import { PrismaCourseService } from 'src/prisma/prisma-course.service';

@Injectable()
export class EnrollmentsService {
  constructor(
    private enrollmentService: PrismaEnrollService,
    private userService: PrismaUserService,
    private courseService: PrismaCourseService,
  ) {}

  async create(createEnrollmentDto: CreateEnrollmentDto) {
    const user = await this.userService.user.findUnique({
      where: { id: createEnrollmentDto.userId },
    });
    const course = await this.courseService.course.findUnique({
      where: { id: createEnrollmentDto.courseId },
    });

    return this.enrollmentService.enrollment.create({
      data: createEnrollmentDto,
    });
  }
  findAll() {
    return this.enrollmentService.enrollment.findMany();
  }
}
