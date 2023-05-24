import { MealsRepository } from "@/repositories/meals-repository";

interface getAllRequest {
  user_id: string;
}

class GetAllMeals {
  constructor(private MealRepository: MealsRepository) {}
  async execute({ user_id }: getAllRequest) {
    const meals = await this.MealRepository.findByMany(user_id);

    return { meals };
  }
}

export { GetAllMeals };

