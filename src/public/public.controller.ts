import { Controller, Get, Param, Query } from '@nestjs/common';
import { PublicService } from './public.service';

@Controller('public')
export class PublicController {
  constructor(private readonly publicService: PublicService) {}

  @Get('courses')
  getCourses(@Query('page') page = 1) {
    return this.publicService.getCourses(page);
  }

  @Get('courses/:courseId')
  getCourseDetails(@Param('courseId') courseId: string) {
    return this.publicService.getCourseDetails(courseId);
  }

  @Get('organizations')
  getOrganizations(@Query('page') page = 1) {
    return this.publicService.getOrganizations(page);
  }

  @Get('organizations/:orgId/instructors')
  getInstructorsByOrgId(@Param('orgId') orgId: string) {
    return this.publicService.getInstructorsByOrgId(orgId);
  }
  @Get('organizations/:orgId/courses')
  getCoursesByOrgId(@Param('orgId') orgId: string) {
    return this.publicService.getCoursesByOrgId(orgId);
  }

  @Get('organizations/:orgId/reviews')
  getReviewsByOrgId(@Param('orgId') orgId: string) {
    return this.publicService.getReviewsByOrgId(orgId);
  }

  @Get('organizations/:orgId')
  getOrgDetails(@Param('orgId') orgId: string) {
    return this.publicService.getOrganizationDetails(orgId);
  }

  @Get('categories')
  getCategories() {
    return this.publicService.getCategories();
  }
}
