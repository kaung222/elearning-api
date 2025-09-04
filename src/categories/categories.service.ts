import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaCourseService } from 'src/prisma/prisma-course.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaCourseService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    console.log(createCategoryDto, 'payload');
    return await this.prisma.category.create({
      data: {
        name: createCategoryDto.name,
        parentId: createCategoryDto.parentId || undefined,
      },
    });
  }

  async findAll() {
    return await this.prisma.category.findMany({
      include: {
        parent: true,
        children: true,
        _count: {
          select: {
            courses: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    const category = await this.prisma.category.findUnique({
      where: { id },
      include: {
        parent: true,
        children: true,
        // courses: true,
      },
    });

    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }

    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    try {
      return await this.prisma.category.update({
        where: { id },
        data: updateCategoryDto,
      });
    } catch (error) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    try {
      // First check if the category has children
      const categoryWithChildren = await this.prisma.category.findUnique({
        where: { id },
        include: { children: true },
      });

      if (categoryWithChildren?.children?.length ?? 0 > 0) {
        throw new Error('Cannot delete a category that has child categories');
      }

      // Then check if the category is associated with any courses
      const categoryWithCourses = await this.prisma.category.findUnique({
        where: { id },
        include: { courses: true },
      });

      if (categoryWithCourses?.courses.length ?? 0 > 0) {
        throw new Error(
          'Cannot delete a category that is associated with courses',
        );
      }

      return await this.prisma.category.delete({
        where: { id },
      });
    } catch (error) {
      if (error.message.includes('Cannot delete')) {
        throw error;
      }
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
  }
}
