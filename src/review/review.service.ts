import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { EnrollmentsService } from 'src/enrollments/enrollments.service';
import { PrismaEnrollService } from 'src/prisma/prisma-enroll.service';
import { SignedUser } from 'src/security/user.decorator';
import { PrismaOrgService } from 'src/prisma/prisma-org.service';
import { PrismaCourseService } from 'src/prisma/prisma-course.service';

@Injectable()
export class ReviewService {
  constructor(
    private readonly enrollService: PrismaEnrollService,
    private readonly courseService: PrismaCourseService,
    private readonly orgService: PrismaOrgService,
  ) {}

  async createReview(dto: CreateReviewDto, user: SignedUser) {
    try {
      const { enrollmentId, comment, rating } = dto;
      const enrollment = await this.enrollService.enrollment.findUnique({
        where: {
          id: enrollmentId,
          userId: user.sub,
        },
        select: {
          id: true,
          courseId: true,
          instructorId: true,
          organizationId: true,
        },
      });
      if (!enrollment)
        throw new NotFoundException('Course have not enrolled yet');
      const review = await this.enrollService.review.create({
        data: {
          username: user.username,
          avatar: user.avatar || '',
          comment,
          rating,
          courseId: enrollment.courseId,
          instructorId: enrollment.instructorId,
          organizationId: enrollment.organizationId,
        },
      });

      // update stats of course instructor, course and organization
      Promise.all([
        this.updateCourseStats(enrollment.courseId, rating),
        this.updateInstructorStats(enrollment.instructorId, rating),
        this.updateOrgStats(enrollment.organizationId, rating),
      ]);
      return review;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  private async updateCourseStats(courseId: string, rating: number) {
    // get current stats
    const stats = await this.courseService.courseStats.findUnique({
      where: { courseId },
      select: { totalReviews: true, rating: true },
    });
    if (!stats) return;

    const newTotalReviews = stats.totalReviews + 1;
    const newRating =
      (stats.rating * stats.totalReviews + rating) / newTotalReviews;

    await this.courseService.courseStats.update({
      where: { courseId },
      data: {
        totalReviews: newTotalReviews,
        rating: Number(newRating.toFixed(1)),
      },
    });
  }

  private async updateInstructorStats(instructorId: string, rating: number) {
    // get current stats
    const stats = await this.orgService.instructorStats.findUnique({
      where: { instructorId },
      select: { reviewCount: true, rating: true },
    });
    if (!stats) {
      console.log('Error update review stats of instructor');
      return;
    }

    const newTotalReviews = stats.reviewCount + 1;
    const newRating =
      (stats.rating * stats.reviewCount + rating) / newTotalReviews;

    await this.orgService.instructorStats.update({
      where: { instructorId },
      data: {
        reviewCount: newTotalReviews,
        rating: Number(newRating.toFixed(1)),
      },
    });
  }

  private async updateOrgStats(orgId: string, rating: number) {
    // get current stats
    const stats = await this.orgService.orgStats.findUnique({
      where: { organizationId: orgId },
      select: { reviewCount: true, rating: true },
    });
    if (!stats) return;

    const newTotalReviews = stats.reviewCount + 1;
    const newRating =
      (stats.rating * stats.reviewCount + rating) / newTotalReviews;

    await this.orgService.orgStats.update({
      where: { organizationId: orgId },
      data: {
        reviewCount: newTotalReviews,
        rating: Number(newRating.toFixed(1)),
      },
    });
  }

  async getReviewsByCourse(courseId: string, page: number) {
    return await this.enrollService.review.findMany({
      where: { courseId },
      skip: (page - 1) * 10,
      take: 10,
    });
  }

  async getReviewsByInstructor(instructorId: string, page: number) {
    return await this.enrollService.review.findMany({
      where: { instructorId },
      skip: (page - 1) * 10,
      take: 10,
    });
  }

  async getReviewsByOrg(organizationId: string, page: number) {
    return await this.enrollService.review.findMany({
      where: { organizationId },
      skip: (page - 1) * 10,
      take: 10,
    });
  }
}
