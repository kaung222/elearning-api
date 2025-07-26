import { Global, Module } from '@nestjs/common';
import { PrismaCourseService } from './prisma-course.service';
import { PrismaUserService } from './prisma-user.service';
import { PrismaEnrollService } from './prisma-enroll.service';
import { PrismaOrgService } from './prisma-org.service';
import { PrismaAssessService } from './prisma-assess.service';

@Global()
@Module({
  providers: [
    PrismaCourseService,
    PrismaUserService,
    PrismaEnrollService,
    PrismaOrgService,
    PrismaAssessService,
  ],
  exports: [
    PrismaCourseService,
    PrismaUserService,
    PrismaEnrollService,
    PrismaOrgService,
    PrismaAssessService,
  ],
})
export class PrismaModule {}
