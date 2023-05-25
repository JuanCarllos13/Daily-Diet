import { verifyJWT } from "@/middlewares/isAuthenticated";
import { FastifyInstance } from "fastify";
import { CreateMealController } from "./createMealController";
import { GetAllMealsController } from "./getAllMealsController";
import { updateMealController } from "./updateMealController";
import { removeMealController } from "./removeMealController";
import { statisticMealController } from "./statisticMealsController";

export async function MealsRoutes(app: FastifyInstance) {
  app.addHook("onRequest", verifyJWT);

  app.post("/meal", new CreateMealController().handle);
  app.get("/meal", new GetAllMealsController().handle);
  app.patch("/meal", new updateMealController().handle);
  app.delete("/meal", new removeMealController().handle);
  app.get("/statistic", new statisticMealController().handle);
}
