import { verifyJWT } from "@/middlewares/isAuthenticated";
import { FastifyInstance } from "fastify";
import { CreateMealController } from "./createMealController";
import { GetAllMealsController } from "./getAllMealsController";

export async function MealsRoutes(app: FastifyInstance) {
  app.addHook("onRequest", verifyJWT);

  app.post("/meal", new CreateMealController().handle);
  app.get("/meal", new GetAllMealsController().handle);
}
