/*
  Warnings:

  - Added the required column `logo` to the `leagues` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo` to the `teams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "leagues" ADD COLUMN     "logo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "teams" ADD COLUMN     "logo" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "tags" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TeamTags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_TeamTags_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "tags_label_key" ON "tags"("label");

-- CreateIndex
CREATE INDEX "_TeamTags_B_index" ON "_TeamTags"("B");

-- AddForeignKey
ALTER TABLE "_TeamTags" ADD CONSTRAINT "_TeamTags_A_fkey" FOREIGN KEY ("A") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeamTags" ADD CONSTRAINT "_TeamTags_B_fkey" FOREIGN KEY ("B") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;
