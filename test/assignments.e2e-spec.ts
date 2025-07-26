import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { JwtService } from '@nestjs/jwt';

describe('AssignmentsController (e2e)', () => {
  let app: INestApplication;
  let jwtService: JwtService;
  let adminToken: string;
  let userToken: string;
  let assignmentSessionId: string;
  let assignmentId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    jwtService = moduleFixture.get<JwtService>(JwtService);
    await app.init();

    // Generate test tokens
    adminToken = jwtService.sign({ email: 'admin@example.com', roles: ['ADMIN'] });
    userToken = jwtService.sign({ email: 'user@example.com', roles: ['USER'] });
  });

  afterAll(async () => {
    await app.close();
  });

  describe('Assignment Sessions', () => {
    it('/assignments/sessions (POST) - should create an assignment session', () => {
      return request(app.getHttpServer())
        .post('/assignments/sessions')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({
          title: 'Test Assignment Session',
          description: 'Test Description',
          dueDate: '2023-12-31',
          courseId: 'course-id', // Replace with a valid course ID from your database
        })
        .expect(201)
        .then((response) => {
          expect(response.body).toHaveProperty('id');
          expect(response.body.title).toBe('Test Assignment Session');
          assignmentSessionId = response.body.id;
        });
    });

    it('/assignments/sessions (GET) - should get all assignment sessions (admin)', () => {
      return request(app.getHttpServer())
        .get('/assignments/sessions')
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(200)
        .then((response) => {
          expect(Array.isArray(response.body)).toBe(true);
        });
    });

    it('/assignments/sessions (GET) - should return 403 for non-admin users', () => {
      return request(app.getHttpServer())
        .get('/assignments/sessions')
        .set('Authorization', `Bearer ${userToken}`)
        .expect(403);
    });

    it('/assignments/sessions/course/:courseId (GET) - should get assignment sessions by course', () => {
      return request(app.getHttpServer())
        .get('/assignments/sessions/course/course-id') // Replace with a valid course ID
        .set('Authorization', `Bearer ${userToken}`)
        .expect(200)
        .then((response) => {
          expect(Array.isArray(response.body)).toBe(true);
        });
    });

    it('/assignments/sessions/:id (GET) - should get an assignment session by ID', () => {
      return request(app.getHttpServer())
        .get(`/assignments/sessions/${assignmentSessionId}`)
        .set('Authorization', `Bearer ${userToken}`)
        .expect(200)
        .then((response) => {
          expect(response.body).toHaveProperty('id', assignmentSessionId);
        });
    });

    it('/assignments/sessions/:id (PATCH) - should update an assignment session', () => {
      return request(app.getHttpServer())
        .patch(`/assignments/sessions/${assignmentSessionId}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({
          title: 'Updated Assignment Session',
        })
        .expect(200)
        .then((response) => {
          expect(response.body).toHaveProperty('id', assignmentSessionId);
          expect(response.body.title).toBe('Updated Assignment Session');
        });
    });
  });

  describe('Assignments', () => {
    it('/assignments (POST) - should create an assignment', () => {
      return request(app.getHttpServer())
        .post('/assignments')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({
          title: 'Test Assignment',
          description: 'Test Description',
          dueDate: '2023-12-31',
          assignmentSessionId: assignmentSessionId,
        })
        .expect(201)
        .then((response) => {
          expect(response.body).toHaveProperty('id');
          expect(response.body.title).toBe('Test Assignment');
          assignmentId = response.body.id;
        });
    });

    it('/assignments (GET) - should get all assignments (admin)', () => {
      return request(app.getHttpServer())
        .get('/assignments')
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(200)
        .then((response) => {
          expect(Array.isArray(response.body)).toBe(true);
        });
    });

    it('/assignments (GET) - should return 403 for non-admin users', () => {
      return request(app.getHttpServer())
        .get('/assignments')
        .set('Authorization', `Bearer ${userToken}`)
        .expect(403);
    });

    it('/assignments/session/:sessionId (GET) - should get assignments by session', () => {
      return request(app.getHttpServer())
        .get(`/assignments/session/${assignmentSessionId}`)
        .set('Authorization', `Bearer ${userToken}`)
        .expect(200)
        .then((response) => {
          expect(Array.isArray(response.body)).toBe(true);
        });
    });

    it('/assignments/:id (GET) - should get an assignment by ID', () => {
      return request(app.getHttpServer())
        .get(`/assignments/${assignmentId}`)
        .set('Authorization', `Bearer ${userToken}`)
        .expect(200)
        .then((response) => {
          expect(response.body).toHaveProperty('id', assignmentId);
        });
    });

    it('/assignments/:id (PATCH) - should update an assignment', () => {
      return request(app.getHttpServer())
        .patch(`/assignments/${assignmentId}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({
          title: 'Updated Assignment',
        })
        .expect(200)
        .then((response) => {
          expect(response.body).toHaveProperty('id', assignmentId);
          expect(response.body.title).toBe('Updated Assignment');
        });
    });
  });

  // Clean up tests - run these last
  describe('Cleanup', () => {
    it('/assignments/:id (DELETE) - should delete an assignment', () => {
      return request(app.getHttpServer())
        .delete(`/assignments/${assignmentId}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(200);
    });

    it('/assignments/sessions/:id (DELETE) - should delete an assignment session', () => {
      return request(app.getHttpServer())
        .delete(`/assignments/sessions/${assignmentSessionId}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(200);
    });
  });
});