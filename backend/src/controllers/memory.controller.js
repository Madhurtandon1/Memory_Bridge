import prisma from "../config/prisma.js";
import fs from "fs";

import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";



import { uploadToCloudinary } from "../config/cloudinary.js";
import { processMemoryWithAI } from "../services/ml.service.js";
import {refreshLifeSummary} from "../services/lifeSummary.service.js";
import {invalidateUserCache,invalidateMemoryCache} from "../utils/cache.js";
import { redisClient } from "../config/redis.js";


export const createMemory = asyncHandler(
  async (req, res) => {

    const {
      title,
      summary,
      memoryDate,
      tags,
      collectionId
    } = req.body;
    
    const collection =
    await prisma.collection.findFirst({
    where: {
        id: collectionId,
        userId: req.user.id
    }
    });

    if (!collection) {
      throw new ApiError(
        404,
        "Collection not found"
      );
    }
const memory =
  await prisma.memory.create({
    data: {
      title,
      summary,
      memoryDate:
        memoryDate
          ? new Date(memoryDate)
          : null,
      tags,
      collectionId,
      userId: req.user.id
    }
  });

await refreshLifeSummary(
  req.user.id
);

await invalidateUserCache(
  req.user.id
);


    return res.status(201).json(
      new ApiResponse(
        201,
        memory,
        "Memory created successfully"
      )
    );

});


// export const getMemories = asyncHandler(
//   async (req, res) => {

//     const page =
//       Number(req.query.page) || 1;

//     const limit =
//       Number(req.query.limit) || 10;

//     const skip =
//       (page - 1) * limit;

//     const {
//       search,
//       person,
//       emotion
//     } = req.query;

//     const filters = {
//       userId: req.user.id
//     };

//     if (search) {
//       filters.OR = [
//         {
//           title: {
//             contains: search,
//             mode: "insensitive"
//           }
//         },
//         {
//           summary: {
//             contains: search,
//             mode: "insensitive"
//           }
//         }
//       ];
//     }

//     if (person) {
//       filters.people = {
//         has: person
//       };
//     }

//     if (emotion) {
//       filters.emotions = {
//         has: emotion
//       };
//     }

//     const memories =
//       await prisma.memory.findMany({
//         where: filters,
//         skip,
//         take: limit,
//         orderBy: {
//           createdAt: "desc"
//         }
//       });

//     const total =
//       await prisma.memory.count({
//         where: filters
//       });

//     return res.status(200).json(
//       new ApiResponse(
//         200,
//         {
//           memories,
//           page,
//           totalPages:
//             Math.ceil(total / limit),
//           total
//         },
//         "Memories fetched"
//       )
//     );
// });
export const getMemories = asyncHandler(
  async (req, res) => {

    const page =
      Number(req.query.page) || 1;

    const limit =
      Number(req.query.limit) || 10;

    const skip =
      (page - 1) * limit;

    const {
      search = "",
      person = "",
      emotion = ""
    } = req.query;

    const cacheKey =
      `memories:${req.user.id}:page=${page}:limit=${limit}:search=${search}:person=${person}:emotion=${emotion}`;

    const cachedMemories =
      await redisClient.get(cacheKey);

    if (cachedMemories) {

     

      return res.status(200).json(
        new ApiResponse(
          200,
          cachedMemories,
          "Memories fetched from cache"
        )
      );
    }

    

    const filters = {
      userId: req.user.id
    };

    if (search) {
      filters.OR = [
        {
          title: {
            contains: search,
            mode: "insensitive"
          }
        },
        {
          summary: {
            contains: search,
            mode: "insensitive"
          }
        }
      ];
    }

    if (person) {
      filters.people = {
        has: person
      };
    }

    if (emotion) {
      filters.emotions = {
        has: emotion
      };
    }

    const memories =
      await prisma.memory.findMany({
        where: filters,
        skip,
        take: limit,
        orderBy: {
          createdAt: "desc"
        }
      });

    const total =
      await prisma.memory.count({
        where: filters
      });

    const responseData = {
      memories,
      page,
      totalPages:
        Math.ceil(total / limit),
      total
    };

    await redisClient.set(
      cacheKey,
      responseData,
      {
        ex: 1800
      }
    );

    return res.status(200).json(
      new ApiResponse(
        200,
        responseData,
        "Memories fetched"
      )
    );

});

