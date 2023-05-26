import { MealsRepository } from "@/repositories/meals-repository";

interface MealContentDTO {
  id: string;
  date: string;
  hour: string;
  name: string;
  description: string;
  diet: boolean;
}

interface MealDTO {
  title: string;
  data: MealContentDTO[];
}

interface GetAllRequest {
  user_id: string;
}

class GetAllMeals {
  constructor(private mealRepository: MealsRepository) {}

  async execute({ user_id }: GetAllRequest): Promise<{ meals: MealDTO[] }> {
    const meals = await this.mealRepository.findByMany(user_id);

    const mealDTOs: MealDTO[] = [];

    meals.forEach((meal) => {
      const existingMealDTOIndex = mealDTOs.findIndex((dto) => dto.title === meal.date);

      if (existingMealDTOIndex !== -1) {
        mealDTOs[existingMealDTOIndex].data.push({
          id: meal.id,
          date: meal.date,
          hour: meal.hours,
          name: meal.name,
          description: meal.description,
          diet: meal.diet,
        });
      } else {
        const newMealDTO: MealDTO = {
          title: meal.date,
          data: [
            {
              id: meal.id,
              date: meal.date,
              hour: meal.hours,
              name: meal.name,
              description: meal.description,
              diet: meal.diet,
            },
          ],
        };

        mealDTOs.push(newMealDTO);
      }
    });

    return { meals: mealDTOs };
  }
}

export { GetAllMeals };
