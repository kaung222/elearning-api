import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { CreateOrgStatsDto } from './dto/create-org-stats.dto';
import { UpdateOrgStatsDto } from './dto/update-org-stats.dto';
import { PrismaOrgService } from 'src/prisma/prisma-org.service';
import { SignedUser } from 'src/security/user.decorator';
import { PrismaUserService } from 'src/prisma/prisma-user.service';
import { Role } from 'generated/org-database-client-types';

@Injectable()
export class OrganizationsService {
  constructor(
    private readonly orgService: PrismaOrgService,
    private userService: PrismaUserService,
  ) {}

  async create(
    signedUser: SignedUser,
    createOrganizationDto: CreateOrganizationDto,
  ) {
    try {
      const existName = await this.orgService.organization.findFirst({
        where: { name: createOrganizationDto.name },
      });
      if (existName)
        throw new NotFoundException('Organization name already exists');

      const {
        name,
        type,
        location,
        logo,
        specialties,
        social,
        coverImage,
        mission,
        vision,
        description,
        shortDescription,
        email,
        phone,
        website,
        city,
        address,
        country,
      } = createOrganizationDto;
      const organization = await this.orgService.organization.create({
        data: {
          name,
          type,
          logo,
          coverImage,
          description,
          shortDescription,
          location,
          specialties,
          social,
          mission,
          vision,
          stats: {
            create: {},
          },
          contact: {
            create: {
              email,
              phone,
              address,
              city,
              country,
              website,
            },
          },
        },
      });
      await this.orgService.profile.create({
        data: {
          organizationId: organization.id,
          userId: signedUser.sub,
          username: name,
          role: Role.Admin,
          access_lms: true,
          status: 'ACTIVE',
        },
      });
      return { ...organization, role: Role.Admin };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  // get all associated organizations

  async findAll(signedUser: SignedUser) {
    return await this.orgService.profile.findMany({
      where: { userId: signedUser.sub },
      select: { organization: true, role: true },
    });
  }

  async findOne(id: string, signedUser: SignedUser) {
    const organization = await this.orgService.organization.findUnique({
      where: { id },
      include: {
        stats: true,
        contact: true,
      },
    });
    if (!organization) {
      throw new NotFoundException(`Organization with ID ${id} not found`);
    }
    return organization;
  }

  async update(
    id: string,
    updateOrganizationDto: UpdateOrganizationDto,
    user: SignedUser,
  ) {
    try {
      const organization = await this.orgService.organization.findUnique({
        where: { id },
      });
      if (!organization) {
        throw new NotFoundException();
      }
      if (organization.id !== user.orgId && user.role !== Role.Admin) {
        throw new UnauthorizedException();
      }
      await this.orgService.organization.update({
        where: { id },
        data: updateOrganizationDto,
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string, signedUser: SignedUser) {
    try {
      return await this.orgService.organization.delete({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
