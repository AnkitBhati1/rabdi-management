-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Milk" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clerkUserId" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "milkType" TEXT NOT NULL,
    "quantity" REAL NOT NULL,
    "amountDeposited" REAL NOT NULL DEFAULT 0.0,
    "vendorId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Milk_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Milk" ("clerkUserId", "createdAt", "date", "id", "milkType", "quantity", "updatedAt", "vendorId") SELECT "clerkUserId", "createdAt", "date", "id", "milkType", "quantity", "updatedAt", "vendorId" FROM "Milk";
DROP TABLE "Milk";
ALTER TABLE "new_Milk" RENAME TO "Milk";
CREATE TABLE "new_Rabdi" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clerkUserId" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "quantity" REAL NOT NULL,
    "amountDeposited" REAL NOT NULL DEFAULT 0.0,
    "vendorId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Rabdi_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Rabdi" ("clerkUserId", "createdAt", "date", "id", "quantity", "updatedAt", "vendorId") SELECT "clerkUserId", "createdAt", "date", "id", "quantity", "updatedAt", "vendorId" FROM "Rabdi";
DROP TABLE "Rabdi";
ALTER TABLE "new_Rabdi" RENAME TO "Rabdi";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
