import { prismaClient } from "@/prisma";
import { Meal, Prisma } from "@prisma/client";
import { MealsRepository } from "../meals-repository";

export class PrismaMealsRepository implements MealsRepository {
  async findByMany(userId: string){
    const meals = await prismaClient.meal.findMany({
      where: {
        user_id: userId
      }
    })
    return meals
  }

  async findById(id: string) {
    const user = await prismaClient.meal.findUnique({
      where: {
        id,
      },
    });

    return user;
  }


  async create(data: Prisma.MealUncheckedCreateInput) {
    const meals = await prismaClient.meal.create({
      data,
    });

    return meals;
  }

  Update(userId: string, photoId: string | null): Promise<Meal | null> {
    throw new Error("Method not implemented.");
  }
}
