import prisma from "../config/prisma.js";

import { generateLifeSummary }
from "./life.service.js";

export const refreshLifeSummary =
async (userId) => {

  const memories =
    await prisma.memory.findMany({
      where: {
        userId
      }
    });

  if (!memories.length) {
    return;
  }

  const result =
    await generateLifeSummary(
      memories
    );

  await prisma.lifeSummary.upsert({

    where: {
      userId
    },

    update: {
      summary:
        result.summary,

      themes:
        result.themes,

      topPeople:
        result.topPeople,

      topEmotions:
        result.topEmotions
    },

    create: {

      userId,

      summary:
        result.summary,

      themes:
        result.themes,

      topPeople:
        result.topPeople,

      topEmotions:
        result.topEmotions
    }
  });
};