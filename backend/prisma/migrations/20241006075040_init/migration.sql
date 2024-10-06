/*
  Warnings:

  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderTopping` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pizza` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PizzaTopping` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Restaurant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Topping` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `restaurantName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `superAdminName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_pizzaId_fkey";

-- DropForeignKey
ALTER TABLE "OrderTopping" DROP CONSTRAINT "OrderTopping_orderItemId_fkey";

-- DropForeignKey
ALTER TABLE "OrderTopping" DROP CONSTRAINT "OrderTopping_toppingId_fkey";

-- DropForeignKey
ALTER TABLE "Pizza" DROP CONSTRAINT "Pizza_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "PizzaTopping" DROP CONSTRAINT "PizzaTopping_pizzaId_fkey";

-- DropForeignKey
ALTER TABLE "PizzaTopping" DROP CONSTRAINT "PizzaTopping_toppingId_fkey";

-- DropForeignKey
ALTER TABLE "Restaurant" DROP CONSTRAINT "Restaurant_superAdminId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "phone",
ADD COLUMN     "restaurantName" TEXT NOT NULL,
ADD COLUMN     "superAdminName" TEXT NOT NULL;

-- DropTable
DROP TABLE "Order";

-- DropTable
DROP TABLE "OrderItem";

-- DropTable
DROP TABLE "OrderTopping";

-- DropTable
DROP TABLE "Pizza";

-- DropTable
DROP TABLE "PizzaTopping";

-- DropTable
DROP TABLE "Restaurant";

-- DropTable
DROP TABLE "Topping";
