/*
  Warnings:

  - You are about to drop the column `order_id` on the `additional` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `additional` table. All the data in the column will be lost.
  - You are about to drop the column `currency` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `qauntity` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `total_price` on the `orders` table. All the data in the column will be lost.
  - Added the required column `customer` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Made the column `product_id` on table `orders` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "additional" DROP CONSTRAINT "additional_order_id_fkey";

-- DropForeignKey
ALTER TABLE "additional" DROP CONSTRAINT "additional_product_id_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_product_id_fkey";

-- AlterTable
ALTER TABLE "additional" DROP COLUMN "order_id",
DROP COLUMN "product_id";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "currency",
DROP COLUMN "name",
DROP COLUMN "qauntity",
DROP COLUMN "total_price",
ADD COLUMN     "customer" VARCHAR(255) NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "product_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "currency" VARCHAR(255) NOT NULL DEFAULT 'R$';

-- CreateTable
CREATE TABLE "_additionalToproduct" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_additionalToorder" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_additionalToproduct_AB_unique" ON "_additionalToproduct"("A", "B");

-- CreateIndex
CREATE INDEX "_additionalToproduct_B_index" ON "_additionalToproduct"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_additionalToorder_AB_unique" ON "_additionalToorder"("A", "B");

-- CreateIndex
CREATE INDEX "_additionalToorder_B_index" ON "_additionalToorder"("B");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_additionalToproduct" ADD CONSTRAINT "_additionalToproduct_A_fkey" FOREIGN KEY ("A") REFERENCES "additional"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_additionalToproduct" ADD CONSTRAINT "_additionalToproduct_B_fkey" FOREIGN KEY ("B") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_additionalToorder" ADD CONSTRAINT "_additionalToorder_A_fkey" FOREIGN KEY ("A") REFERENCES "additional"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_additionalToorder" ADD CONSTRAINT "_additionalToorder_B_fkey" FOREIGN KEY ("B") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
