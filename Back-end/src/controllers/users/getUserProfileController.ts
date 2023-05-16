import { makeGetUserProfileService } from "@/services/factories/make-get-user-profile-service";
import { FastifyReply, FastifyRequest } from "fastify";

class GetUserProfileController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    const getUserProfile = makeGetUserProfileService();

    const { user } = await getUserProfile.execute({
      userId: request.user.sign.sub,
    });

    return response.status(200).send({
      user: {
        ...user,
        password: undefined,
      },
    });
  }
}

export { GetUserProfileController };

