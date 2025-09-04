/*
  Warnings:

  - You are about to drop the column `maxStudents` on the `Course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "maxStudents",
ADD COLUMN     "maxStudent" INTEGER;
