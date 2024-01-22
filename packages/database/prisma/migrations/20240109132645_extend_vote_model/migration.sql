-- AlterTable
ALTER TABLE "votes" ADD COLUMN     "duration" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "start" TIMESTAMP(3);
