import { makeUpdateProfileUserService } from "@/services/factories/make-update-user-profile-service";
import { FastifyReply, FastifyRequest } from "fastify";

class UpdateUserProfileController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    const updateProfile = makeUpdateProfileUserService();
    const data = await request.file();

    if (!data) {
      throw new Error("error upload file");
    } else {
      const user = await updateProfile.execute({
        userId: request.user.sign.sub,
        photo: `http://localhost:3333/product-file/${data.filename}`,
      });

      return response.status(200).send({ ...user, password: undefined });
    }
  }
}

export { UpdateUserProfileController };

