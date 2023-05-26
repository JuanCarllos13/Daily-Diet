import { makeRemoveMealService } from "@/services/factories/meal/make-remove-meal-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

class removeMealController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    const removeMeal = makeRemoveMealService();
    const schemaRemove = z.object({
      mealId: z.string(),
    });

    const { mealId } = schemaRemove.parse(request.body);

    await removeMeal.execute({
      meal_id: mealId,
    });

    return response.send();
  }
}

export { removeMealController };
