import { Module } from '@nestjs/common';
import { CoursesModule } from './courses/courses.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './security/role.guard';
import { JwtModule } from '@nestjs/jwt';
import { OrganizationsModule } from './organizations/organizations.module';
import { ModulesModule } from './modules/modules.module';
import { LessonsModule } from './lessons/lessons.module';
import { FaqsModule } from './faqs/faqs.module';
import { InstructorsModule } from './instructors/instructors.module';
import { GlobalModule } from './global/global.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { PublicModule } from './public/public.module';
import { CategoriesModule } from './categories/categories.module';
import { ManagersModule } from './managers/managers.module';
import { SubmissionModule } from './submission/submission.module';

@Module({
  imports: [
    CoursesModule,
    PrismaModule,
    UsersModule,
    EnrollmentsModule,
    AuthModule,
    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    OrganizationsModule,
    ModulesModule,
    LessonsModule,
    FaqsModule,
    InstructorsModule,
    GlobalModule,
    AssignmentsModule,
    PublicModule,
    CoursesModule,
    CategoriesModule,
    ManagersModule,
    SubmissionModule,
  ],
  controllers: [],
  providers: [{ provide: 'APP_GUARD', useClass: RolesGuard }],
  exports: [],
})
export class AppModule {}
