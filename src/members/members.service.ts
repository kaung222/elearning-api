import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { SignedUser } from 'src/security/user.decorator';
import { PrismaUserService } from 'src/prisma/prisma-user.service';
import { PrismaOrgService } from 'src/prisma/prisma-org.service';

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
    const organizationId = signedUser.organization?.organizationId;
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
    const member = await this.orgService.organizationMember.findMany({
      where: { organizationId: signedUser.organization?.organizationId },
    });

    const users = await this.userService.user.findMany({
      where: { id: { in: member.map((item) => item.userId) } },
    });

    const memberWithUser = member.map((item) => ({
      ...item,
      user: users.filter((u) => u.id === item.userId),
    }));
    return memberWithUser;
  }

  findOne(id: string) {
    return this.orgService.organizationMember.findUnique({ where: { id } });
  }

  update(id: string, updateMemberDto: UpdateMemberDto) {
    return this.orgService.organizationMember.update({
      where: { id },
      data: { ...updateMemberDto },
    });
  }

  remove(id: string) {
    return this.orgService.organizationMember.delete({ where: { id } });
  }
}
