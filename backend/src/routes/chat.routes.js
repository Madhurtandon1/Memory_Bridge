import express from "express";

import {
    askQuestion,
  createChatSession,
  getChatSessions,
  getMessages,
  sendMessage,
  renameChatSession,
  deleteChatSession,
  deleteAllChats,
  togglePinChat
} from "../controllers/chat.controller.js";

import {
  verifyJWT
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post(
  "/ask",
  verifyJWT,
  askQuestion
);
router.post(
  "/session",
  verifyJWT,
  createChatSession
);

router.get(
  "/sessions",
  verifyJWT,
  getChatSessions
);

router.get(
  "/session/:sessionId",
  verifyJWT,
  getMessages
);

router.post(
  "/session/:sessionId/message",
  verifyJWT,
  sendMessage
);

router.patch(
  "/sessions/:id",
  verifyJWT,
  renameChatSession
);

router.delete(
  "/sessions/:id",
  verifyJWT,
  deleteChatSession
);

router.delete(
  "/sessions",
  verifyJWT,
  deleteAllChats
);

router.patch(
  "/sessions/:id/pin",
  verifyJWT,
  togglePinChat
);

export default router;

