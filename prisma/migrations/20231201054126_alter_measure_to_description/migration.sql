/*
  Warnings:

  - You are about to drop the column `measure` on the `additional` table. All the data in the column will be lost.
  - Added the required column `description` to the `additional` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "additional" DROP COLUMN "measure",
ADD COLUMN     "description" VARCHAR(255) NOT NULL;
