import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { SignedUser } from 'src/security/user.decorator';
import { PrismaUserService } from 'src/prisma/prisma-user.service';
import { PrismaOrgService } from 'src/prisma/prisma-org.service';
import { Role } from 'generated/org-database-client-types';

@Injectable()
export class MembersService {
  constructor(
    private readonly userService: PrismaUserService,
    private readonly orgService: PrismaOrgService,
  ) {}

  // create new member
  async create(signedUser: SignedUser, createMemberDto: CreateMemberDto) {
    const user = await this.userService.user.findUnique({
      where: { id: createMemberDto.userId },
    });
    const organizationId = signedUser.orgId;
    if (!user || !organizationId)
      throw new NotFoundException('User not found!');
    return await this.orgService.organizationMember.create({
      data: {
        organizationId,
        userId: createMemberDto.userId,
        role: createMemberDto.role,
      },
    });
  }

  async findAll(signedUser: SignedUser) {
    try {
      const whereClause: any =
        signedUser.role === Role.ORG_ADMIN
          ? {
              organizationId: signedUser.orgId,
            }
          : { userId: signedUser.sub };
      const members = await this.orgService.organizationMember.findMany({
        where: whereClause,
        include: { instructor: true, organization: true },
      });
      const users = await this.userService.user.findMany({
        where: { id: { in: members.map((item) => item.userId) } },
      });

      return members.map((item) => ({
        ...item,
        user: users.find((u) => u.id === item.userId),
      }));
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string, user: SignedUser) {
    try {
      const member = await this.orgService.organizationMember.findFirst({
        where: {
          id,
          organizationId: user.orgId,
        },
      });

      if (!member) {
        throw new NotFoundException(`Member with ID ${id} not found`);
      }

      const userData = await this.userService.user.findUnique({
        where: { id: member.userId },
      });

      return {
        ...member,
        user: userData,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateMemberDto: UpdateMemberDto, user: SignedUser) {
    try {
      const member = await this.orgService.organizationMember.update({
        where: { id, organizationId: user.orgId },
        data: { ...updateMemberDto },
      });
      return member;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async remove(id: string, user: SignedUser) {
    try {
      const member = await this.orgService.organizationMember.findFirst({
        where: {
          id,
          organizationId: user.orgId,
        },
      });

      if (!member) {
        throw new NotFoundException(`Member with ID ${id} not found`);
      }

      return this.orgService.organizationMember.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException(error.message);
    }
  }
}
