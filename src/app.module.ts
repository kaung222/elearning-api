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
import { AssignmentsModule } from './assignments/assignments.module';
import { InstructorsModule } from './instructors/instructors.module';
import { OrgRolesGuard } from './security/org-role.guard';
import { MembersModule } from './members/members.module';

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
    AssignmentsModule,
    InstructorsModule,
    MembersModule,
  ],
  controllers: [],
  providers: [
    { provide: 'APP_GUARD', useClass: RolesGuard },
    { provide: 'APP_GUARD', useClass: OrgRolesGuard },
  ],
  exports: [],
})
export class AppModule {}
