/*
  Warnings:

  - You are about to drop the column `tutorial_tipe` on the `Tutorial` table. All the data in the column will be lost.
  - Added the required column `tutorial_type` to the `Tutorial` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tutorial" DROP COLUMN "tutorial_tipe",
ADD COLUMN     "tutorial_type" INTEGER NOT NULL;
