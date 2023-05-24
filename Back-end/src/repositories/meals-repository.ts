import { Meal, Prisma } from "@prisma/client";

export interface MealsRepository {
  findById(id: string): Promise<Meal | null>;
  findByMany(userId: string): Promise<Meal[]>;
  create(data: Prisma.MealUncheckedCreateInput): Promise<Meal>;
  Update(userId: string, photoId: string | null): Promise<Meal | null>
}