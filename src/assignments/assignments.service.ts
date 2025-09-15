import { Injectable, NotFoundException } from '@nestjs/common';
import { SignedUser } from '../security/user.decorator';
import { PrismaAssessService } from 'src/prisma/prisma-assess.service';
import { PrismaEnrollService } from 'src/prisma/prisma-enroll.service';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { CreateAssignmentDto } from './dto/create-assignment.dto';

@Injectable()
export class AssignmentsService {
  constructor(private prisma: PrismaEnrollService) {}

  // Assignment Session CRUD operations
  async createAssignment(
    createAssignmentDto: CreateAssignmentDto,
    user: SignedUser,
  ) {
    if (!user.orgId) return;
    const { courseId, description, dueDate, maxPoints, title } =
      createAssignmentDto;
    return await this.prisma.assignment.create({
      data: {
        title,
        courseId,
        dueDate,
        organizationId: user.orgId,
        description,
        maxPoints,
      },
    });
  }

  async findAll(courseId: string, user: SignedUser) {
    console.log(courseId);
    return await this.prisma.assignment.findMany({
      where: { courseId },
      include: { submissions: true },
    });
  }

  async updateAssignment(
    id: string,
    updateAssignmentDto: UpdateAssignmentDto,
    user: SignedUser,
  ) {
    try {
      const assignment = await this.prisma.assignment.findUnique({
        where: { id, organizationId: user.orgId },
      });
      if (!assignment) throw new NotFoundException();
      return await this.prisma.assignment.update({
        where: { id },
        data: updateAssignmentDto,
      });
    } catch (error) {
      throw new NotFoundException(`Assignment session with ID ${id} not found`);
    }
  }

  async removeAssignment(id: string, user: SignedUser) {
    try {
      return await this.prisma.assignment.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Assignment session with ID ${id} not found`);
    }
  }
}
