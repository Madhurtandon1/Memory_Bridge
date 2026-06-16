import express from "express";

import {
  getLifeSummary
}
from "../controllers/life.controller.js";

import {
  verifyJWT
}
from "../middlewares/auth.middleware.js";

import { aiLimiter } from "../middlewares/rateLimit.middleware.js";

const router =
  express.Router();

router.get(
  "/summary",
  verifyJWT,
  aiLimiter,
  getLifeSummary
);

export default router;