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

  async create(user: SignedUser, createEnrollmentDto: CreateEnrollmentDto) {
    const { courseId, description } = createEnrollmentDto;
    const student = await this.userService.user.findUnique({
      where: { id: user.sub },
    });
    const course = await this.courseService.course.findUnique({
      where: { id: courseId },
      select: {
        price: true,
        id: true,
        salePrice: true,
        organizationId: true,
      },
    });
    if (!student || !course) {
      throw new Error('User or course not found');
    }

    return this.enrollmentService.enrollment.create({
      data: {
        description,
        price: course.salePrice ?? course.price,
        status: EnrollmentStatus.PENDING,
        userId: student.id,
        courseId: course?.id,
        organizationId: course?.organizationId || '',
      },
    });
  }

  // find all by user
  async findAll(user: SignedUser) {
    // get enrollments by users
    const enrollments = await this.enrollmentService.enrollment.findMany({
      where: { userId: user.sub },
    });
    const courseIds = enrollments.map((en) => en.courseId);
    const courses = await this.courseService.course.findMany({
      where: {
        id: { in: courseIds },
      },
      select: {
        id: true,
        thumbnail: true,
        title: true,
        shortDescription: true,
        endDate: true,
        startDate: true,
      },
    });
    const activeLessons = await this.courseService.lesson.findMany({
      where: { organizationId: { in: courseIds }, isPreview: true },
    });
    const enrollmentsWithCourse = enrollments.map((en) => ({
      ...en,
      course: courses.find((c) => c.id === en.courseId),
    }));
    return {
      enrollments: enrollmentsWithCourse,
      activeLessons,
    };
  }

  // find one by user
  async findOneByUser(id: string, user: SignedUser) {
    // check is existed
    const enrollment = await this.enrollmentService.enrollment.findUnique({
      where: { id, userId: user.sub },
    });

    if (!enrollment) {
      throw new Error('Enrollment not found');
    }

    const course = await this.courseService.course.findUnique({
      where: { id: enrollment.courseId },
      include: {
        category: true,
        modules: {
          include: {
            lessons: true,
          },
        },
      },
    });

    return { ...enrollment, course };
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

  async getEnrollments(courseId: string) {
    const enrollments = await this.enrollmentService.enrollment.findMany({
      where: { courseId },
    });
    const userIds = enrollments.map((en) => en.userId);
    const users = await this.userService.user.findMany({
      where: { id: { in: userIds } },
    });
    const enrollmentsWithUser = enrollments.map((en) => ({
      ...en,
      user: users.find((u) => u.id === en.userId),
    }));
    return enrollmentsWithUser;
  }
}
