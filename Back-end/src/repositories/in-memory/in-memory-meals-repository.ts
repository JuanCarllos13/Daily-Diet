import { Meal, Prisma } from "@prisma/client";
import { randomUUID } from "node:crypto";
import { MealsRepository } from "../meals-repository";

export class InMemoryMealsRepository implements MealsRepository {
  public items: Meal[] = [];

  async findById(id: string) {
    const meals = this.items.find((item) => item.id === id);

    if (!meals) {
      return null;
    }
    return meals;
  }

  async findByMany(userId: string) {
    const meals = this.items.filter((item) => item.user_id === userId);

    return meals;
  }

  Update(userId: string, photoId: string | null): Promise<Meal | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: Prisma.MealUncheckedCreateInput): Promise<Meal> {
    const meal: Meal = {
      id: data.id ?? randomUUID(),
      date: data.date,
      description: data.description,
      diet: data.diet,
      hours: data.hours,
      name: data.name,
      created_at: new Date(),
      updated_at: new Date(),
      user_id: data.user_id,
    };

    this.items.push(meal);

    return meal;
  }
}
