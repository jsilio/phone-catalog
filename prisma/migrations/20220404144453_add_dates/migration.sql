/*
  Warnings:

  - Added the required column `updatedAt` to the `Phone` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Phone" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "screen" TEXT NOT NULL,
    "processor" TEXT NOT NULL,
    "ram" INTEGER NOT NULL,
    "camera" TEXT NOT NULL,
    "battery" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Phone" ("battery", "camera", "color", "id", "imageUrl", "manufacturer", "name", "price", "processor", "ram", "screen") SELECT "battery", "camera", "color", "id", "imageUrl", "manufacturer", "name", "price", "processor", "ram", "screen" FROM "Phone";
DROP TABLE "Phone";
ALTER TABLE "new_Phone" RENAME TO "Phone";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
