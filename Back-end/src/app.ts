import { env } from "@/env";
import fastifyCoolie from "@fastify/cookie";
import fastifyCors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";
import fastifyMultipart from "@fastify/multipart";
import fastifyStatic from "@fastify/static";
import fastify from "fastify";
import { resolve } from "path";
import { ZodError } from "zod";
import { MealsRoutes } from "./controllers/meals/routes";
import { usersRoutes } from "./controllers/users/routes";

export const app = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: "refreshToken",
    signed: false,
  },
  sign: {
    expiresIn: "10m ",
  },
});

app.register(fastifyStatic, {
  root: resolve(__dirname, "../tmp"),
  prefix: "/user/update",
});

app.register(fastifyMultipart);

app.register(fastifyCors, {
  origin: true,
});
app.register(fastifyCoolie);
app.register(usersRoutes);
app.register(MealsRoutes);

app.setErrorHandler((error, _request, response) => {
  if (error instanceof ZodError) {
    return response
      .status(400)
      .send({ message: "Validation error.", issues: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    console.log(error);
  } else {
    console.log("Erro ao servido");
  }

  return response.status(500).send({ message: "Internal server error" });
});
