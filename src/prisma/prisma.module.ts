import { Global, Module } from '@nestjs/common';
import { PrismaCourseService } from './prisma-course.service';
import { PrismaUserService } from './prisma-user.service';
import { PrismaEnrollService } from './prisma-enroll.service';

@Global()
@Module({
  providers: [PrismaCourseService, PrismaUserService, PrismaEnrollService],
  exports: [PrismaCourseService, PrismaUserService, PrismaEnrollService],
})
export class PrismaModule {}
