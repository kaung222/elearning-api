import { Injectable } from '@nestjs/common';
import { Status } from 'generated/course-database-client-types';
import { Role } from 'generated/org-database-client-types';
import { PrismaCourseService } from 'src/prisma/prisma-course.service';
import { PrismaEnrollService } from 'src/prisma/prisma-enroll.service';
import { PrismaOrgService } from 'src/prisma/prisma-org.service';

@Injectable()
export class PublicService {
  constructor(
    private readonly courseService: PrismaCourseService,
    private readonly orgService: PrismaOrgService,
    private readonly enrollService: PrismaEnrollService,
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
      select: {
        id: true,
        logo: true,
        name: true,
        verified: true,
        specialties: true,
        location: true,
        shortDescription: true,
        description: true,
        type: true,
        stats: true,
      },
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
    const reviews = await this.enrollService.review.findMany({
      take: 10,
      where: { courseId },
    });
    const course = await this.courseService.course.findUnique({
      where: { id: courseId },
      include: {
        modules: { include: { lessons: true } },
        stats: true,
        category: true,
        faqs: true,
      },
    });
    const instructor = await this.orgService.instructor.findUnique({
      where: { id: course?.instructorId },
      include: { stats: true },
    });
    return { ...course, instructor, reviews };
  }

  async getOrganizationDetails(organizationId: string) {
    const reviews = await this.enrollService.review.findMany({
      where: { organizationId },
      take: 10,
    });
    const organization = await this.orgService.organization.findUnique({
      where: { id: organizationId },
      include: {
        instructors: { include: { stats: true } },
        contact: true,
        stats: true,
      },
    });
    const courses = await this.courseService.course.findMany({
      where: {
        organizationId,
      },
      include: { stats: true },
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

  async getInstructorDetails(instructorId: string) {
    const courses = await this.courseService.course.findMany({
      where: { instructorId },
      include: { stats: true },
    });
    const instructor = await this.orgService.instructor.findUnique({
      where: { id: instructorId },
      include: { stats: true, organization: true },
    });
    const reviews = await this.enrollService.review.findMany({
      where: { instructorId },
      take: 20,
      orderBy: { rating: 'desc' },
    });
    return { ...instructor, reviews, courses };
  }

  getCategories() {
    return this.courseService.category.findMany({
      include: { children: true },
      where: { parentId: null },
    });
  }
}
