import { InvalidCredentialsError } from "@/services/errors/Invalid-Credentials-Error";
import { makeAuthUserService } from "@/services/factories/make-auth-user-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

class AuthUserController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    const authUserBodySchema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
    });

    const { email, password } = authUserBodySchema.parse(request.body);
    try {
      const authenticateService = makeAuthUserService();

      const { user } = await authenticateService.execute({ email, password });

      const token = await response.jwtSign({}, { sign: { sub: user.id } });

      const refreshToken = await response.jwtSign(
        {},
        {
          sign: {
            sub: user.id,
            expiresIn: "7d",
          },
        }
      );

      return response
        .setCookie("refreshToken", refreshToken, {
          path: "/",
          secure: true,
          sameSite: true,
          httpOnly: true,
        })
        .status(200)
        .send({ token });
    } catch (error) {
      if (error instanceof InvalidCredentialsError) {
        return response.status(409).send({ message: error.message });
      }
    }
  }
}

export { AuthUserController };

