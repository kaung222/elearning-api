import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { PrismaCourseService } from '../prisma/prisma-course.service';
import { SignedUser } from '../security/user.decorator';

@Injectable()
export class FaqsService {
  constructor(private prisma: PrismaCourseService) {}

  async create(createFaqDto: CreateFaqDto) {
    return await this.prisma.fAQ.create({
      data: createFaqDto,
    });
  }

  async findByCourse(courseId: string) {
    return await this.prisma.fAQ.findMany({
      where: { courseId },
    });
  }

  async update(id: string, updateFaqDto: UpdateFaqDto) {
    try {
      return await this.prisma.fAQ.update({
        where: { id },
        data: updateFaqDto,
      });
    } catch (error) {
      throw new NotFoundException(`FAQ with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.fAQ.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`FAQ with ID ${id} not found`);
    }
  }
}
