import { makeGetUserProfileService } from "@/services/factories/make-get-user-profile-service";
import { FastifyReply, FastifyRequest } from "fastify";

class GetUserProfileController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    const getUserProfile = makeGetUserProfileService();

    console.log(request.user.sub);

    const { user } = await getUserProfile.execute({
      userId: request.user.sub,
    });

    const fullUrl = request.protocol.concat("://").concat(request.hostname);
    const fileUrl = new URL(`/user/update/${user.photo}`, fullUrl).toString();

    return response.status(200).send({
      user: {
        ...user,
        password: undefined,
        photo: user.photo ? fileUrl : null,
      },
    });
  }
}

export { GetUserProfileController };

