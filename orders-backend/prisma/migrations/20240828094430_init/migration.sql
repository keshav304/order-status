-- CreateTable
CREATE TABLE "orderlist" (
    "id" SERIAL NOT NULL,
    "customer" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "orderlist_pkey" PRIMARY KEY ("id")
);
