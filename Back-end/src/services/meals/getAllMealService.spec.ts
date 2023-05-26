import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryMealsRepository } from "../../repositories/in-memory/in-memory-meals-repository";
import { GetAllMeals } from "./getAllMealService";

let mealRepository: InMemoryMealsRepository;
let sut: GetAllMeals;

describe("Get All Meals", () => {
  beforeEach(async () => {
    mealRepository = new InMemoryMealsRepository();
    sut = new GetAllMeals(mealRepository);
  });

  it("should to register", async () => {
    await mealRepository.create({
      date: "12/12/1232",
      description: "Comida",
      diet: true,
      hours: "12:43",
      name: "Juan",
      user_id: "user-1",
    });

    await mealRepository.create({
      date: "12/12/1232",
      description: "Comida",
      diet: true,
      hours: "12:43",
      name: "Juan",
      user_id: "user-1",
    });

    
    const { meals } = await sut.execute({
      user_id: "user-1",
    });

    // expect(meals).toHaveLength(2);
  });
});
