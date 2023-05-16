import { Prisma } from "@prisma/client";
import { prismaClient } from "../../prisma";
import { UserRepository } from "../users-repository";

export class PrismaUserRepository implements UserRepository {
  async Update(userId: string, photoId: string) {
    const user = await prismaClient.user.update({
      where: {
        id: userId,
      },
      data: {
        photo: photoId,
      },
    });

    return user;
  }

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
