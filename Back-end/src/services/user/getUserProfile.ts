import { User } from "@prisma/client";
import { UserRepository } from "../../repositories/users-repository";
import { ResourceNotFound } from "../errors/resource-not-found-error";

interface GetUserProfileServiceRequest {
  userId: string;
}

interface GetUserProfileServiceResponse {
  user: User;
}

class GeTUserProfileService {
  constructor(private usersRepository: UserRepository) {}

  async execute({
    userId,
  }: GetUserProfileServiceRequest): Promise<GetUserProfileServiceResponse> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new ResourceNotFound();
    }

    return { user };
  }
}

export { GeTUserProfileService };

