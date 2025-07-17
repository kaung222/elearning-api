import { Injectable } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { PrismaCourseService } from 'src/prisma/prisma-course.service';
import { SignedUser } from 'src/security/user.decorator';

@Injectable()
export class ModulesService {
  constructor(private prisma: PrismaCourseService) {}

  async create(createModuleDto: CreateModuleDto, user: SignedUser) {
    if (!user.organization?.organizationId) {
      throw new Error('User not in an organization');
    }
    const course = await this.prisma.course.findUnique({
      where: {
        id: createModuleDto.courseId,
        organizationId: user.organization?.organizationId,
      },
    });
    if (!course) {
      throw new Error('Course not found');
    }
    return await this.prisma.module.create({
      data: {
        ...createModuleDto,
        organizationId: user.organization?.organizationId,
      },
    });
  }

  async findAll(user: SignedUser) {
    return await this.prisma.module.findMany({
      where: { organizationId: user.organization?.organizationId },
      include: {
        course: {
          select: {
            id: true,
            title: true,
          },
        },
        lessons: {
          orderBy: { order: 'asc' },
        },
        _count: {
          select: {
            lessons: true,
          },
        },
      },
      orderBy: { order: 'asc' },
    });
  }

  async findOne(id: string) {
    return await this.prisma.module.findUnique({
      where: { id },
      include: {
        course: {
          select: {
            id: true,
            title: true,
          },
        },
        lessons: {
          orderBy: { order: 'asc' },
        },
      },
    });
  }

  async findModuleLessons(moduleId: string) {
    return await this.prisma.lesson.findMany({
      where: { moduleId },
      orderBy: { order: 'asc' },
      include: {
        assignments: true,
        _count: {
          select: {
            assignments: true,
          },
        },
      },
    });
  }

  async update(id: string, updateModuleDto: UpdateModuleDto) {
    return await this.prisma.module.update({
      where: { id },
      data: updateModuleDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.module.delete({ where: { id } });
  }
}
