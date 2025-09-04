import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Role } from 'generated/org-database-client-types';

export class CreateManagerDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsEnum(Role)
  @IsNotEmpty()
  role: Role;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsString()
  @IsOptional()
  password: string;

  @IsBoolean()
  @IsNotEmpty()
  access_lms: boolean;
}
