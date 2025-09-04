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
          id: true,
          title: true,
          type: true,
          tags: true,
          // category: true,
          shortDescription: true,
          duration: true,
          price: true,
          level: true,
          thumbnail: true,
          categoryId: true,
          stats: true,
        },
      }),
      this.courseService.course.count({ where: { status: Status.PUBLISHED } }),
    ]);
    return { data, total, page };
  }

  async getOrganizations(page: number) {
    return await this.orgService.organization.findMany({
      include: { stats: true, contact: true },
    });
    const [data, total] = await this.orgService.$transaction([
      this.orgService.organization.findMany({
        take: 10,
        skip: 10 * page - 1,
        select: {
          logo: true,
          name: true,
          verified: true,
          specialties: true,
          location: true,
          description: true,
          type: true,
          stats: true,
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
    // const reviews = await this.courseService.review.findMany({
    //   take: 20,
    //   where: { courseId },
    // });
    const course = await this.courseService.course.findUnique({
      where: { id: courseId },
      include: {
        modules: { include: { lessons: true } },
        stats: true,
        category: true,
        faqs: true,
      },
    });
    return course;
  }

  async getOrganizationDetails(organizationId: string) {
    const reviews = await this.orgService.review.findMany({
      where: { organizationId },
      take: 20,
    });
    const organization = await this.orgService.organization.findUnique({
      where: { id: organizationId },
      include: {
        instructors: true,
        contact: true,
        stats: true,
      },
    });
    const courses = await this.courseService.course.findMany({
      where: {
        organizationId,
      },
    });
    return {
      organization,

      courses,
      reviews,
    };
  }

  async getInstructorsByOrgId(orgId: string) {
    return this.orgService.instructor.findMany({
      where: { organizationId: orgId },
    });
  }

  async getCoursesByOrgId(orgId: string) {
    return this.courseService.course.findMany({
      where: { organizationId: orgId },
      include: { modules: { include: { lessons: true } } },
    });
  }

  async getReviewsByOrgId(orgId: string, page = 1) {
    return await this.orgService.review.findMany({
      skip: 10 * (page - 1),
      take: 10,
      where: { organizationId: orgId },
    });
  }

  getCategories() {
    return this.courseService.category.findMany({
      include: { children: true },
      where: { parentId: null },
    });
  }
}
