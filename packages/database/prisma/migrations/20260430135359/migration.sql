/*
  Warnings:

  - You are about to drop the column `matchDate` on the `matches` table. All the data in the column will be lost.
  - Added the required column `startDate` to the `matches` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "matches" DROP COLUMN "matchDate",
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE INDEX "matches_startDate_idx" ON "matches"("startDate");
