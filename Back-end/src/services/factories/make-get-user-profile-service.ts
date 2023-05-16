import { PrismaUserRepository } from "../../repositories/prisma/prisma-users-repository";
import { GeTUserProfileService } from "../user/getUserProfile";

export function makeGetUserProfileService() {
  const prismaUsersRepository = new PrismaUserRepository();
  const getUserProfileService = new GeTUserProfileService(
    prismaUsersRepository
  );
  return getUserProfileService;
}
