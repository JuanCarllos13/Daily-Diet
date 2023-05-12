import { DietGetAll } from "./dietGetAll";
import { MealDTO, MealContentDTO } from "../../dtos/snackDTO";

export type MealsStatisticsProps = {
  percentage: number;
  totalMeals: number;
  inDiet: number;
  outDiet: number;
  bestSequence: number;
};

export async function mealsStatistics(mealDTO: MealDTO[]) {
  const stats: MealsStatisticsProps = {
    percentage: 0,
    totalMeals: 0,
    inDiet: 0,
    outDiet: 0,
    bestSequence: 0,
  };

  const meals = mealDTO.flatMap((meal) => meal.data);

  stats.totalMeals = meals.length;

  meals.forEach((meal: MealContentDTO) => {
    if (meal.diet) {
      stats.inDiet++;
      stats.bestSequence++;
    } else {
      stats.outDiet++;
      stats.bestSequence = 0;
    }
  });

  if (stats.inDiet > 0) {
    stats.percentage =
      Math.round((stats.inDiet / stats.totalMeals) * 100 * 100) / 100;
  }

  console.log(stats)

  return {stats};
}
