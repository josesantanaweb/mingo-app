/*
  Warnings:

  - You are about to drop the column `form` on the `teams` table. All the data in the column will be lost.
  - You are about to drop the column `streakCount` on the `teams` table. All the data in the column will be lost.
  - You are about to drop the column `streakType` on the `teams` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "teams" DROP COLUMN "form",
DROP COLUMN "streakCount",
DROP COLUMN "streakType",
ADD COLUMN     "streak" "StreakType"[];
