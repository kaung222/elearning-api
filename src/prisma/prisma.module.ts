import { Global, Module } from '@nestjs/common';
import { PrismaCourseService } from './prisma-course.service';
import { PrismaUserService } from './prisma-user.service';
import { PrismaEnrollService } from './prisma-enroll.service';
import { PrismaOrgService } from './prisma-org.service';

@Global()
@Module({
  providers: [
    PrismaCourseService,
    PrismaUserService,
    PrismaEnrollService,
    PrismaOrgService,
  ],
  exports: [
    PrismaCourseService,
    PrismaUserService,
    PrismaEnrollService,
    PrismaOrgService,
  ],
})
export class PrismaModule {}
