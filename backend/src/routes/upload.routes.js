import express from "express";

import {  uploadAudio } from "../controllers/upload.controller.js";

import {  verifyJWT } from "../middlewares/auth.middleware.js";

import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

router.post(  "/audio",  verifyJWT,  upload.single("audio"),  uploadAudio );


export default router;