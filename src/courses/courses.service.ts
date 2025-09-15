import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaCourseService } from 'src/prisma/prisma-course.service';
import { SignedUser } from 'src/security/user.decorator';
import { Role } from 'generated/org-database-client-types';
import { PrismaOrgService } from 'src/prisma/prisma-org.service';
import { PrismaEnrollService } from 'src/prisma/prisma-enroll.service';
import { Status } from 'generated/course-database-client-types';

@Injectable()
export class CoursesService {
  constructor(
    private prisma: PrismaCourseService,
    private readonly prismaOrgService: PrismaOrgService,
    private readonly prismaEnrollService: PrismaEnrollService,
  ) {}

  // create a course
  async create(createCourseDto: CreateCourseDto, user: SignedUser) {
    try {
      const {
        title,
        description,
        price,
        categoryId,
        instructorId,
        level,
        duration,
        thumbnail,
        endDate,
        startDate,
        type,
        language,
        shortDescription,
        maxStudent,
        tags,
        salePrice,
        requirements,
        includes,
        whatYouWillLearn,
        publishedAt,
        status,
      } = createCourseDto;
      const course = await this.prisma.course.create({
        data: {
          title,
          description,
          price,
          categoryId,
          instructorId,
          organizationId: user.orgId,
          level,
          duration,
          thumbnail,
          status,
          endDate,
          startDate,
          type,
          language,
          shortDescription,
          maxStudent,
          tags,
          salePrice,
          stats: { create: {} },
          requirements,
          includes,
          whatYouWillLearn,
          publishedAt,
        },
      });
      if (course.organizationId) {
        await this.prismaOrgService.orgStats.update({
          where: { organizationId: course.organizationId },
          data: { totalCourses: { increment: 1 } },
        });
      }
      if (course.instructorId) {
        await this.prismaOrgService.instructorStats.update({
          where: { instructorId: course.instructorId },
          data: { totalCourses: { increment: 1 } },
        });
      }
      return course;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(user: SignedUser) {
    if (!user.orgId) return;
    if (user.role === Role.Instructor) {
      return await this.prisma.course.findMany({
        where: { instructorId: user.instructorId },
      });
    }
    return await this.prisma.course.findMany({
      where: { organizationId: user.orgId },
      include: { stats: true },
    });
  }

  async findOne(id: string) {
    const course = await this.prisma.course.findUnique({
      where: { id },
      include: {
        category: true,
        faqs: true,
        stats: true,
        modules: {
          orderBy: { order: 'asc' },
          include: {
            lessons: {
              orderBy: { order: 'asc' },
            },
          },
        },
      },
    });
    if (!course) {
      throw new NotFoundException('Course not found');
    }
    // const reviews = await this.prisma.review.findMany({
    //   where: { courseId: id },
    //   take: 10,
    //   orderBy: { createdAt: 'desc' },
    // });
    return { ...course };
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
    try {
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
        data: { ...dto },
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async updateStatus(id: string, status: Status, user: SignedUser) {
    try {
      const course = await this.prisma.course.findUnique({
        where: { id },
        select: { id: true, organizationId: true },
      });
      if (!course) throw new NotFoundException('Course not found');
      if (course.organizationId !== user.orgId)
        throw new UnauthorizedException();
      return await this.prisma.course.update({
        where: { id },
        data: {
          status: status,
          publishedAt: status === Status.PUBLISHED ? new Date() : null,
        },
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string, user: SignedUser) {
    try {
      const course = await this.prisma.course.findUnique({
        where: { id, organizationId: user.orgId },
        select: { organizationId: true, instructorId: true, id: true },
      });
      if (!course) {
        throw new NotFoundException('Course not found');
      }

      if (course.organizationId !== user.orgId) {
        throw new ForbiddenException('You cannot update this course');
      }
      await this.prisma.course.delete({ where: { id } });
      if (course.organizationId) {
        await this.prismaOrgService.orgStats.update({
          where: { organizationId: course.organizationId },
          data: { totalCourses: { decrement: 1 } },
        });
      }
      if (course.instructorId) {
        await this.prismaOrgService.instructorStats.update({
          where: { instructorId: course.instructorId },
          data: { totalCourses: { decrement: 1 } },
        });
      }
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