// export const getMemoryById = asyncHandler(
//   async (req, res) => {

//     const memory =
//       await prisma.memory.findUnique({
//         where: {
//           id: req.params.id
//         },
//         include: {
//           collection: true,
//           uploads: true
//         }
//       });

//     if (!memory) {
//       throw new ApiError(
//         404,
//         "Memory not found"
//       );
//     }

//     if (memory.userId !== req.user.id) {
//       throw new ApiError(
//         403,
//         "Unauthorized action"
//       );
//     }

//     return res.status(200).json(
//       new ApiResponse(
//         200,
//         memory,
//         "Memory fetched successfully"
//       )
//     );
// });
export const getMemoryById = asyncHandler(
  async (req, res) => {

    const cacheKey =
      `memory:${req.params.id}`;

    const cachedMemory =
      await redisClient.get(cacheKey);

    if (cachedMemory) {

      

      return res.status(200).json(
        new ApiResponse(
          200,
          cachedMemory,
          "Memory fetched from cache"
        )
      );
    }

   

    const memory =
      await prisma.memory.findUnique({
        where: {
          id: req.params.id
        },
        include: {
          collection: true,
          uploads: true
        }
      });

    if (!memory) {
      throw new ApiError(
        404,
        "Memory not found"
      );
    }

    if (memory.userId !== req.user.id) {
      throw new ApiError(
        403,
        "Unauthorized action"
      );
    }

    await redisClient.set(
      cacheKey,
      memory,
      {
        ex: 1800
      }
    );

    return res.status(200).json(
      new ApiResponse(
        200,
        memory,
        "Memory fetched successfully"
      )
    );

});

export const updateMemory = asyncHandler(
  async (req, res) => {

    const { id } = req.params;

    const {
      title,
      summary,
      memoryDate,
      tags,
      people,
      places,
      events,
      emotions
    } = req.body;

    const memory =
      await prisma.memory.findUnique({
        where: { id }
      });

    if (!memory) {
      throw new ApiError(
        404,
        "Memory not found"
      );
    }

    if (memory.userId !== req.user.id) {
      throw new ApiError(
        403,
        "Unauthorized action"
      );
    }

    const updatedMemory =
      await prisma.memory.update({
        where: { id },
          data: {
            title,
            summary,
            memoryDate,
            tags,
            people,
            places,
            events,
            emotions
          }
      });

await refreshLifeSummary(
  req.user.id
);

await invalidateUserCache(
  req.user.id
);
await invalidateMemoryCache(
  req.params.id
);

    return res.status(200).json(
      new ApiResponse(
        200,
        updatedMemory,
        "Memory updated successfully"
      )
    );

});


export const deleteMemory = asyncHandler(
  async (req, res) => {

    const { id } = req.params;

    const memory =
      await prisma.memory.findUnique({
        where: { id }
      });

    if (!memory) {
      throw new ApiError(
        404,
        "Memory not found"
      );
    }

    if (memory.userId !== req.user.id) {
      throw new ApiError(
        403,
        "Unauthorized action"
      );
    }

    // await prisma.memory.delete({
    //   where: { id }
    // });
await prisma.upload.deleteMany({
  where: {
    memoryId: id
  }
});

await prisma.memory.delete({
  where: {
    id
  }
});
await refreshLifeSummary(
  req.user.id
);

await invalidateUserCache(
  req.user.id
);
await invalidateMemoryCache(
  id
);

    return res.status(200).json(
      new ApiResponse(
        200,
        {},
        "Memory deleted successfully"
      )
    );

});

export const searchMemories = asyncHandler(
  async (req, res) => {

    const { keyword } = req.query;

    const memories =
      await prisma.memory.findMany({
        where: {
          userId: req.user.id,
          OR: [
            {
              title: {
                contains: keyword,
                mode: "insensitive"
              }
            },
            {
              summary: {
                contains: keyword,
                mode: "insensitive"
              }
            }
          ]
        }
      });

    return res.status(200).json(
      new ApiResponse(
        200,
        memories,
        "Search results fetched"
      )
    );

});


