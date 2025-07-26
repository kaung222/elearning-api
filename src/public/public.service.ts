import { Injectable } from '@nestjs/common';
import { Status } from 'generated/course-database-client-types';
import { Role } from 'generated/org-database-client-types';
import { PrismaCourseService } from 'src/prisma/prisma-course.service';
import { PrismaOrgService } from 'src/prisma/prisma-org.service';

@Injectable()
export class PublicService {
  constructor(
    private readonly courseService: PrismaCourseService,
    private readonly orgService: PrismaOrgService,
  ) {}

  async getCourses(page: number) {
    const [data, total] = await this.courseService.$transaction([
      this.courseService.course.findMany({
        where: {
          status: Status.PUBLISHED,
        },
        skip: 10 * (page - 1),
        take: 10,
        select: {
          title: true,
          type: true,
          tags: true,
          category: true,
          instructor: true,
          instructorAvatar: true,
          description: true,
          duration: true,
          price: true,
          thumbnail: true,
          instructorTitle: true,
        },
      }),
      this.courseService.course.count({ where: { status: Status.PUBLISHED } }),
    ]);
    return { data, total, page };
  }

  async getOrganizations(page: number) {
    const [data, total] = await this.orgService.$transaction([
      this.orgService.organization.findMany({
        take: 10,
        skip: 10 * page - 1,
        select: {
          logo: true,
          name: true,
          featured: true,
          verified: true,
          founded: true,
          website: true,
          specialties: true,
          location: true,
          description: true,
          type: true,
        },
      }),
      this.orgService.organization.count(),
    ]);
    return {
      data,
      total,
      page,
    };
  }

  async getCourseDetails(courseId: string) {
    const reviews = await this.courseService.review.findMany({
      take: 20,
      where: { courseId },
    });
    const modules = await this.courseService.module.findMany({
      where: { courseId },
      include: { lessons: true },
    });

    const faqs = await this.courseService.fAQ.findMany({
      where: { courseId },
    });
    return {
      courseId,
      faqs,
      modules,
      reviews,
    };
  }

  async getOrganizationDetails(organizationId: string) {
    const reviews = await this.orgService.review.findMany({
      where: { organizationId },
      take: 20,
    });
    const instructors = await this.orgService.organizationMember.findMany({
      where: {
        organizationId,
        role: Role.INSTRUCTOR,
      },
    });
    const courses = await this.courseService.course.findMany({
      where: {
        organizationId,
      },
    });
    return {
      organizationId,
      instructors,
      courses,
      reviews,
    };
  }

  getCategories() {
    const categories = [
      { name: 'Web Development', id: 'test1', image: null },
      {
        name: 'Technology',
        id: 'test2',
        image: null,
      },
    ];
    return categories;
  }
}
