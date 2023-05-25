import { Meal, Prisma } from "@prisma/client";
import { randomUUID } from "node:crypto";
import { MealsRepository } from "../meals-repository";

export class InMemoryMealsRepository implements MealsRepository {
  public items: Meal[] = [];

  async Update(meal_id: string, data: Prisma.MealUncheckedCreateInput) {
    const userIndex = this.items.findIndex((item) => item.id === meal_id);

    if (userIndex === -1) {
      return null;
    }

    this.items[userIndex].date = data.date;
    this.items[userIndex].description = data.description;
    this.items[userIndex].diet = data.diet;
    this.items[userIndex].hours = data.hours;
    this.items[userIndex].name = data.name;

    return this.items[userIndex];
  }

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
