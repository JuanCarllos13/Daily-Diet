import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryMealsRepository } from "../../repositories/in-memory/in-memory-meals-repository";
import { updateMealService } from "./updateMealService";

let mealRepository: InMemoryMealsRepository;
let sut: updateMealService;

describe("Update Meals", () => {
  beforeEach(async () => {
    mealRepository = new InMemoryMealsRepository();
    sut = new updateMealService(mealRepository);
  });

  it("should to register", async () => {
    await mealRepository.create({
      date: "12/12/1232",
      description: "Comida",
      diet: true,
      hours: "12:43",
      name: "Juan",
      user_id: "user-1",
      id: '1'
    });
    
    const { meals } = await sut.execute({
      meal_id: "1", data: {
        name: 'carlos',
        date: "",
        description: "",
        diet: true,
        hours: "",
        user_id: "user-1",
      }
    });

    expect(meals?.name).toEqual("carlos");
  });
});
