import {
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
    const user = await this.userService.user.findUnique({
      where: { id: signedUser.sub },
    });
    if (!user) throw new NotFoundException('User not found');
    const existName = await this.orgService.organization.findFirst({
      where: { name: createOrganizationDto.name },
    });
    if (existName)
      throw new NotFoundException('Organization name already exists');
    const organization = await this.orgService.organization.create({
      data: {
        ...createOrganizationDto,
        featured: false,
        verified: false,
        rating: 0,
        reviewCount: 0,
      },
    });
    return await this.orgService.organizationMember.create({
      data: {
        organizationId: organization.id,
        userId: signedUser.sub,
        role: Role.ORG_ADMIN,
      },
      include: { organization: true },
    });
  }

  async findAll(signedUser: SignedUser) {
    const user = await this.userService.user.findUnique({
      where: { id: signedUser.sub },
    });
    if (!user) throw new NotFoundException('User not found');
    return await this.orgService.organizationMember.findMany({
      where: { userId: signedUser.sub },
      include: { instructor: true, organization: true },
    });
  }

  async findOne(id: string, signedUser: SignedUser) {
    const organization = await this.orgService.organization.findUnique({
      where: { id },
      include: {
        stats: true,
        contact: true,
        // reviews: true,
      },
    });
    const instructors = await this.orgService.instructor.findMany({
      where: { organizationId: id },
    });

    if (!organization) {
      throw new NotFoundException(`Organization with ID ${id} not found`);
    }
    return { ...organization, instructors };
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
      if (organization.id !== user.orgId) {
        throw new UnauthorizedException();
      }
      await this.orgService.organization.update({
        where: { id },
        data: updateOrganizationDto,
      });
    } catch (error) {
      throw new NotFoundException(`Organization with ID ${id} not found`);
    }
  }

  async remove(id: string, signedUser: SignedUser) {
    return;
    try {
      const organization = await this.orgService.organization.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Organization with ID ${id} not found`);
    }
  }

  // Contact methods
  async createContact(orgId: string, createContactDto: CreateContactDto) {
    return await this.orgService.contact.create({
      data: {
        ...createContactDto,
        organizationId: orgId,
      },
    });
  }

  async findContact(orgId: string) {
    const contact = await this.orgService.contact.findUnique({
      where: { organizationId: orgId },
    });

    if (!contact) {
      throw new NotFoundException(
        `Contact information for organization with ID ${orgId} not found`,
      );
    }

    return contact;
  }

  async updateContact(orgId: string, updateContactDto: UpdateContactDto) {
    try {
      return await this.orgService.contact.update({
        where: { organizationId: orgId },
        data: updateContactDto,
      });
    } catch (error) {
      throw new NotFoundException(
        `Contact information for organization with ID ${orgId} not found`,
      );
    }
  }

  // Stats methods
  async createStats(orgId: string, createOrgStatsDto: CreateOrgStatsDto) {
    return await this.orgService.orgStats.create({
      data: {
        ...createOrgStatsDto,
        organizationId: orgId,
      },
    });
  }

  async findStats(orgId: string) {
    const stats = await this.orgService.orgStats.findUnique({
      where: { organizationId: orgId },
    });

    if (!stats) {
      throw new NotFoundException(
        `Stats for organization with ID ${orgId} not found`,
      );
    }

    return stats;
  }

  async updateStats(orgId: string, updateOrgStatsDto: UpdateOrgStatsDto) {
    try {
      return await this.orgService.orgStats.update({
        where: { organizationId: orgId },
        data: updateOrgStatsDto,
      });
    } catch (error) {
      throw new NotFoundException(
        `Stats for organization with ID ${orgId} not found`,
      );
    }
  }
}
