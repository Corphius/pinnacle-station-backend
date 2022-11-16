/*
  Warnings:

  - You are about to drop the column `badge` on the `Activity` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "badge";

-- CreateTable
CREATE TABLE "Badge" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "available" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP,
    "updated_at" TIMESTAMP,

    CONSTRAINT "Badge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BadgeOnActivity" (
    "badge_id" TEXT NOT NULL,
    "activity_id" TEXT NOT NULL,
    "created_at" TIMESTAMP,
    "updated_at" TIMESTAMP,

    CONSTRAINT "BadgeOnActivity_pkey" PRIMARY KEY ("badge_id","activity_id")
);

-- CreateTable
CREATE TABLE "BadgeOnTutorial" (
    "badge_id" TEXT NOT NULL,
    "tutorial_id" TEXT NOT NULL,
    "created_at" TIMESTAMP,
    "updated_at" TIMESTAMP,

    CONSTRAINT "BadgeOnTutorial_pkey" PRIMARY KEY ("badge_id","tutorial_id")
);

-- AddForeignKey
ALTER TABLE "BadgeOnActivity" ADD CONSTRAINT "BadgeOnActivity_badge_id_fkey" FOREIGN KEY ("badge_id") REFERENCES "Badge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BadgeOnActivity" ADD CONSTRAINT "BadgeOnActivity_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BadgeOnTutorial" ADD CONSTRAINT "BadgeOnTutorial_badge_id_fkey" FOREIGN KEY ("badge_id") REFERENCES "Badge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BadgeOnTutorial" ADD CONSTRAINT "BadgeOnTutorial_tutorial_id_fkey" FOREIGN KEY ("tutorial_id") REFERENCES "Tutorial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
