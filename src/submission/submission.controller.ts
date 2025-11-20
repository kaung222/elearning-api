import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SubmissionService } from './submission.service';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';
import { Role } from 'generated/org-database-client-types';
import { ROLE_USER } from 'src/security/role.decorator';
import { SignedUser, User } from 'src/security/user.decorator';

@Controller('submissions')
@ROLE_USER(Role.Student, Role.Instructor, Role.Admin)
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Post()
  @ROLE_USER(Role.Student)
  create(
    @User() user: SignedUser,
    @Body() createSubmissionDto: CreateSubmissionDto,
  ) {
    return this.submissionService.create(user, createSubmissionDto);
  }

  @Get()
  findAll() {
    return this.submissionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.submissionService.findOne(+id);
  }

  @Patch(':id')
  @ROLE_USER(Role.Instructor, Role.Admin)
  update(
    @Param('id') id: string,
    @Body() updateSubmissionDto: UpdateSubmissionDto,
  ) {
    return this.submissionService.update(id, updateSubmissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.submissionService.remove(+id);
  }
}
