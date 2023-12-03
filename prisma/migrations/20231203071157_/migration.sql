/*
  Warnings:

  - You are about to drop the column `groupOrderCode` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `groupOder_id` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the `groupOrders` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[code]` on the table `payments` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customer` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_groupOrderCode_fkey";

-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_groupOder_id_fkey";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "groupOrderCode",
ADD COLUMN     "paymentId" UUID;

-- AlterTable
ALTER TABLE "payments" DROP COLUMN "groupOder_id",
ADD COLUMN     "code" SERIAL NOT NULL,
ADD COLUMN     "customer" VARCHAR(255) NOT NULL;

-- DropTable
DROP TABLE "groupOrders";

-- CreateIndex
CREATE UNIQUE INDEX "payments_code_key" ON "payments"("code");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "payments"("id") ON DELETE SET NULL ON UPDATE CASCADE;
