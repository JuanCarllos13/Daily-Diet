import { randomUUID } from "crypto";
import multer from "multer";
import { extname, resolve } from "path";

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, "..", "..", "tmp"),
    filename: (request, file, callback) => {
      return callback(null, randomUUID() + extname(file.originalname));
    },
  }),
};
