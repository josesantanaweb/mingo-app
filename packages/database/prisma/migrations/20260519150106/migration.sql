/*
  Warnings:

  - The values [NONE] on the enum `StreakType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "StreakType_new" AS ENUM ('WIN', 'LOSE', 'DRAW');
ALTER TABLE "teams" ALTER COLUMN "streak" TYPE "StreakType_new"[] USING ("streak"::text::"StreakType_new"[]);
ALTER TYPE "StreakType" RENAME TO "StreakType_old";
ALTER TYPE "StreakType_new" RENAME TO "StreakType";
DROP TYPE "public"."StreakType_old";
COMMIT;
