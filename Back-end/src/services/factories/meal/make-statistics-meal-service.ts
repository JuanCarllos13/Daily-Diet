import { PrismaMealsRepository } from "@/repositories/prisma/prisma-meals-repository";
import { StatisticMealService } from '../../meals/mealStatisticsService';

export function makeSatisticMealService(){
  const prismaMealRepository = new PrismaMealsRepository()
  const statisticMealService = new StatisticMealService(prismaMealRepository)
  return statisticMealService 
}