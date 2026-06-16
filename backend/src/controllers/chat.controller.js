import prisma from "../config/prisma.js";

import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { getRelevantMemories } from "../utils/getRelevantMemories.js";

import {
  askMemoryAssistant
} from "../services/chat.service.js";

export const askQuestion = asyncHandler(async (req, res) => {

  const { question } = req.body;

  if (!question?.trim()) {
    throw new ApiError(
      400,
      "Question is required"
    );
  }

  const rawMemories =
    await prisma.memory.findMany({
      where: {
        userId: req.user.id
      },
      include: {
        story: true
      },
      orderBy: {
        createdAt: "desc"
      }
    });

  if (!rawMemories.length) {

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          answer:
            "You don't have any memories yet."
        },
        "No memories found"
      )
    );

  }

  const selectedMemories =
    getRelevantMemories(
      rawMemories,
      question
    );

  const memories =
    selectedMemories.map(memory => ({

      id: memory.id,

      title: memory.title,

      summary: memory.summary,

      people: memory.people,

      places: memory.places,

      events: memory.events,

      emotions: memory.emotions,

      memoryDate:
        memory.memoryDate,

      tags:
        memory.tags,

      story:
        memory.story?.content?.slice(
          0,
          1000
        ) || ""

    }));

  let result;

  try {

    result =
      await askMemoryAssistant(
        question,
        memories
      );

  } catch (error) {

    console.error(
      "CHAT ERROR:",
      error.message
    );

    result = {
      answer:
        "Memory assistant is temporarily unavailable. Please try again later."
    };

  }

  return res.status(200).json(
    new ApiResponse(
      200,
      result,
      "Answer generated successfully"
    )
  );

});

export const createChatSession = asyncHandler(async (req, res) => {

    const session =
    await prisma.chatSession.create({
      data: {
        userId: req.user.id
      }
    });


  return res.status(201).json(
    new ApiResponse(
      201,
      session,
      "Chat session created"
    )
  );

});

export const getChatSessions = asyncHandler(async (req, res) => {

const sessions =
await prisma.chatSession.findMany({

  where:{
    userId:req.user.id
  },

  orderBy:[
    {
      isPinned:"desc"
    },
    {
      updatedAt:"desc"
    }
  ]

});

  return res.status(200).json(
    new ApiResponse(
      200,
      sessions,
      "Chat sessions fetched"
    )
  );

});

export const getMessages = asyncHandler(async (req, res) => {

  const session =
    await prisma.chatSession.findUnique({
      where: {
        id: req.params.sessionId
      },
      include: {
        messages: {
          orderBy: {
            createdAt: "asc"
          }
        }
      }
    });

  if (!session) {
    throw new ApiError(
      404,
      "Session not found"
    );
  }

  if (session.userId !== req.user.id) {
    throw new ApiError(
      403,
      "Unauthorized action"
    );
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      session.messages,
      "Messages fetched"
    )
  );

});


export const sendMessage = asyncHandler(async (req, res) => {

  const { message } = req.body;

  const { sessionId } = req.params;

  if (!message?.trim()) {
    throw new ApiError(
      400,
      "Message is required"
    );
  }

  const session =
    await prisma.chatSession.findUnique({
      where: {
        id: sessionId
      },
      include: {
        messages: {
          orderBy: {
            createdAt: "asc"
          }
        }
      }
    });

  if (!session) {
    throw new ApiError(
      404,
      "Session not found"
    );
  }

  if (session.userId !== req.user.id) {
    throw new ApiError(
      403,
      "Unauthorized action"
    );
  }

  if (session.title === "New Chat") {

    await prisma.chatSession.update({
      where: {
        id: sessionId
      },
      data: {
        title:
          message
            .trim()
            .slice(0, 40)
      }
    });

  }

  await prisma.chatMessage.create({
    data: {
      role: "user",
      content: message,
      sessionId
    }
  });

  const rawMemories =
    await prisma.memory.findMany({
      where: {
        userId: req.user.id
      },
      include: {
        story: true
      },
      orderBy: {
        createdAt: "desc"
      }
    });

  const selectedMemories =
    getRelevantMemories(
      rawMemories,
      message
    );

  const memories =
    selectedMemories.map(memory => ({

      title:
        memory.title,

      summary:
        memory.summary,

      people:
        memory.people,

      places:
        memory.places,

      events:
        memory.events,

      emotions:
        memory.emotions,

      tags:
        memory.tags,

      memoryDate:
        memory.memoryDate,

      story:
        memory.story?.content?.slice(
          0,
          1000
        ) || ""

    }));

  const conversation =
    session.messages
      .slice(-10)
      .map(msg => ({
        role: msg.role,
        content: msg.content
      }));

  conversation.push({
    role: "user",
    content: message
  });

  let result;

  try {

    result =
      await askMemoryAssistant(
        message,
        memories,
        conversation
      );

  } catch (error) {

    console.error(
      "CHAT ERROR:",
      error
    );

    result = {
      answer:
        "Memory assistant is temporarily unavailable."
    };

  }

  await prisma.chatMessage.create({
    data: {
      role: "assistant",
      content: result.answer,
      sessionId
    }
  });

  await prisma.chatSession.update({
    where: {
      id: sessionId
    },
    data: {
      updatedAt:
        new Date()
    }
  });

  return res.status(200).json(
    new ApiResponse(
      200,
      result,
      "Response generated"
    )
  );

});


export const renameChatSession = asyncHandler(async (req, res) => {

  const { id } = req.params;

  const { title } = req.body;

  if (!title?.trim()) {
    throw new ApiError(
      400,
      "Title is required"
    );
  }

  const session =
    await prisma.chatSession.findFirst({
      where: {
        id,
        userId: req.user.id
      }
    });

  if (!session) {
    throw new ApiError(
      404,
      "Chat not found"
    );
  }

  const updated =
    await prisma.chatSession.update({
      where: { id },
      data: {
        title: title.trim()
      }
    });

  return res.status(200).json(
    new ApiResponse(
      200,
      updated,
      "Chat renamed successfully"
    )
  );
});


export const deleteChatSession = asyncHandler(async (req, res) => {

  const { id } = req.params;

  const session =
    await prisma.chatSession.findFirst({
      where: {
        id,
        userId: req.user.id
      }
    });

  if (!session) {
    throw new ApiError(
      404,
      "Chat not found"
    );
  }

  await prisma.chatSession.delete({
    where: { 
      id: session.id 
    }
  });

  return res.status(200).json(
    new ApiResponse(
      200,
      {},
      "Chat deleted successfully"
    )
  );
});

export const deleteAllChats = asyncHandler(async (req, res) => {

  await prisma.chatSession.deleteMany({
    where: {
      userId: req.user.id
    }
  });

  return res.status(200).json(
    new ApiResponse(
      200,
      {},
      "All chats deleted successfully"
    )
  );
});

export const togglePinChat = asyncHandler(async (req, res) => {

  const { id } = req.params;

  const session =
    await prisma.chatSession.findFirst({
      where: {
        id,
        userId: req.user.id
      }
    });

  if (!session) {
    throw new ApiError(
      404,
      "Chat not found"
    );
  }

  const updated =
    await prisma.chatSession.update({
      where: {
        id
      },
      data: {
        isPinned:
          !session.isPinned
      }
    });

  return res.status(200).json(
    new ApiResponse(
      200,
      updated,
      updated.isPinned
        ? "Chat pinned"
        : "Chat unpinned"
    )
  );
});