-- CreateTable
CREATE TABLE "workout" (
    "id" SERIAL NOT NULL,
    "exercises" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "personalId" INTEGER NOT NULL,
    "memberId" INTEGER NOT NULL,

    CONSTRAINT "workout_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "workout" ADD CONSTRAINT "workout_personalId_fkey" FOREIGN KEY ("personalId") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workout" ADD CONSTRAINT "workout_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
