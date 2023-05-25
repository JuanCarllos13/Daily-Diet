import { PrismaMealsRepository } from "@/repositories/prisma/prisma-meals-repository";
import { removeMealService } from '../../meals/removeMealService';

export function makeRemoveMealService(){
  const prismaMealRepository = new PrismaMealsRepository()
  const RemoveMealService = new removeMealService(prismaMealRepository)
  return RemoveMealService 
}