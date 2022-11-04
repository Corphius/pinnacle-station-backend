/*
  Warnings:

  - You are about to drop the column `CreatedAt` on the `Squad` table. All the data in the column will be lost.
  - You are about to drop the column `productManager` on the `Squad` table. All the data in the column will be lost.
  - Added the required column `created_at` to the `Squad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_manager` to the `Squad` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Squad" DROP COLUMN "CreatedAt",
DROP COLUMN "productManager",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "product_manager" TEXT NOT NULL;
