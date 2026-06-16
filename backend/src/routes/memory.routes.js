import express from "express";

import {
  createMemory,
  getMemories,
  getMemoryById,
  searchMemories,
  updateMemory,
  deleteMemory,
  createMemoryFromAudio,
  getTimeline,
  getInsights,
  getMemoriesByPerson,
  getMemoriesByEmotion,
  getMemoriesByEvent
} from "../controllers/memory.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";


const router = express.Router();

/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/

router.use(verifyJWT);

/*
|--------------------------------------------------------------------------
| Create Memory
|--------------------------------------------------------------------------
*/

router.post("/", createMemory);

router.post("/audio",createMemoryFromAudio);

/*
|--------------------------------------------------------------------------
| Analytics & Timeline
|--------------------------------------------------------------------------
*/

router.get("/timeline", getTimeline);

router.get("/insights", getInsights);

/*
|--------------------------------------------------------------------------
| Search & Filters
|--------------------------------------------------------------------------
*/

router.get("/search", searchMemories);

router.get("/person/:person", getMemoriesByPerson);

router.get("/emotion/:emotion", getMemoriesByEmotion);

router.get("/event/:event", getMemoriesByEvent);

/*
|--------------------------------------------------------------------------
| General Memory Operations
|--------------------------------------------------------------------------
*/

router.get("/", getMemories);

router.get("/:id", getMemoryById);

router.patch("/:id", updateMemory);

router.delete("/:id", deleteMemory);

export default router;