import prisma from "../config/prisma.js";

import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

import { invalidateUserCache, invalidateMemoryCache } from "../utils/cache.js";
import { redisClient } from "../config/redis.js";

export const createCollection = asyncHandler(
  async (req, res) => {

    const { name, description } = req.body;

    if (!name) {
      throw new ApiError(
        400,
        "Collection name is required"
      );
    }

    const collection =
      await prisma.collection.create({
        data: {
          name,
          description,
          userId: req.user.id
        }
      });
     await invalidateUserCache(
        req.user.id
    ); 

    return res.status(201).json(
      new ApiResponse(
        201,
        collection,
        "Collection created successfully"
      )
    );

});


// export const getCollections = asyncHandler(
//   async (req, res) => {

// const collections =
//   await prisma.collection.findMany({
//     where: {
//       userId: req.user.id
//     },
//     include: {
//       _count: {
//         select: {
//           memories: true
//         }
//       }
//     },
//     orderBy: {
//       createdAt: "desc"
//     }
//   });

//     return res.status(200).json(
//       new ApiResponse(
//         200,
//         collections,
//         "Collections fetched successfully"
//       )
//     );

// });

export const getCollections = asyncHandler(
  async (req, res) => {

    const cacheKey =
      `collections:${req.user.id}`;

    const cachedCollections =
      await redisClient.get(cacheKey);

    if (cachedCollections) {



      return res.status(200).json(
        new ApiResponse(
          200,
          cachedCollections,
          "Collections fetched from cache"
        )
      );

    }



    const collections =
      await prisma.collection.findMany({
        where: {
          userId: req.user.id
        },
        include: {
          _count: {
            select: {
              memories: true
            }
          }
        },
        orderBy: {
          createdAt: "desc"
        }
      });

    await redisClient.set(
      cacheKey,
      collections,
      {
        ex: 1800 // 30 mins
      }
    );

    return res.status(200).json(
      new ApiResponse(
        200,
        collections,
        "Collections fetched successfully"
      )
    );

});


// export const deleteCollection = asyncHandler(
//   async (req, res) => {

//     const { id } = req.params;

//     const collection =
//       await prisma.collection.findUnique({
//         where: { id }
//       });

//     if (!collection) {
//       throw new ApiError(
//         404,
//         "Collection not found"
//       );
//     }

//     if (
//       collection.userId !== req.user.id
//     ) {
//       throw new ApiError(
//         403,
//         "Unauthorized action"
//       );
//     }

//     const memories =
//       await prisma.memory.findMany({
//         where: {
//           collectionId: id
//         }
//       });

//     for (const memory of memories) {

//       await prisma.upload.deleteMany({
//         where: {
//           memoryId: memory.id
//         }
//       });

//       await prisma.story.deleteMany({
//         where: {
//           memoryId: memory.id
//         }
//       });

//     }

//     await prisma.memory.deleteMany({
//       where: {
//         collectionId: id
//       }
//     });

//     await prisma.collection.delete({
//       where: {
//         id
//       }
//     });

//     return res.status(200).json(
//       new ApiResponse(
//         200,
//         {},
//         "Collection deleted successfully"
//       )
//     );

// });

// export const updateCollection = asyncHandler(
//   async (req, res) => {

//     const { id } = req.params;

//     const {
//       name,
//       description
//     } = req.body;

//     const collection =
//       await prisma.collection.findUnique({
//         where: {
//           id
//         }
//       });

//     if (!collection) {
//       throw new ApiError(
//         404,
//         "Collection not found"
//       );
//     }

//     if (
//       collection.userId !== req.user.id
//     ) {
//       throw new ApiError(
//         403,
//         "Unauthorized action"
//       );
//     }

//     const updatedCollection =
//       await prisma.collection.update({

//         where: {
//           id
//         },

//         data: {
//           name,
//           description
//         }

//       });

//     return res.status(200).json(

//       new ApiResponse(
//         200,
//         updatedCollection,
//         "Collection updated successfully"
//       )

//     );

// });
export const deleteCollection = asyncHandler(
  async (req, res) => {

    const { id } = req.params;

    const collection =
      await prisma.collection.findUnique({
        where: { id }
      });

    if (!collection) {
      throw new ApiError(
        404,
        "Collection not found"
      );
    }

    if (
      collection.userId !== req.user.id
    ) {
      throw new ApiError(
        403,
        "Unauthorized action"
      );
    }

    const memories =
      await prisma.memory.findMany({
        where: {
          collectionId: id
        }
      });

    for (const memory of memories) {

      await prisma.upload.deleteMany({
        where: {
          memoryId: memory.id
        }
      });

      await prisma.story.deleteMany({
        where: {
          memoryId: memory.id
        }
      });

    }

    await prisma.memory.deleteMany({
      where: {
        collectionId: id
      }
    });

    await prisma.collection.delete({
      where: {
        id
      }
    });

    await invalidateUserCache(
      req.user.id
    );

    return res.status(200).json(
      new ApiResponse(
        200,
        {},
        "Collection deleted successfully"
      )
    );

});

export const updateCollection = asyncHandler(
  async (req, res) => {

    const { id } = req.params;

    const {
      name,
      description
    } = req.body;

    const collection =
      await prisma.collection.findUnique({
        where: {
          id
        }
      });

    if (!collection) {
      throw new ApiError(
        404,
        "Collection not found"
      );
    }

    if (
      collection.userId !== req.user.id
    ) {
      throw new ApiError(
        403,
        "Unauthorized action"
      );
    }

    const updatedCollection =
      await prisma.collection.update({

        where: {
          id
        },

        data: {
          name,
          description
        }

      });

    await invalidateUserCache(
      req.user.id
    );

    return res.status(200).json(

      new ApiResponse(
        200,
        updatedCollection,
        "Collection updated successfully"
      )

    );

});