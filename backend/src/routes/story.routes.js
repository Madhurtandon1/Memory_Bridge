import express from "express";

import { generateStory, getStory, generateAudio } from "../controllers/story.controller.js";

import {  verifyJWT } from "../middlewares/auth.middleware.js";

import { aiLimiter } from "../middlewares/rateLimit.middleware.js";

const router = express.Router();

router.get("/:id/generate", verifyJWT,aiLimiter, generateStory);

router.get("/:memoryId", verifyJWT, getStory);

router.post("/:id/audio",verifyJWT,generateAudio);

export default router;