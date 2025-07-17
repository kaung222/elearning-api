/*
  Warnings:

  - You are about to drop the column `thumbnail` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "thumbnail",
ADD COLUMN     "avatar" TEXT;
