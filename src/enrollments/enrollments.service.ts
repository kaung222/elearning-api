import { Injectable } from '@nestjs/common';
import { PrismaEnrollService } from 'src/prisma/prisma-enroll.service';
import { CreateEnrollmentDto } from './dto/enroll.dto';
import { User } from 'prisma-user-database/user-database-client-types';

@Injectable()
export class EnrollmentsService {
  constructor(private enrollmentService: PrismaEnrollService) {}

  create(createEnrollmentDto: CreateEnrollmentDto) {
    return this.enrollmentService.enrollment.create({
      data: createEnrollmentDto,
    });
  }
  findAll() {
    return this.enrollmentService.enrollment.findMany();
  }
}
