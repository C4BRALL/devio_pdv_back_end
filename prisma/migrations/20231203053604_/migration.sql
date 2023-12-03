/*
  Warnings:

  - You are about to drop the column `Payment_method` on the `payments` table. All the data in the column will be lost.
  - Added the required column `payment_method` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payments" DROP COLUMN "Payment_method",
ADD COLUMN     "payment_method" "PaymentMethod" NOT NULL;
