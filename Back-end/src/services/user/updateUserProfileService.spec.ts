import { hash } from "bcryptjs";
import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryUsersRepository } from "../../repositories/in-memory/in-memory-users-repository";
import { ResourceNotFound } from "../errors/resource-not-found-error";
import { UpdateUserProfileService } from "./updateUserProfileService";

let usersRepository: InMemoryUsersRepository;
let sut: UpdateUserProfileService;

describe("Get User profile service", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository();
    sut = new UpdateUserProfileService(usersRepository);
  });

  it("Should be able to update user profile", async () => {
    const createUser = await usersRepository.create({
      email: "teste@gmail.com",
      password: await hash("123123", 6),
      name: "test",
    });

    const response = await sut.execute({
      userId: createUser.id,
      photo: "tesaklklajdçjlsçal",
    });

    expect(response?.photo).toEqual("tesaklklajdçjlsçal");
  });

  it("should not be able to Get User Profile with wrong id", async () => {
    await expect(() =>
      sut.execute({
        userId: "non-existing-id",
        photo: 'hsdjkhkashdkal'
      })
    ).rejects.toThrow(ResourceNotFound);
  });
});
