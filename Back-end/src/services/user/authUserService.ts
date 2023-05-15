import { User } from "@prisma/client";
import { UserRepository } from "../../repositories/users-repository";
import { InvalidCredentialsError } from "../errors/Invalid-Credentials-Error";
import { compare } from "bcryptjs";

interface AuthenticateUserServiceRequest {
  email: string;
  password: string;
}

interface AuthenticateServiceResponse {
  user: User;
}

export class AuthenticateUserService {
  constructor(private usersRepository: UserRepository) {}
  async execute({
    email,
    password,
  }: AuthenticateUserServiceRequest): Promise<AuthenticateServiceResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new InvalidCredentialsError();
    }

    const doesPasswordMatch = await compare(password, user.password);

    if (!doesPasswordMatch) {
      throw new InvalidCredentialsError();
    }

    return {
      user,
    };
  }
}
