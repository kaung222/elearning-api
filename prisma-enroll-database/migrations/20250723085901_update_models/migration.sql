/*
  Warnings:

  - Added the required column `organizationId` to the `Enrollment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Enrollment" ADD COLUMN     "organizationId" TEXT NOT NULL;
