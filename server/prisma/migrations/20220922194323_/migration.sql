-- DropForeignKey
ALTER TABLE "cusotmerMails" DROP CONSTRAINT "cusotmerMails_contactId_fkey";

-- DropForeignKey
ALTER TABLE "cusotmerMails" DROP CONSTRAINT "cusotmerMails_customerId_fkey";

-- DropForeignKey
ALTER TABLE "cusotmerPhones" DROP CONSTRAINT "cusotmerPhones_contactId_fkey";

-- DropForeignKey
ALTER TABLE "cusotmerPhones" DROP CONSTRAINT "cusotmerPhones_customerId_fkey";

-- AlterTable
ALTER TABLE "cusotmerMails" ALTER COLUMN "customerId" DROP NOT NULL,
ALTER COLUMN "contactId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "cusotmerPhones" ALTER COLUMN "customerId" DROP NOT NULL,
ALTER COLUMN "contactId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "cusotmerMails" ADD CONSTRAINT "cusotmerMails_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cusotmerMails" ADD CONSTRAINT "cusotmerMails_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cusotmerPhones" ADD CONSTRAINT "cusotmerPhones_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cusotmerPhones" ADD CONSTRAINT "cusotmerPhones_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
