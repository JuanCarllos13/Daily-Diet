import { makeGetAllMealsService } from "@/services/factories/meal/make-get-all-meals-service";
import { FastifyReply, FastifyRequest } from "fastify";

class GetAllMealsController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    const getAllMealsService = makeGetAllMealsService();

    const meals = await getAllMealsService.execute({
      user_id: request.user.sub,
    });

    response.send({
        ...meals,
        user_id: undefined
    });
  }
}

export { GetAllMealsController };

