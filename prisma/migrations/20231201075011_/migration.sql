/*
  Warnings:

  - Added the required column `groupOderCode` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "groupOderCode" UUID NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- CreateTable
CREATE TABLE "groupOders" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "code" SERIAL NOT NULL,
    "customer" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "groupOders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "groupOders_id_key" ON "groupOders"("id");

-- CreateIndex
CREATE UNIQUE INDEX "groupOders_code_key" ON "groupOders"("code");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_groupOderCode_fkey" FOREIGN KEY ("groupOderCode") REFERENCES "groupOders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
