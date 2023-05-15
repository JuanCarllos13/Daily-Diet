import { FastifyInstance } from "fastify";
import {CreateUserController} from './createUserController'
import {AuthUserController} from './authController'

export async function usersRoutes(app: FastifyInstance) {
  app.post("/users", new CreateUserController().handle)
  app.post("/session", new AuthUserController().handle)
}