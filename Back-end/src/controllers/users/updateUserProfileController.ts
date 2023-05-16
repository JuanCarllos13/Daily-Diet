import { makeUpdateProfileUserService } from "@/services/factories/make-update-user-profile-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

class UpdateUserProfileController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    const updateProfile = makeUpdateProfileUserService();

    const updateUserBodySchema = z.object({
      photo: z.string(),
    });

    const { photo } = updateUserBodySchema.parse(request.body);

    const data = await updateProfile.execute({
      userId: request.user.sign.sub,
      photo,
    });

    return response.status(200).send({
      user: {
        ...data,
        password: undefined,
      },
    });
  }
}

export { UpdateUserProfileController };

