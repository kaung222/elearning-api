-- AlterTable
ALTER TABLE "Assignment" ADD COLUMN     "description" TEXT,
ADD COLUMN     "maxPoints" INTEGER NOT NULL DEFAULT 0;
