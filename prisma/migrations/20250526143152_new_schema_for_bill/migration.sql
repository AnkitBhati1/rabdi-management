-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "totalRabdi" REAL NOT NULL,
    "rabdiBill" REAL NOT NULL DEFAULT 0,
    "totalMilk" REAL NOT NULL,
    "totalMilkFat" REAL NOT NULL DEFAULT 0,
    "totalMilkWithoutFat" REAL NOT NULL DEFAULT 0,
    "milkFatBill" REAL NOT NULL DEFAULT 0,
    "milkWithoutFatBill" REAL NOT NULL DEFAULT 0,
    "totalGas" REAL NOT NULL,
    "gasBill" REAL NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Bill" ("createdAt", "endDate", "gasBill", "id", "milkFatBill", "milkWithoutFatBill", "rabdiBill", "startDate", "totalGas", "totalMilk", "totalMilkFat", "totalMilkWithoutFat", "totalRabdi") SELECT "createdAt", "endDate", "gasBill", "id", "milkFatBill", "milkWithoutFatBill", "rabdiBill", "startDate", "totalGas", "totalMilk", "totalMilkFat", "totalMilkWithoutFat", "totalRabdi" FROM "Bill";
DROP TABLE "Bill";
ALTER TABLE "new_Bill" RENAME TO "Bill";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
