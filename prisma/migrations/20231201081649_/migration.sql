-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CREDITCARD', 'DEBITCARD', 'MONEY');

-- AlterEnum
ALTER TYPE "Status" ADD VALUE 'WITHDRAWAL';

-- CreateTable
CREATE TABLE "payments" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "Payment_method" "PaymentMethod" NOT NULL,
    "total_price" DOUBLE PRECISION NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "change" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "groupOder_id" UUID NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "payments_id_key" ON "payments"("id");

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_groupOder_id_fkey" FOREIGN KEY ("groupOder_id") REFERENCES "groupOders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
