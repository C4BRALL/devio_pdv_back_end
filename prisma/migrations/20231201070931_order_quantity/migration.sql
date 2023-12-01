/*
  Warnings:

  - Made the column `description` on table `categories` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `status` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'CANCELED', 'PROGRESS', 'COMPLETED');

-- AlterTable
ALTER TABLE "categories" ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "status" "Status" NOT NULL;
