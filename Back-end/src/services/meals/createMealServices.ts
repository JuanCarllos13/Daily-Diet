import { MealsRepository } from "@/repositories/meals-repository";

interface MealRequest {
  userId: string;
  name: string;
  description: string;
  date: string;
  hours: string;
  diet: boolean;
}

class CreateMealService {
  constructor(private MealRepository: MealsRepository) {}
  async execute({
    date,
    description,
    diet,
    hours,
    name,
    userId,
  }: MealRequest) {

    const Meal = await this.MealRepository.create({
      date,
      description,
      diet,
      hours,
      name,
      user_id: userId,
    });

    return { Meal };
  }
}

export { CreateMealService };

