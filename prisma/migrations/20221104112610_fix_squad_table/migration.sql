/*
  Warnings:

  - You are about to drop the column `initialTime` on the `Squad` table. All the data in the column will be lost.
  - You are about to drop the column `techManager` on the `Squad` table. All the data in the column will be lost.
  - Added the required column `initial_time` to the `Squad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tech_manager` to the `Squad` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Squad" DROP COLUMN "initialTime",
DROP COLUMN "techManager",
ADD COLUMN     "initial_time" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "tech_manager" TEXT NOT NULL;
