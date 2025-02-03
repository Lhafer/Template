import express from "express";
import { S3 } from "aws-sdk";
import multer from "multer";
const upload_route = express.Router();

const upload = multer();
upload_route.use(upload);

upload_route.post("/upload", upload.single("file"), async (req, res) => {});

export default upload_route;
