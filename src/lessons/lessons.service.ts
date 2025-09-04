import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { PrismaCourseService } from 'src/prisma/prisma-course.service';
import { SignedUser } from 'src/security/user.decorator';

@Injectable()
export class LessonsService {
  constructor(private prisma: PrismaCourseService) {}

  async create(createLessonDto: CreateLessonDto, user: SignedUser) {
    const course = await this.prisma.course.findUnique({
      where: { id: createLessonDto.courseId, instructorId: user.sub },
    });
    if (!course) throw new NotFoundException('Course not found');

    const module = await this.prisma.module.findUnique({
      where: { id: createLessonDto.moduleId },
    });
    if (!module) throw new NotFoundException('Module not found');

    return await this.prisma.lesson.create({
      data: {
        ...createLessonDto,
        organizationId: user.orgId ?? '',
      },
    });
  }

  async update(id: string, updateLessonDto: UpdateLessonDto) {
    return await this.prisma.lesson.update({
      where: { id },
      data: updateLessonDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.lesson.delete({ where: { id } });
  }
}
