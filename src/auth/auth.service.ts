import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { OrgRole } from 'generated/org-database-client-types';
import { UserRole } from 'generated/user-database-client-types';
import { PrismaOrgService } from 'src/prisma/prisma-org.service';
import { PrismaUserService } from 'src/prisma/prisma-user.service';
import { SignedUser } from 'src/security/user.decorator';
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

  async login(loginDto: any) {
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

    const organizations = await this.orgService.organizationMember.findMany({
      where: { userId: user.id },
    });
    const instructor = await this.orgService.instructor.findUnique({
      where: { userId: user.id },
    });
    const jwtPayload: SignedUser = {
      sub: user.id,
      username: user.name,
      role: UserRole.USER,
      avatar: user.avatar,
      email: user.email,
    };
    const token = await this.jwtService.signAsync(jwtPayload);
    return { user, token };
  }

  async register(registerDto: any) {
    const { email, password, name } = registerDto;
    const user = await this.userService.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      throw new NotFoundException('User already exists');
    }
    const hashedPassword = await this.hashPassword(password);
  }

  async loginAsOrganization(signedUser: SignedUser, orgId: string) {
    const user = await this.userService.user.findUnique({
      where: {
        id: signedUser.sub,
      },
    });
    if (!user) throw new NotFoundException('User not found');

    const instructor = await this.orgService.instructor.findUnique({
      where: { userId: user.id },
    });
    const member = await this.orgService.organizationMember.findFirst({
      where: { userId: user.id, organizationId: orgId },
    });

    if (!member) {
      throw new NotFoundException(`Organization with ID ${orgId} not found`);
    }
    const jwtPayload: SignedUser = {
      sub: user.id,
      email: user.email,
      avatar: user.avatar,
      role: UserRole.USER,
      username: user.name,
      instructor: instructor
        ? { id: instructor.id, type: 'organization' }
        : undefined,
      organization: {
        organizationId: orgId,
        role: member.role,
      },
    };
    return {
      user,
      token: this.jwtService.sign(jwtPayload, { expiresIn: '1d' }),
    };
  }
}
