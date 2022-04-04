-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Phone" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "color" TEXT,
    "price" REAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "screen" TEXT,
    "processor" TEXT,
    "ram" INTEGER,
    "camera" TEXT,
    "battery" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Phone" ("battery", "camera", "color", "createdAt", "id", "imageUrl", "manufacturer", "name", "price", "processor", "ram", "screen", "updatedAt") SELECT "battery", "camera", "color", "createdAt", "id", "imageUrl", "manufacturer", "name", "price", "processor", "ram", "screen", "updatedAt" FROM "Phone";
DROP TABLE "Phone";
ALTER TABLE "new_Phone" RENAME TO "Phone";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
