-- CreateTable
CREATE TABLE "Phone" (
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
    "battery" TEXT NOT NULL
);
