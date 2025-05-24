import { Module } from '@nestjs/common';
import { CoursesModule } from './courses/courses.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './security/role.guard';
import { JwtModule } from '@nestjs/jwt';
import { OrganizationsModule } from './organizations/organizations.module';

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
  ],
  controllers: [],
  providers: [{ provide: 'APP_GUARD', useClass: RolesGuard }],
  exports: [],
})
export class AppModule {}
