/*
  Warnings:

  - You are about to drop the column `baddge` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `tutorialId` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `squadId` on the `Tutorial` table. All the data in the column will be lost.
  - Added the required column `badge` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_tutorialId_fkey";

-- DropForeignKey
ALTER TABLE "Tutorial" DROP CONSTRAINT "Tutorial_squadId_fkey";

-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "baddge",
DROP COLUMN "tutorialId",
ADD COLUMN     "badge" TEXT NOT NULL,
ADD COLUMN     "tutorial_id" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Squad" ADD COLUMN     "updated_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Tutorial" DROP COLUMN "squadId",
ADD COLUMN     "squad_id" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "Tutorial" ADD CONSTRAINT "Tutorial_squad_id_fkey" FOREIGN KEY ("squad_id") REFERENCES "Squad"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_tutorial_id_fkey" FOREIGN KEY ("tutorial_id") REFERENCES "Tutorial"("id") ON DELETE SET NULL ON UPDATE CASCADE;
