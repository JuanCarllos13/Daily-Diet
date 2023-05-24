import { PrismaUserRepository } from "@/repositories/prisma/prisma-users-repository";
import { AuthenticateUserService } from "../../user/authUserService";

export function makeAuthUserService() {
  const prismaUsersRepository = new PrismaUserRepository();
  const authUserService = new AuthenticateUserService(prismaUsersRepository);
  return authUserService;
}
