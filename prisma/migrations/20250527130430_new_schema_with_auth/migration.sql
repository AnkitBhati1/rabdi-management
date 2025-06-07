/*
  Warnings:

  - Added the required column `clerkUserId` to the `Bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clerkUserId` to the `Gas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clerkUserId` to the `Milk` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clerkUserId` to the `Rabdi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clerkUserId` to the `Vendor` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clerkUserId" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "totalRabdi" REAL NOT NULL,
    "rabdiBill" REAL NOT NULL,
    "totalMilk" REAL NOT NULL,
    "totalMilkFat" REAL NOT NULL,
    "totalMilkWithoutFat" REAL NOT NULL,
    "milkFatBill" REAL NOT NULL,
    "milkWithoutFatBill" REAL NOT NULL,
    "totalMilkBill" REAL NOT NULL DEFAULT 0.0,
    "totalGas" REAL NOT NULL,
    "gasBill" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Bill" ("createdAt", "endDate", "gasBill", "id", "milkFatBill", "milkWithoutFatBill", "rabdiBill", "startDate", "totalGas", "totalMilk", "totalMilkBill", "totalMilkFat", "totalMilkWithoutFat", "totalRabdi") SELECT "createdAt", "endDate", "gasBill", "id", "milkFatBill", "milkWithoutFatBill", "rabdiBill", "startDate", "totalGas", "totalMilk", "totalMilkBill", "totalMilkFat", "totalMilkWithoutFat", "totalRabdi" FROM "Bill";
DROP TABLE "Bill";
ALTER TABLE "new_Bill" RENAME TO "Bill";
CREATE TABLE "new_Gas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clerkUserId" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "quantity" REAL NOT NULL,
    "rate" REAL NOT NULL,
    "vendorId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Gas_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Gas" ("createdAt", "date", "id", "quantity", "rate", "updatedAt", "vendorId") SELECT "createdAt", "date", "id", "quantity", "rate", "updatedAt", "vendorId" FROM "Gas";
DROP TABLE "Gas";
ALTER TABLE "new_Gas" RENAME TO "Gas";
CREATE TABLE "new_Milk" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clerkUserId" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "milkType" TEXT NOT NULL,
    "quantity" REAL NOT NULL,
    "vendorId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Milk_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Milk" ("createdAt", "date", "id", "milkType", "quantity", "updatedAt", "vendorId") SELECT "createdAt", "date", "id", "milkType", "quantity", "updatedAt", "vendorId" FROM "Milk";
DROP TABLE "Milk";
ALTER TABLE "new_Milk" RENAME TO "Milk";
CREATE TABLE "new_Rabdi" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clerkUserId" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "quantity" REAL NOT NULL,
    "vendorId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Rabdi_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Rabdi" ("createdAt", "date", "id", "quantity", "updatedAt", "vendorId") SELECT "createdAt", "date", "id", "quantity", "updatedAt", "vendorId" FROM "Rabdi";
DROP TABLE "Rabdi";
ALTER TABLE "new_Rabdi" RENAME TO "Rabdi";
CREATE TABLE "new_Vendor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "vendorType" TEXT NOT NULL,
    "clerkUserId" TEXT NOT NULL
);
INSERT INTO "new_Vendor" ("id", "name", "vendorType") SELECT "id", "name", "vendorType" FROM "Vendor";
DROP TABLE "Vendor";
ALTER TABLE "new_Vendor" RENAME TO "Vendor";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
