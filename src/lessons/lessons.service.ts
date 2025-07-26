import { Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { PrismaCourseService } from 'src/prisma/prisma-course.service';
import { SignedUser } from 'src/security/user.decorator';

@Injectable()
export class LessonsService {
  constructor(private prisma: PrismaCourseService) {}

  async create(createLessonDto: CreateLessonDto, user: SignedUser) {
    return await this.prisma.lesson.create({
      data: {
        ...createLessonDto,
        organizationId: user.email,
      },
    });
  }

  async findAll(user: SignedUser) {
    return await this.prisma.lesson.findMany({
      where: { organizationId: user.email },
      include: {
        module: {
          select: {
            id: true,
            title: true,
            course: {
              select: {
                id: true,
                title: true,
              },
            },
          },
        },
      },
      orderBy: { order: 'asc' },
    });
  }

  async findOne(id: string) {
    return await this.prisma.lesson.findUnique({
      where: { id },
      include: {
        module: {
          select: {
            id: true,
            title: true,
            course: {
              select: {
                id: true,
                title: true,
              },
            },
          },
        },
      },
    });
  }

  // async findLessonAssignments(lessonId: string) {
  //   return await this.prisma.assignment.findMany({
  //     orderBy: { dueDate: 'asc' },
  //   });
  // }

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
