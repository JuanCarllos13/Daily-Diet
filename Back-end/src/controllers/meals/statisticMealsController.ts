import { makeSatisticMealService } from "@/services/factories/meal/make-statistics-meal-service"
import { FastifyReply, FastifyRequest } from "fastify";

class statisticMealController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    const statisticProfile = makeSatisticMealService();

    const statistic = await statisticProfile.execute({
      user_id: request.user.sub
    });

    return response.status(200).send(statistic);
  }
}

export { statisticMealController };
