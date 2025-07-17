import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { JwtService } from '@nestjs/jwt';

describe('Courses (e2e)', () => {
  let app: INestApplication;
  let jwtService: JwtService;
  let adminToken: string;
  let courseId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    jwtService = moduleFixture.get<JwtService>(JwtService);
    
    // Create admin token for testing protected routes
    adminToken = jwtService.sign({
      id: 'test-admin-id',
      email: 'test-org-id',
      roles: ['ADMIN'],
    });
  });

  afterAll(async () => {
    await app.close();
  });

  describe('/courses (POST)', () => {
    it('should create a new course when admin is authenticated', async () => {
      const createCourseDto = {
        title: 'E2E Test Course',
        description: 'E2E Test Description',
        organizationId: 'test-org-id',
        instructor: {
          name: 'Test Instructor',
          bio: 'Test Bio',
        },
        duration: 120,
        level: 'BEGINNER',
        language: 'ENGLISH',
      };

      const response = await request(app.getHttpServer())
        .post('/courses')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(createCourseDto)
        .expect(201);

      expect(response.body).toHaveProperty('id');
      expect(response.body.title).toBe(createCourseDto.title);
      
      // Save the course ID for later tests
      courseId = response.body.id;
    });

    it('should return 403 when non-admin tries to create a course', async () => {
      const userToken = jwtService.sign({
        id: 'test-user-id',
        email: 'test-user@example.com',
        roles: ['USER'],
      });

      const createCourseDto = {
        title: 'Unauthorized Course',
        description: 'Unauthorized Description',
        organizationId: 'test-org-id',
      };

      await request(app.getHttpServer())
        .post('/courses')
        .set('Authorization', `Bearer ${userToken}`)
        .send(createCourseDto)
        .expect(403);
    });
  });

  describe('/courses (GET)', () => {
    it('should return all courses for admin', async () => {
      const response = await request(app.getHttpServer())
        .get('/courses')
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
    });

    it('should return 403 when non-admin tries to get all courses', async () => {
      const userToken = jwtService.sign({
        id: 'test-user-id',
        email: 'test-user@example.com',
        roles: ['USER'],
      });

      await request(app.getHttpServer())
        .get('/courses')
        .set('Authorization', `Bearer ${userToken}`)
        .expect(403);
    });
  });

  describe('/courses/:id (GET)', () => {
    it('should return a course by ID', async () => {
      // Skip if courseId wasn't set in the POST test
      if (!courseId) {
        return;
      }

      const response = await request(app.getHttpServer())
        .get(`/courses/${courseId}`)
        .expect(200);

      expect(response.body).toHaveProperty('id', courseId);
    });

    it('should return 404 for non-existent course', async () => {
      await request(app.getHttpServer())
        .get('/courses/non-existent-id')
        .expect(404);
    });
  });

  describe('/courses/:id/modules (GET)', () => {
    it('should return modules for a course', async () => {
      // Skip if courseId wasn't set in the POST test
      if (!courseId) {
        return;
      }

      const response = await request(app.getHttpServer())
        .get(`/courses/${courseId}/modules`)
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('/courses/:id (PATCH)', () => {
    it('should update a course when admin is authenticated', async () => {
      // Skip if courseId wasn't set in the POST test
      if (!courseId) {
        return;
      }

      const updateCourseDto = {
        title: 'Updated E2E Test Course',
      };

      const response = await request(app.getHttpServer())
        .patch(`/courses/${courseId}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send(updateCourseDto)
        .expect(200);

      expect(response.body).toHaveProperty('id', courseId);
      expect(response.body.title).toBe(updateCourseDto.title);
    });

    it('should return 403 when non-admin tries to update a course', async () => {
      // Skip if courseId wasn't set in the POST test
      if (!courseId) {
        return;
      }

      const userToken = jwtService.sign({
        id: 'test-user-id',
        email: 'test-user@example.com',
        roles: ['USER'],
      });

      const updateCourseDto = {
        title: 'Unauthorized Update',
      };

      await request(app.getHttpServer())
        .patch(`/courses/${courseId}`)
        .set('Authorization', `Bearer ${userToken}`)
        .send(updateCourseDto)
        .expect(403);
    });
  });

  describe('/courses/:id (DELETE)', () => {
    it('should delete a course when admin is authenticated', async () => {
      // Skip if courseId wasn't set in the POST test
      if (!courseId) {
        return;
      }

      await request(app.getHttpServer())
        .delete(`/courses/${courseId}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(200);

      // Verify the course is deleted
      await request(app.getHttpServer())
        .get(`/courses/${courseId}`)
        .expect(404);
    });

    it('should return 403 when non-admin tries to delete a course', async () => {
      const userToken = jwtService.sign({
        id: 'test-user-id',
        email: 'test-user@example.com',
        roles: ['USER'],
      });

      await request(app.getHttpServer())
        .delete('/courses/some-course-id')
        .set('Authorization', `Bearer ${userToken}`)
        .expect(403);
    });
  });
});