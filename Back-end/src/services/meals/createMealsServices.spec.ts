import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryMealsRepository } from "../../repositories/in-memory/in-memory-meals-repository";
import { CreateMealService } from "./createMealServices";

let mealRepository: InMemoryMealsRepository;
let sut: CreateMealService;

describe("Register Use Case", () => {
  beforeEach(async () => {
    mealRepository = new InMemoryMealsRepository();
    sut = new CreateMealService(mealRepository);
  });

  it("should to register", async () => {
    const { Meal } = await sut.execute({
      date: "12/12/1232",
      description: "Comida",
      diet: true,
      hours: "12:43",
      name: "Juan",
      userId: "user-1",
    });

    expect(Meal.id).toEqual(expect.any(String));
  });
});
