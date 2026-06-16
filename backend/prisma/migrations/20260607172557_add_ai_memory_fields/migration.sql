-- AlterTable
ALTER TABLE "Memory" ADD COLUMN     "emotions" TEXT[],
ADD COLUMN     "events" TEXT[],
ADD COLUMN     "importanceScore" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "people" TEXT[],
ADD COLUMN     "places" TEXT[];
