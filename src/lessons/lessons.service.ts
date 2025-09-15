import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { PrismaCourseService } from 'src/prisma/prisma-course.service';
import { SignedUser } from 'src/security/user.decorator';

@Injectable()
export class LessonsService {
  constructor(private prisma: PrismaCourseService) {}

  async create(createLessonDto: CreateLessonDto, user: SignedUser) {
    const {
      duration,
      courseId,
      isPreview,
      moduleId,
      order,
      title,
      type,
      description,
      url,
    } = createLessonDto;
    const course = await this.prisma.course.findUnique({
      where: { id: createLessonDto.courseId, organizationId: user.orgId },
    });

    if (!course) throw new NotFoundException('Course not found');

    const module = await this.prisma.module.findUnique({
      where: { id: createLessonDto.moduleId },
    });

    if (!module) throw new NotFoundException('Module not found');
    return await this.prisma.lesson.create({
      data: {
        description,
        duration,
        title,
        order,
        type,
        isPreview,
        moduleId,
        url,
        organizationId: user.orgId ?? '',
      },
    });
  }

  async update(id: string, updateLessonDto: UpdateLessonDto) {
    const {
      courseId,
      description,
      url,
      title,
      type,
      duration,
      isPreview,
      moduleId,
      order,
    } = updateLessonDto;
    return await this.prisma.lesson.update({
      where: { id },
      data: {
        title,
        description,
        url,
        type,
        duration,
        isPreview,
        moduleId,
        order,
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.lesson.delete({ where: { id } });
  }
}
