/*
  Warnings:

  - You are about to drop the column `coverImage` on the `Instructor` table. All the data in the column will be lost.
  - You are about to drop the column `shortBio` on the `Instructor` table. All the data in the column will be lost.
  - You are about to drop the column `coverImage` on the `Organization` table. All the data in the column will be lost.
  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_instructorId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_organizationId_fkey";

-- AlterTable
ALTER TABLE "Instructor" DROP COLUMN "coverImage",
DROP COLUMN "shortBio",
ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "coverImage";

-- DropTable
DROP TABLE "Review";
