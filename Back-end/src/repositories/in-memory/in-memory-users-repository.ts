import { Prisma, User } from "@prisma/client";
import { randomUUID } from "node:crypto";
import { UserRepository } from "../users-repository";

export class InMemoryUsersRepository implements UserRepository {
  public items: User[] = [];

  async Update(userId: string, photoId: string){
    const userIndex = this.items.findIndex((item) => item.id === userId);
    
    if (userIndex === -1) {
      return null;
    }
  
    this.items[userIndex].photo = photoId;
  
    return this.items[userIndex];
  }
  async findById(id: string) {
    const user = this.items.find((item) => item.id === id);

    if (!user) {
      return null;
    }
    return user;
  }

  async findByEmail(email: string) {
    const user = this.items.find((item) => item.email === email);

    if (!user) {
      return null;
    }
    return user;
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user: User = {
      id: randomUUID(),
      name: data?.name!,
      email: data.email!,
      password: data.password!,
      created_at: new Date(),
      photo: '',
      updated_at: new Date(),
    };
  
    this.items.push(user);
  
    return user;
  }
}
