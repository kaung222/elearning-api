import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { PrismaOrgService } from 'src/prisma/prisma-org.service';
import { PrismaUserService } from 'src/prisma/prisma-user.service';
import { SignedUser } from 'src/security/user.decorator';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Role } from 'generated/org-database-client-types';
@Injectable()
export class AuthService {
  constructor(
    private userService: PrismaUserService,
    private readonly orgService: PrismaOrgService,

    private readonly jwtService: JwtService,
  ) {}
  async checkPassword(password: string, hash: string): Promise<boolean> {
    return await bcryptjs.compare(password, hash);
  }

  async hashPassword(password: string): Promise<string> {
    return await bcryptjs.hash(password, 10);
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.userService.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.checkPassword(password, user.password);
    const jwtPayload: SignedUser = {
      sub: user.id,
      username: user.username,
      role: Role.STUDENT,
      avatar: user.avatar || undefined,
      email: user.email,
    };

    const accessToken = this.jwtService.sign(jwtPayload, { expiresIn: '1d' });
    const refreshToken = this.jwtService.sign(jwtPayload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: '7d',
    });
    return { user, accessToken, refreshToken };
  }

  async register(registerDto: RegisterDto) {
    const { email, password, username } = registerDto;

    const existing = await this.userService.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existing) {
      throw new ConflictException('Email or username already taken');
    }

    const hashedPassword = await this.hashPassword(password);

    const newUser = await this.userService.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });

    return newUser;
  }

  async loginToDashboard(signedUser: SignedUser, memberId: string) {
    const user = await this.userService.user.findUnique({
      where: {
        id: signedUser.sub,
      },
    });
    if (!user) throw new NotFoundException('User not found');
    const member = await this.orgService.organizationMember.findFirst({
      where: { userId: user.id, id: memberId },
    });

    if (!member) {
      throw new NotFoundException(`You are not associated with any profiles`);
    }
    const jwtPayload: SignedUser = {
      sub: user.id,
      email: user.email,
      avatar: user.avatar || undefined,
      role: member.role,
      username: user.username,
    };
    const accessToken = this.jwtService.sign(jwtPayload, { expiresIn: '1d' });
    const refreshToken = this.jwtService.sign(jwtPayload, {
      secret: process.env.JWT_REFRESH_SECRET,
    });
    return {
      user,
      accessToken,
      refreshToken,
    };
  }
}
