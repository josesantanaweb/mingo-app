-- CreateEnum
CREATE TYPE "StreakType" AS ENUM ('WIN', 'LOSE', 'DRAW', 'NONE');

-- AlterTable
ALTER TABLE "matches" ADD COLUMN     "awayScore" INTEGER,
ADD COLUMN     "homeScore" INTEGER;

-- AlterTable
ALTER TABLE "teams" ADD COLUMN     "form" TEXT[],
ADD COLUMN     "streakCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "streakType" "StreakType" NOT NULL DEFAULT 'NONE';
