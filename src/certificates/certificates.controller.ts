import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateCertificateDto } from './dto/update-certificate.dto';

@ApiTags('certificates')
@Controller('certificates')
export class CertificatesController {
  constructor(private readonly certificatesService: CertificatesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new certificate' })
  @ApiResponse({ status: 201, description: 'Certificate created successfully' })
  create(@Body() createCertificateDto: CreateCertificateDto) {
    return this.certificatesService.create(createCertificateDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all certificates' })
  findAll(@Query('courseId') courseId?: string) {
    return this.certificatesService.findAll(courseId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get certificate by ID' })
  findOne(@Param('id') id: string) {
    return this.certificatesService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update certificate' })
  update(
    @Param('id') id: string,
    @Body() updateCertificateDto: UpdateCertificateDto,
  ) {
    return this.certificatesService.update(id, updateCertificateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete certificate' })
  remove(@Param('id') id: string) {
    return this.certificatesService.remove(id);
  }

  @Get('verify/:serialNumber')
  @ApiOperation({ summary: 'Verify certificate by serial number' })
  verify(@Param('serialNumber') serialNumber: string) {
    return this.certificatesService.verify(serialNumber);
  }

  @Post('generate/:courseId/:userId')
  @ApiOperation({
    summary: 'Generate certificate for a user who completed a course',
  })
  generate(
    @Param('courseId') courseId: string,
    @Param('userId') userId: string,
  ) {
    return this.certificatesService.generateCertificate(courseId, userId);
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Get all certificates for a user' })
  getUserCertificates(@Param('userId') userId: string) {
    return this.certificatesService.getUserCertificates(userId);
  }
}
