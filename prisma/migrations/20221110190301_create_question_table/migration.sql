/*
  Warnings:

  - You are about to drop the column `answer` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `options` on the `Activity` table. All the data in the column will be lost.
  - You are about to alter the column `description` on the `Activity` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `title` on the `Activity` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `image_title` on the `Activity` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `image_url` on the `Activity` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `badge` on the `Activity` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `description` on the `Squad` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `product_manager` on the `Squad` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `tech_manager` on the `Squad` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `title` on the `Tutorial` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `urlVideo` on the `Tutorial` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `titleVideo` on the `Tutorial` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `description` on the `Tutorial` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `image_url` on the `Tutorial` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `outside_url` on the `Tutorial` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `image_title` on the `Tutorial` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - Added the required column `progress` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "answer",
DROP COLUMN "options",
ADD COLUMN     "progress" INTEGER NOT NULL,
ALTER COLUMN "description" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "title" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "image_title" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "image_url" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "badge" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Squad" ALTER COLUMN "description" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "product_manager" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "tech_manager" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Tutorial" ALTER COLUMN "title" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "urlVideo" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "titleVideo" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "description" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "image_url" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "outside_url" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "image_title" SET DATA TYPE VARCHAR(255);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "answer_options" TEXT[],
    "created_at" TIMESTAMP,
    "updated_at" TIMESTAMP,
    "correct_answer_id" INTEGER NOT NULL,
    "activity_id" TEXT,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "Activity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
