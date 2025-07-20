/*
  Warnings:

  - Added the required column `time` to the `activities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "activities" ADD COLUMN     "time" TEXT NOT NULL;
