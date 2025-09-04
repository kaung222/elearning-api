import { Injectable } from '@nestjs/common';
import { PrismaOrgService } from 'src/prisma/prisma-org.service';

@Injectable()
export class GlobalService {
  constructor(private readonly orgService: PrismaOrgService) {}

  async verifyOrganization(orgId: string) {
    return await this.orgService.organization.update({
      data: { verified: true },
      where: { id: orgId },
    });
  }

  async featureOrganization(orgId: string) {
    return await this.orgService.organization.update({
      data: { name: 'Featured Organization' },

      where: { id: orgId },
    });
  }
}
