import { randomUUID } from "crypto";
import { FastifyReply, FastifyRequest } from "fastify";
import multer from "fastify-multer";
import { extname } from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./tmp");
  },
  filename: function (req, file, cb) {
    cb(null, randomUUID() + extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

let filedUpload = upload.single("file");

const uploadFile = async (req: FastifyRequest, res: FastifyReply) => {
  console.log(req.file);
};

export { filedUpload, uploadFile, multer };

