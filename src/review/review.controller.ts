import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { SignedUser, User } from 'src/security/user.decorator';
import { Role } from 'generated/org-database-client-types';
import { ROLE_USER } from 'src/security/role.decorator';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  @ROLE_USER(Role.Student)
  create(@Body() createReviewDto: CreateReviewDto, @User() user: SignedUser) {
    return this.reviewService.createReview(createReviewDto, user);
  }

  @Get('course/:courseId')
  getReviewsByCourse(
    @Param('courseId') courseId: string,
    @Query('page') page = 1,
  ) {
    return this.reviewService.getReviewsByCourse(courseId, page);
  }

  @Get('instructor/:instructorId')
  getReviewsByInstructor(
    @Param('instructorId') instructorId: string,
    @Query('page') page = 1,
  ) {
    return this.reviewService.getReviewsByInstructor(instructorId, page);
  }

  @Get('org/:organizationId')
  getReviewsByOrg(
    @Param('organizationId') organizationId: string,
    @Query('page') page = 1,
  ) {
    return this.reviewService.getReviewsByOrg(organizationId, page);
  }
}
