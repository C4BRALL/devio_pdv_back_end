/*
  Warnings:

  - Made the column `groupOderCode` on table `orders` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_groupOderCode_fkey";

-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "groupOderCode" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_groupOderCode_fkey" FOREIGN KEY ("groupOderCode") REFERENCES "groupOders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
