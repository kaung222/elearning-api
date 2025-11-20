/*
  Warnings:

  - You are about to drop the column `assignmentSessionId` on the `Assignment` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Assignment` table. All the data in the column will be lost.
  - You are about to drop the column `isCompleted` on the `Assignment` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Assignment` table. All the data in the column will be lost.
  - You are about to drop the column `assessmentId` on the `Submission` table. All the data in the column will be lost.
  - You are about to drop the `ActivityLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Answer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Assessment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AssignmentSession` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Competency` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ExamQuestion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ExamSession` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `QuestionBank` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserCompetency` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `courseId` to the `Assignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assignmentId` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Submission` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_sessionId_fkey";

-- DropForeignKey
ALTER TABLE "Assignment" DROP CONSTRAINT "Assignment_assignmentSessionId_fkey";

-- DropForeignKey
ALTER TABLE "ExamQuestion" DROP CONSTRAINT "ExamQuestion_assessmentId_fkey";

-- DropForeignKey
ALTER TABLE "ExamQuestion" DROP CONSTRAINT "ExamQuestion_questionBankId_fkey";

-- DropForeignKey
ALTER TABLE "ExamSession" DROP CONSTRAINT "ExamSession_assessmentId_fkey";

-- DropForeignKey
ALTER TABLE "Submission" DROP CONSTRAINT "Submission_assessmentId_fkey";

-- DropForeignKey
ALTER TABLE "UserCompetency" DROP CONSTRAINT "UserCompetency_competencyId_fkey";

-- AlterTable
ALTER TABLE "Assignment" DROP COLUMN "assignmentSessionId",
DROP COLUMN "description",
DROP COLUMN "isCompleted",
DROP COLUMN "userId",
ADD COLUMN     "courseId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "assessmentId",
ADD COLUMN     "assignmentId" TEXT NOT NULL,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "title" TEXT NOT NULL;

-- DropTable
DROP TABLE "ActivityLog";

-- DropTable
DROP TABLE "Answer";

-- DropTable
DROP TABLE "Assessment";

-- DropTable
DROP TABLE "AssignmentSession";

-- DropTable
DROP TABLE "Competency";

-- DropTable
DROP TABLE "ExamQuestion";

-- DropTable
DROP TABLE "ExamSession";

-- DropTable
DROP TABLE "QuestionBank";

-- DropTable
DROP TABLE "UserCompetency";

-- DropEnum
DROP TYPE "AssessmentType";

-- DropEnum
DROP TYPE "ExamStatus";

-- DropEnum
DROP TYPE "QuestionType";

-- CreateTable
CREATE TABLE "Attendance" (
    "id" TEXT NOT NULL,
    "lessonId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES "Assignment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
