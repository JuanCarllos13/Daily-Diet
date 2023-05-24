import { PrismaMealsRepository } from "@/repositories/prisma/prisma-meals-repository";
import { CreateMealService } from '../../meals/createMealServices';

export function makeCreateMealService(){
  const prismaMealRepository = new PrismaMealsRepository()
  const createMealervice = new CreateMealService(prismaMealRepository)
  return createMealervice 
}