import { PrismaMealsRepository } from "@/repositories/prisma/prisma-meals-repository";
import { GetAllMeals } from '../../meals/getAllMealService';

export function makeGetAllMealsService(){
  const prismaMealRepository = new PrismaMealsRepository()
  const GetAllMealsService = new GetAllMeals(prismaMealRepository)
  return GetAllMealsService 
}