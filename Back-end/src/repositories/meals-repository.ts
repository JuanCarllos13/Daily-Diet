import { Meal, Prisma } from "@prisma/client";

export interface MealsRepository {
  findById(id: string): Promise<Meal | null>;
  findByMany(userId: string): Promise<Meal[]>;
  create(data: Prisma.MealUncheckedCreateInput): Promise<Meal>;
  Update(meal_Id: string, data: Prisma.MealUncheckedCreateInput): Promise<Meal | null>
}