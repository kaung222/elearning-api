import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserAuthService } from './user-auth.service';

@Module({
  controllers: [],
  providers: [AuthService, UserAuthService],
})
export class AuthModule {}
