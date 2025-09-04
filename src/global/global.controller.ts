import { Controller, Param, Patch } from '@nestjs/common';
import { GlobalService } from './global.service';
import { ROLE_USER } from 'src/security/role.decorator';
import { Role } from 'generated/org-database-client-types';

@Controller('global')
// @ROLE_USER("Platform-admin")
export class GlobalController {
  constructor(private readonly globalService: GlobalService) {}

  @Patch(':orgId/verify')
  async verifyOrganization(@Param('orgId') orgId: string) {
    return await this.globalService.verifyOrganization(orgId);
  }

  @Patch(':orgId/feature')
  async featureOrganization(@Param('orgId') orgId: string) {
    return await this.globalService.featureOrganization(orgId);
  }
}
