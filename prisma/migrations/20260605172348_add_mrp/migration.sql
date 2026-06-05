-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "mrp" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "users" RENAME CONSTRAINT "User_pkey" TO "users_pkey";

-- RenameIndex
ALTER INDEX "User_email_key" RENAME TO "users_email_key";

-- RenameIndex
ALTER INDEX "User_googleId_key" RENAME TO "users_googleId_key";
