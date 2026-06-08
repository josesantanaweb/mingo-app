/*
  Warnings:

  - You are about to alter the column `rate` on the `exchange_rates` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "exchange_rates" ALTER COLUMN "rate" SET DATA TYPE DOUBLE PRECISION;
