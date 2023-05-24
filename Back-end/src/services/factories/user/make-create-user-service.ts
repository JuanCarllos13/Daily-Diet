import { PrismaUserRepository } from "@/repositories/prisma/prisma-users-repository";
import { CreateUserService } from '../../user/createServices';

export function makeCreateUserService(){
  const prismaUsersRepository = new PrismaUserRepository()
  const createUserService = new CreateUserService(prismaUsersRepository)
  return createUserService 
}