import { prismaClient } from "@/prisma";
import { Meal, Prisma } from "@prisma/client";
import { MealsRepository } from "../meals-repository";

export class PrismaMealsRepository implements MealsRepository {
  async findByMany(userId: string) {
    const meals = await prismaClient.meal.findMany({
      where: {
        user_id: userId,
      },
    });
    return meals;
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

  async Update(userId: string, data: Prisma.MealUncheckedCreateInput) {
    const user = await prismaClient.meal.update({
      where: {
        id: userId,
      },
      data: {
        date: data.date,
        hours: data.hours,
        diet: data.diet,
        description: data.description,
        name: data.name,
      },
    });

    return user;
  }
}
