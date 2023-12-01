-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_groupOderCode_fkey";

-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "groupOderCode" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_groupOderCode_fkey" FOREIGN KEY ("groupOderCode") REFERENCES "groupOders"("id") ON DELETE SET NULL ON UPDATE CASCADE;
