import { InMemoryUsersRepository } from "../../repositories/in-memory/in-memory-users-repository";
import { AuthenticateUserService } from "./authUserService";
import { beforeEach, describe } from "vitest";
import { expect, it } from "vitest";
import { hash } from "bcryptjs";
import { InvalidCredentialsError } from "../errors/Invalid-Credentials-Error";

let usersRepository: InMemoryUsersRepository;
let sut: AuthenticateUserService;

describe("Authenticate User Service", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository();
    sut = new AuthenticateUserService(usersRepository);
  });

  it("should be able to authenticate", async () => {
    await usersRepository.create({
      email: "johndoe@example.com",
      name: "johndoe",
      password: await hash("123456", 6),
    });

    const { user } = await sut.execute({
      email: "johndoe@example.com",
      password: "123456",
    });

    expect(user.id).toEqual(expect.any(String));
  });

  it("should not be able to authenticate with wrong email", async () => {
    await expect(() =>
      sut.execute({
        email: "johndoe@example.com",
        password: "123456",
      })
    ).rejects.toBeInstanceOf(InvalidCredentialsError);
  })


  it("should not be able to authenticate with wrong password", async () => {
    await usersRepository.create({
      email: "johndoe@example.com",
      name: "johndoe",
      password: await hash("123456", 6),
    });

    await expect(() =>
      sut.execute({
        email: "johndoe@example.com",
        password: "123123",
      })
    ).rejects.toBeInstanceOf(InvalidCredentialsError);
  });
  
});
