import fastifyJwt from "@fastify/jwt";
import fastifyCoolie from "@fastify/cookie";
import fastify from "fastify";
import { ZodError } from "zod";
import { env } from "@/env";
import { usersRoutes } from "./controllers/users/routes";

export const app = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: "10m ",
  },
});

app.register(fastifyCoolie);
app.register(usersRoutes);

app.setErrorHandler((error, _request, response) => {
  if (error instanceof ZodError) {
    return response
      .status(400)
      .send({ message: "Validation error.", issues: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    console.log(error);
  } else {
    console.log('Erro ao servido')
  }

  return response.status(500).send({ message: "Internal server error" });
});
