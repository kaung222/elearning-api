import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { CreateOrgStatsDto } from './dto/create-org-stats.dto';
import { UpdateOrgStatsDto } from './dto/update-org-stats.dto';
import { PrismaOrgService } from 'src/prisma/prisma-org.service';
import { SignedUser } from 'src/security/user.decorator';
import { PrismaUserService } from 'src/prisma/prisma-user.service';

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
    return await this.orgService.organization.create({
      data: { ...createOrganizationDto, userId: user.id },
    });
  }

  async findAll() {
    return await this.orgService.organization.findMany({
      include: {
        _count: {
          select: {
            instructors: true,
            reviews: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    const organization = await this.orgService.organization.findUnique({
      where: { id },
      include: {
        instructors: true,
        stats: true,
        contact: true,
        reviews: true,
      },
    });

    if (!organization) {
      throw new NotFoundException(`Organization with ID ${id} not found`);
    }

    return organization;
  }

  async update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
    try {
      return await this.orgService.organization.update({
        where: { id },
        data: updateOrganizationDto,
      });
    } catch (error) {
      throw new NotFoundException(`Organization with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    try {
      return await this.orgService.organization.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Organization with ID ${id} not found`);
    }
  }

  // Contact methods
  async createContact(orgId: string, createContactDto: CreateContactDto) {
    // Verify organization exists
    await this.findOne(orgId);

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
    // Verify organization exists
    await this.findOne(orgId);

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