export const createMemoryFromAudio = asyncHandler(async (req, res) => {

  if (!req.file) {
    throw new ApiError(
      400,
      "Audio file is required"
    );
  }

  const { collectionId } = req.body;

  if (!collectionId) {
    throw new ApiError(
      400,
      "Collection ID is required"
    );
  }

  const collection =
    await prisma.collection.findFirst({
      where: {
        id: collectionId,
        userId: req.user.id
      }
    });

  if (!collection) {
    throw new ApiError(
      404,
      "Collection not found"
    );
  }

  const localPath = req.file.path;

  try {

    const cloudinaryFile =
      await uploadToCloudinary(
        localPath
      );

    const aiResult =
      await processMemoryWithAI(
        localPath
      );

    const memory =
      await prisma.memory.create({
        data: {

          title:
            aiResult.memory.title,

          summary:
            aiResult.memory.summary,

          people:
            aiResult.memory.people || [],

          places:
            aiResult.memory.places || [],

          events:
            aiResult.memory.events || [],

          emotions:
            aiResult.memory.emotions || [],

          tags: [],

          userId:
            req.user.id,

          collectionId
        }
      });

    await prisma.upload.create({
      data: {

        fileUrl:
          cloudinaryFile.secure_url,

        publicId:
          cloudinaryFile.public_id,

        transcript:
          aiResult.transcript,

        fileType:
          "AUDIO",

        memoryId:
          memory.id
      }
    });

    if (
      localPath &&
      fs.existsSync(localPath)
    ) {
      fs.unlinkSync(localPath);
    }

    return res.status(201).json(
      new ApiResponse(
        201,
        memory,
        "Memory created from audio"
      )
    );

  } catch (error) {

    if (
      localPath &&
      fs.existsSync(localPath)
    ) {
      fs.unlinkSync(localPath);
    }

    throw error;
  }

});


export const getTimeline = asyncHandler(
  async (req, res) => {

    const memories =
      await prisma.memory.findMany({
        where: {
          userId: req.user.id
        },
        orderBy: {
          memoryDate: "asc"
        },
        include: {
          collection: true,
          uploads: true,
          story: true
        }
      });

    return res.status(200).json(
      new ApiResponse(
        200,
        memories,
        "Timeline fetched successfully"
      )
    );

});


// export const getInsights = asyncHandler(
//   async (req, res) => {

//     const memories =
//       await prisma.memory.findMany({
//         where: {
//           userId: req.user.id
//         },
//         include: {
//           story: true
//         }
//       });

//     const totalMemories =
//       memories.length;

//     const totalStories =
//       memories.filter(
//         memory => memory.story
//       ).length;

//     const peopleCount = {};
//     const emotionCount = {};
//     const eventCount = {};

//     memories.forEach(memory => {

//       memory.people.forEach(person => {
//         peopleCount[person] =
//           (peopleCount[person] || 0) + 1;
//       });

//       memory.emotions.forEach(emotion => {
//         emotionCount[emotion] =
//           (emotionCount[emotion] || 0) + 1;
//       });

//       memory.events.forEach(event => {
//         eventCount[event] =
//           (eventCount[event] || 0) + 1;
//       });

//     });

//     const topPeople =
//       Object.entries(peopleCount)
//         .map(([name, count]) => ({
//           name,
//           count
//         }))
//         .sort((a, b) =>
//           b.count - a.count
//         )
//         .slice(0, 5);

//     const topEmotions =
//       Object.entries(emotionCount)
//         .map(([emotion, count]) => ({
//           emotion,
//           count
//         }))
//         .sort((a, b) =>
//           b.count - a.count
//         )
//         .slice(0, 5);

//     const topEvents =
//       Object.entries(eventCount)
//         .map(([event, count]) => ({
//           event,
//           count
//         }))
//         .sort((a, b) =>
//           b.count - a.count
//         )
//         .slice(0, 5);

