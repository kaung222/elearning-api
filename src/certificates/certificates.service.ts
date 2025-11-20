import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCertificateDto } from './dto/create-certificate.dto';

import { v4 as uuidv4 } from 'uuid';
import { PrismaCourseService } from 'src/prisma/prisma-course.service';
import { PrismaUserService } from 'src/prisma/prisma-user.service';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { PrismaOrgService } from 'src/prisma/prisma-org.service';

@Injectable()
export class CertificatesService {
  constructor(
    private prisma: PrismaCourseService,
    private prismaCourseService: PrismaCourseService,
    private prismaUserService: PrismaUserService,
    private prismaOrgService: PrismaOrgService,
  ) {}

  async create(createCertificateDto: CreateCertificateDto) {
    // Generate a unique serial number for the certificate
    const serialNumber = this.generateSerialNumber();

    // Get course title
    const course = await this.prisma.course.findUnique({
      where: { id: createCertificateDto.courseId },
    });

    if (!course) {
      throw new NotFoundException(
        `Course with ID ${createCertificateDto.courseId} not found`,
      );
    }

    return this.prisma.certificate.create({
      data: {
        ...createCertificateDto,
        serialNumber,
        courseTitle: course.title,
      },
    });
  }

  async findAll(courseId?: string) {
    if (courseId) {
      return this.prisma.certificate.findMany({
        where: { courseId },
      });
    }
    return this.prisma.certificate.findMany();
  }

  async findOne(id: string) {
    const certificate = await this.prisma.certificate.findUnique({
      where: { id },
    });

    if (!certificate) {
      throw new NotFoundException(`Certificate with ID ${id} not found`);
    }

    return certificate;
  }

  async update(id: string, updateCertificateDto: UpdateCertificateDto) {
    await this.findOne(id); // Check if certificate exists

    return this.prisma.certificate.update({
      where: { id },
      data: updateCertificateDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Check if certificate exists

    return this.prisma.certificate.delete({
      where: { id },
    });
  }

  async verify(serialNumber: string) {
    const certificate = await this.prisma.certificate.findUnique({
      where: { serialNumber },
      include: {
        course: {
          select: {
            title: true,
            id: true,
          },
        },
      },
    });

    if (!certificate) {
      return { valid: false, message: 'Certificate not found' };
    }

    // Check if certificate is expired
    if (
      certificate.expiryDate &&
      new Date(certificate.expiryDate) < new Date()
    ) {
      return {
        valid: false,
        message: 'Certificate has expired',
        certificate: {
          id: certificate.id,
          title: certificate.title,
          recipientName: certificate.recipientName,
          courseTitle: certificate.courseTitle,
          issuedDate: certificate.issuedDate,
          expiryDate: certificate.expiryDate,
          status: certificate.status,
        },
      };
    }

    // Check if certificate is revoked
    if (certificate.status === 'REVOKED') {
      return {
        valid: false,
        message: 'Certificate has been revoked',
        certificate: {
          id: certificate.id,
          title: certificate.title,
          recipientName: certificate.recipientName,
          courseTitle: certificate.courseTitle,
          issuedDate: certificate.issuedDate,
          expiryDate: certificate.expiryDate,
          status: certificate.status,
        },
      };
    }

    return {
      valid: true,
      message: 'Certificate is valid',
      certificate: {
        id: certificate.id,
        title: certificate.title,
        recipientName: certificate.recipientName,
        courseTitle: certificate.courseTitle,
        issuedDate: certificate.issuedDate,
        expiryDate: certificate.expiryDate,
        status: certificate.status,
      },
    };
  }

  async generateCertificate(courseId: string, userId: string) {
    // Get course information
    const course = await this.prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!course) {
      throw new NotFoundException(`Course with ID ${courseId} not found`);
    }

    // Get user information
    const user = await this.prismaUserService.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    // Get instructor information
    const instructor = await this.prismaOrgService.instructor.findFirst({
      where: { id: course.instructorId },
    });

    if (!instructor) {
      throw new NotFoundException(
        `Instructor with ID ${course.instructorId} not found`,
      );
    }

    // Create certificate
    const serialNumber = this.generateSerialNumber();
    const certificateData = {
      title: `Certificate of Completion - ${course.title}`,
      description: `This certificate is awarded for successfully completing the course: ${course.title}`,
      templateId: course.certificateTemplate || 'default',
      recipientName: `${user.username}`,
      recipientEmail: user.email,
      courseId: course.id,
      courseTitle: course.title,
      organizationId: course.organizationId || 'default',
      instructorId: instructor.id,
      instructorName: instructor.name,
      serialNumber,
    };

    return this.prisma.certificate.create({
      data: certificateData,
    });
  }

  async getUserCertificates(userId: string) {
    // Get user information
    const user = await this.prismaUserService.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    // Find certificates by user email
    return this.prisma.certificate.findMany({
      where: { recipientEmail: user.email },
      include: {
        course: {
          select: {
            title: true,
            id: true,
            thumbnail: true,
          },
        },
      },
    });
  }

  private generateSerialNumber(): string {
    // Generate a unique serial number for the certificate
    // Format: CERT-[UUID]-[TIMESTAMP]
    const timestamp = Date.now().toString(36).toUpperCase();
    const uuid = uuidv4().split('-')[0].toUpperCase();
    return `CERT-${uuid}-${timestamp}`;
  }
}
