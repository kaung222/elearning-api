-- CreateEnum
CREATE TYPE "OrgType" AS ENUM ('University', 'Company', 'Institute', 'Academy', 'Bootcamp');

-- CreateTable
CREATE TABLE "Organization" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "OrgType" NOT NULL,
    "logo" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "longDescription" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "founded" TEXT NOT NULL,
    "totalCourses" INTEGER NOT NULL,
    "totalStudents" INTEGER NOT NULL,
    "totalInstructors" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "reviewCount" INTEGER NOT NULL,
    "specialties" TEXT[],
    "featured" BOOLEAN NOT NULL,
    "verified" BOOLEAN NOT NULL,
    "accreditation" TEXT[],
    "mission" TEXT NOT NULL,
    "vision" TEXT NOT NULL,
    "achievements" TEXT[],
    "partnerships" TEXT[],
    "social" JSONB NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrgStats" (
    "id" TEXT NOT NULL,
    "graduationRate" TEXT,
    "employmentRate" TEXT,
    "averageSalary" TEXT,
    "studentSatisfaction" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,

    CONSTRAINT "OrgStats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "userAvatar" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "instructorId" TEXT,
    "organizationId" TEXT,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instructor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "coverImage" TEXT,
    "bio" TEXT NOT NULL,
    "featured" BOOLEAN,
    "longBio" TEXT,
    "rating" DOUBLE PRECISION NOT NULL,
    "totalStudents" INTEGER NOT NULL,
    "totalCourses" INTEGER NOT NULL,
    "experience" TEXT,
    "location" TEXT,
    "joinedDate" TEXT,
    "specialties" TEXT[],
    "achievements" TEXT[],
    "education" TEXT[],
    "social" JSONB NOT NULL,
    "organizationId" TEXT,

    CONSTRAINT "Instructor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkExperience" (
    "id" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "instructorId" TEXT NOT NULL,

    CONSTRAINT "WorkExperience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InstructorStats" (
    "id" TEXT NOT NULL,
    "totalReviews" INTEGER NOT NULL,
    "responseRate" TEXT NOT NULL,
    "avgResponseTime" TEXT NOT NULL,
    "instructorId" TEXT NOT NULL,

    CONSTRAINT "InstructorStats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OrgStats_organizationId_key" ON "OrgStats"("organizationId");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_organizationId_key" ON "Contact"("organizationId");

-- CreateIndex
CREATE UNIQUE INDEX "InstructorStats_instructorId_key" ON "InstructorStats"("instructorId");

-- AddForeignKey
ALTER TABLE "OrgStats" ADD CONSTRAINT "OrgStats_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Instructor" ADD CONSTRAINT "Instructor_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkExperience" ADD CONSTRAINT "WorkExperience_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstructorStats" ADD CONSTRAINT "InstructorStats_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