//     return res.status(200).json(
//       new ApiResponse(
//         200,
//         {
//           totalMemories,
//           totalStories,
//           topPeople,
//           topEmotions,
//           topEvents
//         },
//         "Insights fetched successfully"
//       )
//     );

// });


export const getInsights = asyncHandler(
  async (req, res) => {

    const cacheKey = `insights:${req.user.id}`;

    const cachedInsights =
      await redisClient.get(cacheKey);

    if (cachedInsights) {


      return res.status(200).json(
        new ApiResponse(
          200,
          cachedInsights,
          "Insights fetched from cache"
        )
      );

    }


    const memories =
      await prisma.memory.findMany({
        where: {
          userId: req.user.id
        },
        include: {
          story: true
        }
      });

    const totalMemories =
      memories.length;

    const totalStories =
      memories.filter(
        memory => memory.story
      ).length;

    const peopleCount = {};
    const emotionCount = {};
    const eventCount = {};

    memories.forEach(memory => {

      memory.people.forEach(person => {
        peopleCount[person] =
          (peopleCount[person] || 0) + 1;
      });

      memory.emotions.forEach(emotion => {
        emotionCount[emotion] =
          (emotionCount[emotion] || 0) + 1;
      });

      memory.events.forEach(event => {
        eventCount[event] =
          (eventCount[event] || 0) + 1;
      });

    });

    const topPeople =
      Object.entries(peopleCount)
        .map(([name, count]) => ({
          name,
          count
        }))
        .sort((a, b) =>
          b.count - a.count
        )
        .slice(0, 5);

    const topEmotions =
      Object.entries(emotionCount)
        .map(([emotion, count]) => ({
          emotion,
          count
        }))
        .sort((a, b) =>
          b.count - a.count
        )
        .slice(0, 5);

    const topEvents =
      Object.entries(eventCount)
        .map(([event, count]) => ({
          event,
          count
        }))
        .sort((a, b) =>
          b.count - a.count
        )
        .slice(0, 5);

    const insightsData = {
      totalMemories,
      totalStories,
      topPeople,
      topEmotions,
      topEvents
    };

    await redisClient.set(
      cacheKey,
      insightsData,
      {
        ex: 1800 // 30 minutes
      }
    );

    return res.status(200).json(
      new ApiResponse(
        200,
        insightsData,
        "Insights fetched successfully"
      )
    );

  }
);

export const getMemoriesByPerson = asyncHandler(async (req, res) => {

    const keyword =
      req.params.person
        .toLowerCase()
        .trim();

    const memories =
      await prisma.memory.findMany({

        where: {
          userId: req.user.id
        }

      });

    const filtered =
      memories.filter(memory =>

        memory.people.some(person =>

          person
            .toLowerCase()
            .includes(keyword)

        )

      );

    return res.status(200).json(

      new ApiResponse(
        200,
        filtered,
        "Person memories fetched"
      )

    );

  }
);

export const getMemoriesByEmotion = asyncHandler(
  async (req, res) => {

    const keyword =
      req.params.emotion
        .toLowerCase()
        .trim();

    const memories =
      await prisma.memory.findMany({

        where: {
          userId: req.user.id
        }

      });

    const filtered =
      memories.filter(memory =>

        memory.emotions.some(emotion =>

          emotion
            .toLowerCase()
            .includes(keyword)

        )

      );

    return res.status(200).json(

      new ApiResponse(
        200,
        filtered,
        "Emotion memories fetched"
      )

    );

  }
);

export const getMemoriesByEvent = asyncHandler(async (req, res) => {

    const keyword =
      req.params.event
        .toLowerCase()
        .trim();

    const memories =
      await prisma.memory.findMany({

        where: {
          userId: req.user.id
        }

      });

    const filtered =
      memories.filter(memory =>

        memory.events.some(event =>

          event
            .toLowerCase()
            .includes(keyword)

        )

      );

    return res.status(200).json(

      new ApiResponse(
        200,
        filtered,
        "Event memories fetched"
      )

    );

  }
);