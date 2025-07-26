import { Injectable } from '@nestjs/common';
import { PrismaEnrollService } from 'src/prisma/prisma-enroll.service';
import { CreateEnrollmentDto } from './dto/enroll.dto';
import { PrismaUserService } from 'src/prisma/prisma-user.service';
import { PrismaCourseService } from 'src/prisma/prisma-course.service';
import { SignedUser } from 'src/security/user.decorator';
import { EnrollmentStatus } from 'generated/enroll-database-client-types';

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
    if (!user || !course) {
      throw new Error('User or course not found');
    }

    return this.enrollmentService.enrollment.create({
      data: {
        ...createEnrollmentDto,
        userId: user?.id,
        courseId: course?.id,
        organizationId: course?.organizationId || '',
      },
    });
  }

  async findAll(user: SignedUser) {
    if (user.orgId) {
      return this.enrollmentService.enrollment.findMany({
        where: {
          organizationId: user.orgId,
        },
      });
    }
    return this.enrollmentService.enrollment.findMany({
      where: { userId: user.sub },
    });
  }

  async findOne(id: string, user: SignedUser) {
    const enrollment = await this.enrollmentService.enrollment.findUnique({
      where: { id },
    });
    if (!enrollment) {
      throw new Error('Enrollment not found');
    }
    if (
      enrollment.userId !== user.sub ||
      enrollment.organizationId !== user.orgId
    ) {
      throw new Error('You are not authorized to access this enrollment');
    }
    return enrollment;
  }

  async approved(id: string, user: SignedUser) {
    const enrollment = await this.enrollmentService.enrollment.findUnique({
      where: { id },
    });
    if (!enrollment) {
      throw new Error('Enrollment not found');
    }
    if (enrollment.organizationId !== user.orgId) {
      throw new Error('You are not authorized to access this enrollment');
    }
    return this.enrollmentService.enrollment.update({
      where: { id },
      data: { status: EnrollmentStatus.APPROVED },
    });
  }

  async rejected(id: string, user: SignedUser) {
    const enrollment = await this.enrollmentService.enrollment.findUnique({
      where: { id },
    });
    if (!enrollment) {
      throw new Error('Enrollment not found');
    }
    if (enrollment.organizationId !== user.orgId) {
      throw new Error('You are not authorized to access this enrollment');
    }
  }
}
