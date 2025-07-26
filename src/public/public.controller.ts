import { Controller, Get, Query } from '@nestjs/common';
import { PublicService } from './public.service';

@Controller('public')
export class PublicController {
  constructor(private readonly publicService: PublicService) {}

  @Get('courses')
  getCourses(@Query('page') page = 1) {
    return this.publicService.getCourses(page);
  }

  @Get('organizations')
  getOrganizations(@Query('page') page = 1) {
    return this.publicService.getOrganizations(page);
  }

  @Get('categories')
  getCategories() {
    return this.publicService.getCategories();
  }
}
