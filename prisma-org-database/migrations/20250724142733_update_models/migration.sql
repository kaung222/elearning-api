/*
  Warnings:

  - You are about to drop the column `experience` on the `Instructor` table. All the data in the column will be lost.
  - You are about to drop the column `joinedDate` on the `Instructor` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Instructor` table. All the data in the column will be lost.
  - Changed the type of `role` on the `OrganizationMember` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'INSTRUCTOR', 'ORG_ADMIN', 'ORG_STAFF');

-- AlterTable
ALTER TABLE "Instructor" DROP COLUMN "experience",
DROP COLUMN "joinedDate",
DROP COLUMN "location",
ALTER COLUMN "featured" SET DEFAULT false,
ALTER COLUMN "rating" SET DEFAULT 0,
ALTER COLUMN "totalStudents" SET DEFAULT 0,
ALTER COLUMN "totalCourses" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "OrganizationMember" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL;

-- DropEnum
DROP TYPE "OrgRole";
