-- CreateTable
CREATE TABLE "Squad" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "productManager" TEXT NOT NULL,
    "techManager" TEXT NOT NULL,
    "initialTime" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "members" TEXT[],
    "CreatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Squad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tutorial" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "urlVideo" TEXT NOT NULL,
    "progress" INTEGER NOT NULL,
    "titleVideo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "outside_url" TEXT NOT NULL,
    "image_title" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "tutorial_tipe" INTEGER NOT NULL,
    "squadId" TEXT,

    CONSTRAINT "Tutorial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "options" TEXT[],
    "answer" TEXT NOT NULL,
    "image_title" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "baddge" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "tutorialId" TEXT,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Squad_name_key" ON "Squad"("name");

-- AddForeignKey
ALTER TABLE "Tutorial" ADD CONSTRAINT "Tutorial_squadId_fkey" FOREIGN KEY ("squadId") REFERENCES "Squad"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_tutorialId_fkey" FOREIGN KEY ("tutorialId") REFERENCES "Tutorial"("id") ON DELETE SET NULL ON UPDATE CASCADE;
