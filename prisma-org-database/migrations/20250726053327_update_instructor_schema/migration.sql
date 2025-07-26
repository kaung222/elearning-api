/*
  Warnings:

  - You are about to drop the column `organizationId` on the `Instructor` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Instructor` table. All the data in the column will be lost.
  - You are about to drop the column `userAvatar` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `Review` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[memberId]` on the table `Instructor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `memberId` to the `Instructor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avatar` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'INDIVIDUAL_INSTRUCTOR';

-- DropForeignKey
ALTER TABLE "Instructor" DROP CONSTRAINT "Instructor_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "OrganizationMember" DROP CONSTRAINT "OrganizationMember_organizationId_fkey";

-- DropIndex
DROP INDEX "Instructor_userId_key";

-- AlterTable
ALTER TABLE "Instructor" DROP COLUMN "organizationId",
DROP COLUMN "userId",
ADD COLUMN     "memberId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "OrganizationMember" ADD COLUMN     "instructorId" TEXT,
ALTER COLUMN "organizationId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "userAvatar",
DROP COLUMN "userName",
ADD COLUMN     "avatar" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Instructor_memberId_key" ON "Instructor"("memberId");

-- AddForeignKey
ALTER TABLE "OrganizationMember" ADD CONSTRAINT "OrganizationMember_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Instructor" ADD CONSTRAINT "Instructor_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "OrganizationMember"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
