import { User } from "@prisma/client";
import { prismaClient } from "../../prisma";
import { UserRepository } from "@/repositories/users-repository";
import { hash } from "bcryptjs";
import { UserAlreadyExistsError } from "../errors/user-already-exists-error";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  constructor(private userRepository: UserRepository) {}
  async execute({ name, email, password }: UserRequest) {
    const userWithSameEmail = await this.userRepository.findByEmail(email);

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError();
    }
    const passwordHash = await hash(password, 6);

    const user = await this.userRepository.create({
      email,
      password: passwordHash,
      name,
    });

    return { user };
  }
}

export { CreateUserService };
