import { UserAlreadyExistsError } from "@/services/errors/user-already-exists-error";
import { makeCreateUserService } from "@/services/factories/user/make-create-user-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

class CreateUserController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    const createUserBodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string().min(6),
    });

    const { email, name, password } = createUserBodySchema.parse(request.body);
    try {
      const createUserService = makeCreateUserService();

      await createUserService.execute({ email, name, password });
    } catch (error) {
      if (error instanceof UserAlreadyExistsError) {
        return response.status(409).send({ message: error.message });
      }
      throw error;
    }
  }
}

export { CreateUserController };

