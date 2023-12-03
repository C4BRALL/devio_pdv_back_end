/*
  Warnings:

  - You are about to drop the column `groupOderCode` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the `groupOders` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_groupOderCode_fkey";

-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_groupOder_id_fkey";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "groupOderCode",
ADD COLUMN     "groupOrderCode" UUID;

-- DropTable
DROP TABLE "groupOders";

-- CreateTable
CREATE TABLE "groupOrders" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "code" SERIAL NOT NULL,
    "customer" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "groupOrders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "groupOrders_id_key" ON "groupOrders"("id");

-- CreateIndex
CREATE UNIQUE INDEX "groupOrders_code_key" ON "groupOrders"("code");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_groupOrderCode_fkey" FOREIGN KEY ("groupOrderCode") REFERENCES "groupOrders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_groupOder_id_fkey" FOREIGN KEY ("groupOder_id") REFERENCES "groupOrders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
