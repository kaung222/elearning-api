import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaCourseService } from 'src/prisma/prisma-course.service';
import { SignedUser } from 'src/security/user.decorator';
import { Role } from 'generated/org-database-client-types';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaCourseService) {}

  // create a course
  async create(createCourseDto: CreateCourseDto, user: SignedUser) {
    return await this.prisma.course.create({
      data: { ...createCourseDto, organizationId: user.orgId },
    });
  }

  async findAll(user: SignedUser) {
    if (user.role === Role.INSTRUCTOR) {
      return await this.prisma.course.findMany({
        where: { instructorId: user.instructorId },
      });
    }
    const courses = await this.prisma.course.findMany({
      where: { organizationId: user.orgId },
      include: {
        _count: {
          select: {
            modules: true,
            reviews: true,
          },
        },
      },
    });
    return courses;
  }

  async findOne(id: string) {
    return await this.prisma.course.findUnique({
      where: { id },
      include: {
        modules: {
          orderBy: { order: 'asc' },
          include: {
            lessons: {
              orderBy: { order: 'asc' },
            },
          },
        },
        reviews: true,
        faqs: true,
      },
    });
  }

  async findCourseModules(courseId: string) {
    return await this.prisma.module.findMany({
      where: { courseId },
      orderBy: { order: 'asc' },
      include: {
        lessons: {
          orderBy: { order: 'asc' },
        },
        _count: {
          select: {
            lessons: true,
          },
        },
      },
    });
  }

  findCourseReviews(courseId: string, page = 1) {
    return this.prisma.review.findMany({
      where: { courseId },
      take: 10,
      skip: 10 * (page - 1),
    });
  }

  async update(id: string, dto: UpdateCourseDto, user: SignedUser) {
    // Ensure the user is authorized for this org
    const course = await this.prisma.course.findUnique({
      where: { id },
      select: { organizationId: true },
    });

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    if (course.organizationId !== user.orgId) {
      throw new ForbiddenException('You cannot update this course');
    }

    return this.prisma.course.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string, user: SignedUser) {
    const course = await this.prisma.course.findUnique({
      where: { id, organizationId: user.orgId },
    });
    if (!course) {
      throw new NotFoundException('Course not found');
    }

    if (course.organizationId !== user.orgId) {
      throw new ForbiddenException('You cannot update this course');
    }
    return this.prisma.course.delete({ where: { id } });
  }
}
