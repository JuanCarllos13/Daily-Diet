import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryMealsRepository } from "../../repositories/in-memory/in-memory-meals-repository";
import { removeMealService } from "./removeMealService";

let mealRepository: InMemoryMealsRepository;
let sut: removeMealService;

describe("Remove Meal", () => {
  beforeEach(async () => {
    mealRepository = new InMemoryMealsRepository();
    sut = new removeMealService(mealRepository);
  });

  it("should remove a meal from the repository", async () => {
    await mealRepository.create({
      date: "12/12/1232",
      description: "Comida",
      diet: true,
      hours: "12:43",
      name: "Juan",
      user_id: "user-1",
      id: "1",
    });

    await mealRepository.create({
      date: "12/12/1232",
      description: "Comida",
      diet: true,
      hours: "12:43",
      name: "Carlos",
      user_id: "user-1",
      id: "2",
    });

    await sut.execute({ meal_id: "2" });
    const meals = await mealRepository.findByMany("user-1");

    expect(meals).toHaveLength(1);
  });
});
