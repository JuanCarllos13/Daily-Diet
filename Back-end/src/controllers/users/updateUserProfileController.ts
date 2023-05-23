import { makeUpdateProfileUserService } from "@/services/factories/make-update-user-profile-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

class UpdateUserProfileController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    const updateProfile = makeUpdateProfileUserService();
    const updateFileProps = z.object({
      filename: z.string(),
      originalname: z.string(),
    });

    const { filename, originalname } = updateFileProps.parse(request.file);
    console.log(filename)

    if (!filename || !originalname) {
      throw new Error("error upload file");
    } else {
      const user = await updateProfile.execute({
        userId: request.user.sub,
        photo: filename,
      });

      const fullUrl = request.protocol.concat("://").concat(request.hostname);
      const fileUrl = new URL(`/user/update/${filename}`, fullUrl).toString();

      return response.status(200).send({
        ...user,
        password: undefined,
        photo: fileUrl,
      });
    }
  }
}

export { UpdateUserProfileController };

