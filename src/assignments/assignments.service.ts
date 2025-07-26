import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { CreateAssignmentSessionDto } from './dto/create-assignment-session.dto';
import { UpdateAssignmentSessionDto } from './dto/update-assignment-session.dto';
import { SignedUser } from '../security/user.decorator';
import { PrismaAssessService } from 'src/prisma/prisma-assess.service';

@Injectable()
export class AssignmentsService {
  constructor(private prisma: PrismaAssessService) {}

  // Assignment Session CRUD operations
  async createAssignmentSession(
    createAssignmentSessionDto: CreateAssignmentSessionDto,
    user: SignedUser,
  ) {
    return await this.prisma.assignmentSession.create({
      data: {
        ...createAssignmentSessionDto,
        //  organizationId: user.orgId
      },
    });
  }

  async findAllAssignmentSessions(courseId: string, user: SignedUser) {
    return await this.prisma.assignmentSession.findMany({
      where: { courseId },
    });
  }

  async findAssignmentSessionsByCourse(courseId: string) {
    return await this.prisma.assignmentSession.findMany({
      where: { courseId },
      include: {
        assignments: true,
      },
    });
  }

  async updateAssignmentSession(
    id: string,
    updateAssignmentSessionDto: UpdateAssignmentSessionDto,
    user: SignedUser,
  ) {
    try {
      return await this.prisma.assignmentSession.update({
        where: { id },
        data: updateAssignmentSessionDto,
      });
    } catch (error) {
      throw new NotFoundException(`Assignment session with ID ${id} not found`);
    }
  }

  async removeAssignmentSession(id: string, user: SignedUser) {
    try {
      // const session = await this.prisma.assessment.findUnique({
      //   where: { id, organizationId: user.orgId },
      // });
      return await this.prisma.assignmentSession.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Assignment session with ID ${id} not found`);
    }
  }

  // Assignment CRUD operations
  async createAssignment(
    createAssignmentDto: CreateAssignmentDto,
    user: SignedUser,
  ) {
    return await this.prisma.assignment.create({
      data: { ...createAssignmentDto, userId: user.sub },
    });
  }

  async findAllAssignments(user: SignedUser) {
    return await this.prisma.assignment.findMany({
      where: {
        userId: user.sub,
      },
      include: {
        assignmentSession: {
          select: {
            id: true,
            title: true,
            courseId: true,
          },
        },
      },
    });
  }

  async findAssignmentsBySession(assignmentSessionId: string) {
    return await this.prisma.assignment.findMany({
      where: { assignmentSessionId },
    });
  }

  async removeAssignment(id: string, user: SignedUser) {
    try {
      const assignment = this.prisma.assignment.findFirst({
        where: { id, userId: user.sub },
      });
      return await this.prisma.assignment.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Assignment with ID ${id} not found`);
    }
  }
}
