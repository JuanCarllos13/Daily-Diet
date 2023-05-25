import { MealsRepository } from "@/repositories/meals-repository";

interface StatisticMealRequest {
  user_id: string;
}

class StatisticMealService {
  constructor(private MealRepository: MealsRepository) {}

  async execute({ user_id }: StatisticMealRequest) {
    const meals = await this.MealRepository.findByMany(user_id);

    const statistics = {
      percentage: 0,
      totalMeals: meals.length,
      inDiet: 0,
      outDiet: 0,
      bestSequence: 0,
    };

    let currentSequence = 0;
    let maxSequence = 0;

    meals.forEach((meal) => {
      if (meal.diet) {
        statistics.inDiet++;
        currentSequence++;
        maxSequence = Math.max(maxSequence, currentSequence);
      } else {
        statistics.outDiet++;
        currentSequence = 0;
      }
    });

    statistics.bestSequence = maxSequence;

    if (statistics.totalMeals > 0) {
      statistics.percentage = Math.round(
        (statistics.inDiet / statistics.totalMeals) * 100 * 100
      ) / 100;
    }

    return statistics;
  }
}

export { StatisticMealService };
