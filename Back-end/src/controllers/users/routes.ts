import { FastifyInstance } from "fastify";
import { AuthUserController } from "./authController";
import { CreateUserController } from "./createUserController";
import { GetUserProfileController } from "./getUserProfileController";
import { UpdateUserProfileController } from "./updateUserProfileController";

import { verifyJWT } from "../../middlewares/isAuthenticated";
import { filedUpload } from '../../upload/upload';
import { refresh } from "./refresh";

export async function usersRoutes(app: FastifyInstance) {
  app.post("/users", new CreateUserController().handle);
  app.post("/session", new AuthUserController().handle);

  app.patch("/token/refresh", refresh);

  app.get(
    "/me",
    { onRequest: [verifyJWT] },
    new GetUserProfileController().handle
  );

  app.put(
    "/user/update",
    { onRequest: [verifyJWT], preHandler: filedUpload},
    new UpdateUserProfileController().handle
  );
}
