import { hash } from "bcryptjs";
import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryUsersRepository } from "../../repositories/in-memory/in-memory-users-repository";
import { ResourceNotFound } from "../errors/resource-not-found-error";
import { GeTUserProfileService } from "./getUserProfile";

let usersRepository: InMemoryUsersRepository;
let sut: GeTUserProfileService;

describe("Get User profile service", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository();
    sut = new GeTUserProfileService(usersRepository);
  });

  it("Should be able to get user profile", async () => {
    const createUser = await usersRepository.create({
      email: "teste@gmail.com",
      password: await hash("123123", 6),
      name: "test",
    });

    const { user } = await sut.execute({
      userId: createUser.id,
    });

    expect(user.id).toEqual(expect.any(String));
    expect(user.name).toEqual("test");
  });

  it("should not be able to Get User Profile with wrong id", async () => {
    await expect(() =>
      sut.execute({
        userId: "non-existing-id",
      })
    ).rejects.toBeInstanceOf(ResourceNotFound);
  });
});
