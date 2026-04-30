-- CreateEnum
CREATE TYPE "MatchStatus" AS ENUM ('UPCOMING', 'LIVE', 'FINISHED');

-- AlterTable
ALTER TABLE "matches" ADD COLUMN     "status" "MatchStatus" NOT NULL DEFAULT 'UPCOMING';
