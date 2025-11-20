/*
  Warnings:

  - You are about to drop the column `enrollmentId` on the `Submission` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Submission" DROP CONSTRAINT "Submission_enrollmentId_fkey";

-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "enrollmentId";
