import { UserRepository } from "@/repositories/users-repository";
import { User } from "@prisma/client";
import { ResourceNotFound } from "../errors/resource-not-found-error";

interface UserRequest {
  userId: string;
  photo: string | null;
}

class UpdateUserProfileService {
  constructor(private usersRepository: UserRepository) {}

  async execute({
    userId,
    photo,
  }: UserRequest): Promise<User | null | undefined> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new ResourceNotFound();
    }

    const updateUser = await this.usersRepository.Update(userId, photo);

    return updateUser;
  }
}

export { UpdateUserProfileService };

