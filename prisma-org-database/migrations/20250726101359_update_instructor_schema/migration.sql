/*
  Warnings:

  - You are about to drop the column `userId` on the `Organization` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Instructor" ADD COLUMN     "organizationId" TEXT;

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "userId",
ALTER COLUMN "totalCourses" SET DEFAULT 0,
ALTER COLUMN "totalStudents" SET DEFAULT 0,
ALTER COLUMN "totalInstructors" SET DEFAULT 0,
ALTER COLUMN "rating" SET DEFAULT 0,
ALTER COLUMN "reviewCount" SET DEFAULT 0,
ALTER COLUMN "featured" SET DEFAULT false,
ALTER COLUMN "verified" SET DEFAULT false,
ALTER COLUMN "mission" DROP NOT NULL,
ALTER COLUMN "vision" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Instructor" ADD CONSTRAINT "Instructor_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;
