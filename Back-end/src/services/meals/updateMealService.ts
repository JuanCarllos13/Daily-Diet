import { MealsRepository } from "@/repositories/meals-repository";

interface PropsRequest {
  name: string;
  description: string;
  hours: string;
  diet: boolean;
  date: string;
  user_id: string;
}

interface updateMealRequest {
  meal_id: string;
  data: PropsRequest;
}

class updateMealService {
  constructor(private MealRepository: MealsRepository) {}
  async execute({ meal_id, data }: updateMealRequest) {
    const meal = await this.MealRepository.findById(meal_id);

    if (!meal) {
      throw new Error();
    }

    const meals = await this.MealRepository.Update(meal_id, {
      date: data.date,
      description: data.description,
      diet: data.diet,
      hours: data.hours,
      name: data.name,
      user_id: data.user_id,
    });

    return meals ;
  }
}

export { updateMealService };
