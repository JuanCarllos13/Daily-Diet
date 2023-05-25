import { PrismaMealsRepository } from "@/repositories/prisma/prisma-meals-repository";
import { updateMealService } from '../../meals/updateMealService';

export function makeUpdateMealService(){
  const prismaMealRepository = new PrismaMealsRepository()
  const UpdateMealService = new updateMealService(prismaMealRepository)
  return UpdateMealService 
}