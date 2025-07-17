import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaCourseService } from 'src/prisma/prisma-course.service';
import { PrismaUserService } from 'src/prisma/prisma-user.service';
import { SignedUser } from 'src/security/user.decorator';
import { OrgRole } from 'generated/org-database-client-types';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaCourseService) {}

  // create a course
  async create(createCourseDto: CreateCourseDto) {
    return await this.prisma.course.create({ data: createCourseDto });
  }

  async findAll(user: SignedUser) {
    if (user.organization?.role === OrgRole.INSTRUCTOR) {
      return await this.prisma.course.findMany({
        where: { instructorId: user.instructor?.id },
      });
    }
    const courses = await this.prisma.course.findMany({
      where: { organizationId: user.organization?.organizationId },
      include: {
        modules: {
          // orderBy: { order: 'asc' },
          // include: {
          //   lessons: {
          //     orderBy: { order: 'asc' }
          //   }
          // }
        },
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

  update(id: string, updateCourseDto: UpdateCourseDto) {
    return this.prisma.course.update({
      where: { id },
      data: updateCourseDto,
    });
  }

  remove(id: string) {
    return this.prisma.course.delete({ where: { id } });
  }
}
