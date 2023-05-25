import { makeUpdateMealService } from "@/services/factories/meal/make-update-meal-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

class updateMealController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    const updateProfile = makeUpdateMealService();
    const updateFileProps = z.object({
      name: z.string(),
      description: z.string(),
      hours: z.string(),
      diet: z.boolean(),
      date: z.string(),
      meal_id: z.string(),
    });

    const { date, description, diet, hours, name, meal_id } =
      updateFileProps.parse(request.body);

    const meal = await updateProfile.execute({
      meal_id,
      data: {
        date,
        description,
        diet,
        hours,
        name,
        user_id: request.user.sub,
      },
    });

    return response.status(200).send(meal);
  }
}

export { updateMealController };
