import { makeRemoveMealService } from "@/services/factories/meal/make-remove-meal-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

class removeMealController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    const removeMeal = makeRemoveMealService();
    const schemaRemove = z.object({
      meal_id: z.string(),
    });

    const { meal_id } = schemaRemove.parse(request.body);

    await removeMeal.execute({
      meal_id: meal_id,
    });

    return response.send();
  }
}

export { removeMealController };
