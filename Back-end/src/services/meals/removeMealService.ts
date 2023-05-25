import { MealsRepository } from "@/repositories/meals-repository";

interface PropsRequest {
  meal_id: string;
}

class removeMealService {
  constructor(private MealRepository: MealsRepository) {}
  async execute({ meal_id }: PropsRequest) {
    const meal = await this.MealRepository.findById(meal_id);

    if (!meal) {
      throw new Error();
    }

    await this.MealRepository.remove(meal_id);
  }
}

export { removeMealService };
