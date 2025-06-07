/*
  Warnings:

  - Added the required column `gasBill` to the `Bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `milkFatBill` to the `Bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `milkWithoutFatBill` to the `Bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rabdiBill` to the `Bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalMilkFat` to the `Bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalMilkWithoutFat` to the `Bill` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "totalRabdi" REAL NOT NULL,
    "rabdiBill" REAL NOT NULL,
    "totalMilk" REAL NOT NULL,
    "totalMilkFat" REAL NOT NULL,
    "totalMilkWithoutFat" REAL NOT NULL,
    "milkFatBill" REAL NOT NULL,
    "milkWithoutFatBill" REAL NOT NULL,
    "totalGas" REAL NOT NULL,
    "gasBill" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Bill" ("createdAt", "endDate", "id", "startDate", "totalGas", "totalMilk", "totalRabdi") SELECT "createdAt", "endDate", "id", "startDate", "totalGas", "totalMilk", "totalRabdi" FROM "Bill";
DROP TABLE "Bill";
ALTER TABLE "new_Bill" RENAME TO "Bill";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
