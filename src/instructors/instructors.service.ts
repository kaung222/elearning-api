import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto } from './dto/update-instructor.dto';
import { PrismaOrgService } from 'src/prisma/prisma-org.service';
import { SignedUser } from 'src/security/user.decorator';
import { Role } from 'generated/org-database-client-types';

@Injectable()
export class InstructorsService {
  constructor(private readonly orgService: PrismaOrgService) {}

  async create(user: SignedUser, createInstructorDto: CreateInstructorDto) {
    try {
      const {
        userId,
        name,
        education,
        avatar,
        social,
        bio,
        coverImage,
        title,
        specialties,
        achievements,
        password,
        access_lms,
      } = createInstructorDto;
      const member = await this.orgService.profile.findFirst({
        where: { organizationId: user.orgId, userId },
      });

      if (member) {
        throw new ConflictException(
          `User with ID ${userId} is already an instructor`,
        );
      }
      const profile = await this.orgService.profile.create({
        data: {
          username: name,
          password,
          access_lms,
          organizationId: user.orgId,
          userId,
          role: Role.Instructor,
        },
      });

      const instructor = await this.orgService.instructor.create({
        data: {
          name,
          bio,
          shortBio: '',
          education,
          avatar,
          achievements,
          specialties,
          title,
          social,
          coverImage,
          stats: { create: {} },
          organizationId: user.orgId,
          profileId: profile.id,
        },
      });
      await this.orgService.orgStats.update({
        where: { organizationId: user.orgId },
        data: { totalInstructors: { increment: 1 } },
      });
      return instructor;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(user: SignedUser) {
    try {
      return await this.orgService.instructor.findMany({
        where: { organizationId: user.orgId },
        include: { profile: true, stats: true },
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
          reviews: true,
          profile: true,
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
      const {
        name,
        education,
        avatar,
        social,
        bio,
        coverImage,
        title,
        specialties,
        achievements,
        password,
        access_lms,
      } = updateInstructorDto;
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
        data: {
          name,
          bio,
          shortBio: '',
          education,
          avatar,
          achievements,
          specialties,
          title,
          social,
          coverImage,
          profile: {
            update: {
              access_lms,
              password,
            },
          },
        },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async remove(id: string, user: SignedUser) {
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
      await this.orgService.instructor.delete({
        where: { id },
      });
      await this.orgService.orgStats.update({
        where: { organizationId: user.orgId },
        data: { totalInstructors: { decrement: 1 } },
      });
      return { message: 'Instructor deleted successfully' };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
