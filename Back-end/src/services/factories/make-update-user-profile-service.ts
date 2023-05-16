import { PrismaUserRepository } from "@/repositories/prisma/prisma-users-repository";
import { UpdateUserProfileService } from "../user/updateUserProfileService";

export function makeUpdateProfileUserService() {
  const prismaUsersRepository = new PrismaUserRepository();
  const updateProfileService = new UpdateUserProfileService(prismaUsersRepository);
  return updateProfileService;
}
