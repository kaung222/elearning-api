/*
  Warnings:

  - You are about to drop the column `rating` on the `Instructor` table. All the data in the column will be lost.
  - You are about to drop the column `reviewCount` on the `Instructor` table. All the data in the column will be lost.
  - You are about to drop the column `totalCourses` on the `Instructor` table. All the data in the column will be lost.
  - You are about to drop the column `totalStudents` on the `Instructor` table. All the data in the column will be lost.
  - Added the required column `username` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Instructor" DROP COLUMN "rating",
DROP COLUMN "reviewCount",
DROP COLUMN "totalCourses",
DROP COLUMN "totalStudents",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "password" TEXT,
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "InstructorStats" (
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "reviewCount" INTEGER NOT NULL DEFAULT 0,
    "totalStudents" INTEGER NOT NULL DEFAULT 0,
    "totalCourses" INTEGER NOT NULL DEFAULT 0,
    "id" TEXT NOT NULL,
    "instructorId" TEXT NOT NULL,

    CONSTRAINT "InstructorStats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InstructorStats_instructorId_key" ON "InstructorStats"("instructorId");

-- AddForeignKey
ALTER TABLE "InstructorStats" ADD CONSTRAINT "InstructorStats_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
