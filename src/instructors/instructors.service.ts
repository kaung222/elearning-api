import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto } from './dto/update-instructor.dto';
import { CreateInstructorStatsDto } from './dto/create-instructor-stats.dto';
import { UpdateInstructorStatsDto } from './dto/update-instructor-stats.dto';
import { CreateWorkExperienceDto } from './dto/create-work-experience.dto';
import { UpdateWorkExperienceDto } from './dto/update-work-experience.dto';
import { PrismaOrgService } from 'src/prisma/prisma-org.service';
import { SignedUser } from 'src/security/user.decorator';
import { Role } from 'generated/org-database-client-types';

@Injectable()
export class InstructorsService {
  constructor(private readonly orgService: PrismaOrgService) {}

  async create(user: SignedUser, createInstructorDto: CreateInstructorDto) {
    try {
      const { userId } = createInstructorDto;
      const member = await this.orgService.organizationMember.findFirst({
        where: { organizationId: user.orgId, userId },
      });

      if (!member) {
        throw new NotFoundException(`User with ID ${userId} not found`);
      }

      if (member?.role !== Role.INSTRUCTOR) {
        throw new NotFoundException(`Instructor role is required`);
      }
      return await this.orgService.instructor.create({
        data: {
          ...createInstructorDto,
          memberId: member.id,
        },
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(user: SignedUser) {
    try {
      return await this.orgService.organizationMember.findMany({
        where: { organizationId: user.orgId, role: Role.INSTRUCTOR },
        include: {
          organization: {
            select: {
              id: true,
              name: true,
            },
          },
          instructor: true,
        },
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string, user: SignedUser) {
    try {
      const instructor = await this.orgService.instructor.findFirst({
        where: {
          id,
        },
        include: {
          stats: true,
          workExperience: true,
          reviews: true,
          organizationMember: true,
        },
      });

      if (!instructor) {
        throw new NotFoundException(`Instructor with ID ${id} not found`);
      }
      if (instructor.organizationId !== user.orgId) {
        throw new UnauthorizedException();
      }

      return instructor;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException(error.message);
    }
  }

  async update(
    id: string,
    updateInstructorDto: UpdateInstructorDto,
    user: SignedUser,
  ) {
    try {
      const instructor = await this.orgService.instructor.findUnique({
        where: { id },
        select: {
          name: true,
          id: true,
          organizationId: true,
        },
      });

      if (!instructor) {
        throw new NotFoundException(`Instructor with ID ${id} not found`);
      }
      if (instructor.organizationId !== user.orgId) {
        throw new UnauthorizedException();
      }
      return await this.orgService.instructor.update({
        where: { id },
        data: updateInstructorDto,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  // Stats methods
  async createStats(
    instructorId: string,
    createInstructorStatsDto: CreateInstructorStatsDto,
    user: SignedUser,
  ) {
    // Verify instructor exists
    await this.findOne(instructorId, user);
    return await this.orgService.instructorStats.create({
      data: {
        ...createInstructorStatsDto,
        instructorId,
      },
    });
  }

  async findStats(instructorId: string) {
    const stats = await this.orgService.instructorStats.findUnique({
      where: { instructorId },
    });

    if (!stats) {
      throw new NotFoundException(
        `Stats for instructor with ID ${instructorId} not found`,
      );
    }

    return stats;
  }

  async updateStats(
    instructorId: string,
    updateInstructorStatsDto: UpdateInstructorStatsDto,
  ) {
    try {
      return await this.orgService.instructorStats.update({
        where: { instructorId },
        data: updateInstructorStatsDto,
      });
    } catch (error) {
      throw new NotFoundException(
        `Stats for instructor with ID ${instructorId} not found`,
      );
    }
  }

  // Work experience methods
  async addWorkExperience(
    instructorId: string,
    createWorkExperienceDto: CreateWorkExperienceDto,
    user: SignedUser,
  ) {
    // Verify instructor exists
    await this.findOne(instructorId, user);
    return await this.orgService.workExperience.create({
      data: {
        ...createWorkExperienceDto,
        instructorId,
      },
    });
  }

  async findWorkExperiences(instructorId: string) {
    return await this.orgService.workExperience.findMany({
      where: { instructorId },
    });
  }

  async updateWorkExperience(
    id: string,
    updateWorkExperienceDto: UpdateWorkExperienceDto,
  ) {
    try {
      return await this.orgService.workExperience.update({
        where: { id },
        data: updateWorkExperienceDto,
      });
    } catch (error) {
      throw new NotFoundException(`Work experience with ID ${id} not found`);
    }
  }

  async removeWorkExperience(id: string) {
    try {
      return await this.orgService.workExperience.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Work experience with ID ${id} not found`);
    }
  }
}
