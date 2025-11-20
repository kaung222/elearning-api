import { IsNotEmpty } from 'class-validator';

export class CreateSubmissionDto {
  assignmentId: string;
  title: string;
  notes: string;
}
