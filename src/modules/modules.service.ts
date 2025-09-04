import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { PrismaCourseService } from 'src/prisma/prisma-course.service';
import { SignedUser } from 'src/security/user.decorator';
import { CreateManyModuleDto } from './dto/update-many.dto';

@Injectable()
export class ModulesService {
  constructor(private prisma: PrismaCourseService) {}

  async create(createModuleDto: CreateModuleDto, user: SignedUser) {
    try {
      const course = await this.prisma.course.findUnique({
        where: {
          id: createModuleDto.courseId,
          organizationId: user.orgId,
        },
      });
      if (!course || !user.orgId) {
        throw new Error('Course or organization not found');
      }
      return await this.prisma.module.create({
        data: {
          ...createModuleDto,
          organizationId: user.orgId,
        },
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateModuleDto: UpdateModuleDto, user: SignedUser) {
    try {
      const module = await this.prisma.module.findUnique({
        where: { id, organizationId: user.orgId },
      });
      if (!module) {
        throw new Error('Module not found');
      }
      return await this.prisma.module.update({
        where: { id, organizationId: user.orgId },
        data: updateModuleDto,
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async createMany(dto: CreateManyModuleDto, user: SignedUser) {
    try {
      const { courseId, modules } = dto;
      const course = await this.prisma.course.findUnique({
        where: {
          id: dto.courseId,
          organizationId: user.orgId,
        },
      });

      if (!course || !user.orgId) {
        throw new Error('Course or organization not found');
      }

      await this.prisma.$transaction(
        modules.map((module) =>
          this.prisma.module.upsert({
            where: { id: module.id ?? 'dummy-id' }, // fallback if id is missing
            update: {
              ...module,
              lessons: {
                upsert: module.lessons.map((lesson) => {
                  return {
                    where: { id: lesson.id ?? 'dummy-lesson-id' },
                    update: {
                      ...lesson,
                      organizationId: user.orgId,
                    },
                    create: {
                      ...lesson,
                      organizationId: user.orgId || '',
                    },
                  };
                }),
              },
            },
            create: {
              ...module,
              courseId,
              organizationId: user.orgId || '',
              lessons: {
                createMany: {
                  data: module.lessons.map((lesson) => ({
                    ...lesson,
                    organizationId: user.orgId || '',
                  })),
                },
              },
            },
          }),
        ),
      );
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string, user: SignedUser) {
    try {
      const module = await this.prisma.module.findUnique({
        where: { id, organizationId: user.orgId },
      });
      if (!module) {
        throw new Error('Module not found');
      }
      return await this.prisma.module.delete({
        where: { id, organizationId: user.orgId },
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
