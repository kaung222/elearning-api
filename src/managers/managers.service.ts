import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
import { PrismaOrgService } from 'src/prisma/prisma-org.service';
import { PrismaUserService } from 'src/prisma/prisma-user.service';
import { Role } from 'generated/org-database-client-types';

@Injectable()
export class ManagersService {
  constructor(
    private readonly orgDatabaseService: PrismaOrgService,

    private readonly userDatabaseService: PrismaUserService,
  ) {}

  async create(orgId: string, createManagerDto: CreateManagerDto) {
    const { userId, role, username, password, access_lms } = createManagerDto;
    const user = await this.userDatabaseService.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const existedProfile = await this.orgDatabaseService.profile.findFirst({
      where: { organizationId: orgId, userId },
    });
    if (existedProfile) {
      throw new NotFoundException('User is already a manager or instructor');
    }

    await this.orgDatabaseService.profile.create({
      data: {
        username,
        password,
        access_lms,
        role,
        userId,
        status: 'PENDING',
        organizationId: orgId,
      },
    });
    return { message: 'Invite user successfully' };
  }

  async findAll(orgId: string) {
    const managers = await this.orgDatabaseService.profile.findMany({
      where: {
        organizationId: orgId,
      },
    });
    // const userIds = managers.map((m) => m.userId);
    // const users = await this.userDatabaseService.user.findMany({
    //   where: { id: { in: userIds } },
    // });
    return managers;
  }

  async remove(orgId: string, userId: string) {
    const profile = await this.orgDatabaseService.profile.findFirst({
      where: { userId, organizationId: orgId },
    });
    if (!profile) {
      throw new NotFoundException('Profile not found');
    }
    if (profile.role === Role.Instructor) {
      throw new NotFoundException('Instructor cannot be removed');
    }
    return await this.orgDatabaseService.profile.delete({
      where: {
        id: profile.id,
        organizationId: orgId,
      },
    });
  }
}
