import { Prisma } from "@prisma/client";
import { UserRepository } from "../users-repository";
import { prismaClient } from "@/prisma";

export class PrismaUserRepository implements UserRepository {
  async findById(id: string) {
    const user = await prismaClient.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  async findByEmail(email: string) {
    const user = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async create(data: Prisma.UserCreateInput) {
    const user = await prismaClient.user.create({
      data,
    });

    return user;
  }
}
