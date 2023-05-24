import { ResourceNotFound } from "@/services/errors/resource-not-found-error";
import { makeCreateMealService } from "@/services/factories/meal/make-create-meals-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

class CreateMealController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    const createMealBodySchema = z.object({
      name: z.string(),
      description: z.string(),
      date: z.string(),
      hours: z.string(),
      diet: z.boolean(),
    });

    const { date, description, diet, hours, name } = createMealBodySchema.parse(
      request.body
    );
    try {
      const createUserService = makeCreateMealService();

      await createUserService.execute({
        date,
        description,
        diet,
        hours,
        name,
        userId: request.user.sub,
      });
    } catch (error) {
      if (error instanceof ResourceNotFound) {
        return response.status(409).send({ message: error.message });
      }
      throw error;
    }
  }
}

export { CreateMealController };

