import { Injectable } from '@nestjs/common';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';
import { PrismaAssessService } from 'src/prisma/prisma-assess.service';
import { SignedUser } from 'src/security/user.decorator';
import { PrismaEnrollService } from 'src/prisma/prisma-enroll.service';

@Injectable()
export class SubmissionService {
  constructor(private readonly assessService: PrismaEnrollService) {}
  async create(user: SignedUser, createSubmissionDto: CreateSubmissionDto) {
    const { assignmentId, title, notes } = createSubmissionDto;
    const assignment = await this.assessService.assignment.findMany({
      where: { id: assignmentId },
    });
    console.log(assignment);
    if (!assignment) return;
    return this.assessService.submission.create({
      data: {
        assignmentId,
        title,
        notes,
        userId: user.sub,
      },
    });
  }

  findAll() {
    return `This action returns all submission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} submission`;
  }

  async update(id: string, updateSubmissionDto: UpdateSubmissionDto) {
    const { grade, feedback } = updateSubmissionDto;
    return this.assessService.submission.update({
      where: { id },
      data: {
        grade,
        feedback,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} submission`;
  }
}
