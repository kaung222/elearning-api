import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { JwtService } from '@nestjs/jwt';

describe('FaqsController (e2e)', () => {
  let app: INestApplication;
  let jwtService: JwtService;
  let adminToken: string;
  let userToken: string;
  let faqId: string;

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

  it('/faqs (POST) - should create a FAQ', () => {
    return request(app.getHttpServer())
      .post('/faqs')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        question: 'Test Question',
        answer: 'Test Answer',
        courseId: 'course-id', // Replace with a valid course ID from your database
      })
      .expect(201)
      .then((response) => {
        expect(response.body).toHaveProperty('id');
        expect(response.body.question).toBe('Test Question');
        faqId = response.body.id;
      });
  });

  it('/faqs (GET) - should get all FAQs (admin)', () => {
    return request(app.getHttpServer())
      .get('/faqs')
      .set('Authorization', `Bearer ${adminToken}`)
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body)).toBe(true);
      });
  });

  it('/faqs (GET) - should return 403 for non-admin users', () => {
    return request(app.getHttpServer())
      .get('/faqs')
      .set('Authorization', `Bearer ${userToken}`)
      .expect(403);
  });

  it('/faqs/course/:courseId (GET) - should get FAQs by course', () => {
    return request(app.getHttpServer())
      .get('/faqs/course/course-id') // Replace with a valid course ID
      .set('Authorization', `Bearer ${userToken}`)
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body)).toBe(true);
      });
  });

  it('/faqs/:id (GET) - should get a FAQ by ID', () => {
    return request(app.getHttpServer())
      .get(`/faqs/${faqId}`)
      .set('Authorization', `Bearer ${userToken}`)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty('id', faqId);
      });
  });

  it('/faqs/:id (PATCH) - should update a FAQ', () => {
    return request(app.getHttpServer())
      .patch(`/faqs/${faqId}`)
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        question: 'Updated Question',
      })
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty('id', faqId);
        expect(response.body.question).toBe('Updated Question');
      });
  });

  it('/faqs/:id (DELETE) - should delete a FAQ', () => {
    return request(app.getHttpServer())
      .delete(`/faqs/${faqId}`)
      .set('Authorization', `Bearer ${adminToken}`)
      .expect(200);
  });
});