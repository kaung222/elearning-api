-- AlterEnum
ALTER TYPE "EnrollmentStatus" ADD VALUE 'COMPLETED';

-- AlterTable
ALTER TABLE "Enrollment" ADD COLUMN     "expiredDate" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "Competency" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "lessonId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Competency_pkey" PRIMARY KEY ("id")
);
