// import prisma from "../config/prisma.js";

// import { ApiResponse }
// from "../utils/ApiResponse.js";

// import { asyncHandler }
// from "../utils/asyncHandler.js";

// import {
//   generateLifeSummary
// }
// from "../services/life.service.js";

// export const getLifeSummary =
// asyncHandler(async (req, res) => {

//   const memories =
//     await prisma.memory.findMany({

//       where: {
//         userId: req.user.id
//       }

//     });

//   if (!memories.length) {

//     return res.status(200).json(

//       new ApiResponse(
//         200,
//         {
//           summary:
//             "No memories found.",
//           themes: [],
//           topPeople: [],
//           topEmotions: []
//         },
//         "No memories found"
//       )

//     );

//   }

//   const result =
//     await generateLifeSummary(
//       memories
//     );

//   return res.status(200).json(

//     new ApiResponse(
//       200,
//       result,
//       "Life summary generated"
//     )

//   );

// });

// import prisma from "../config/prisma.js";
// import { redisClient } from "../config/redis.js";

// import { ApiResponse } from "../utils/ApiResponse.js";
// import { asyncHandler } from "../utils/asyncHandler.js";

// export const getLifeSummary = asyncHandler(async (req, res) => {

//   const cacheKey =
//     `life:${req.user.id}`;

//   // 1. Check Redis first
// const cached =
//   await redisClient.get(
//     cacheKey
//   );

// if (cached) {

//   console.log(
//     "REDIS CACHE HIT"
//   );
//    console.log(
//     "CACHE RAW:",
//     cached
//   );

//   return res.status(200).json(
//     new ApiResponse(
//       200,
//       JSON.parse(cached),
//       "Life summary fetched from cache"
//     )
//   );
// }

// console.log(
//   "REDIS CACHE MISS"
// );

// const summary =
//   await prisma.lifeSummary.findUnique({
//     where: {
//       userId: req.user.id
//     }
//   });

//   // 3. Store in Redis
//   if (summary) {

//     await redisClient.set(
//       cacheKey,
//       JSON.stringify(summary),
//       {
//         ex: 3600 // 1 hour
//       }
//     );

//   }

//   return res.status(200).json(

//     new ApiResponse(
//       200,
//       summary,
//       "Life summary fetched"
//     )

//   );

// });



// import prisma from "../config/prisma.js";
// import { redisClient } from "../config/redis.js";

// import { ApiResponse } from "../utils/ApiResponse.js";
// import { asyncHandler } from "../utils/asyncHandler.js";

// export const getLifeSummary =
// asyncHandler(async (req, res) => {

//   const cacheKey =
//     `life:${req.user.id}`;

//   const cached =
//     await redisClient.get(
//       cacheKey
//     );

//   if (cached) {

//     console.log(
//       "REDIS CACHE HIT"
//     );

//     console.log(
//       "CACHE TYPE:",
//       typeof cached
//     );

//     console.log(
//       "CACHE VALUE:",
//       cached
//     );

//     return res.status(200).json(
//       new ApiResponse(
//         200,
//         cached,
//         "Life summary fetched from cache"
//       )
//     );

//   }

//   console.log(
//     "REDIS CACHE MISS"
//   );

//   const summary =
//     await prisma.lifeSummary.findUnique({
//       where: {
//         userId: req.user.id
//       }
//     });

//   if (summary) {

//     await redisClient.set(
//       cacheKey,
//       summary,
//       {
//         ex: 3600
//       }
//     );

//     console.log(
//       "SUMMARY STORED IN REDIS"
//     );

//   }

//   return res.status(200).json(
//     new ApiResponse(
//       200,
//       summary,
//       "Life summary fetched"
//     )
//   );

// });


import prisma from "../config/prisma.js";
import { redisClient } from "../config/redis.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getLifeSummary = asyncHandler(async (req, res) => {
  const cacheKey = `life:${req.user.id}`;

  // 1. Attempt to fetch from Redis Cache
  const cached = await redisClient.get(cacheKey);

  if (cached) {
    return res.status(200).json(
      new ApiResponse(
        200,
        cached,
        "Life summary fetched from cache"
      )
    );
  }

  // 2. Cache Miss - Query Database
  const summary = await prisma.lifeSummary.findUnique({
    where: {
      userId: req.user.id
    }
  });

  // 3. Store result in Redis if summary exists
  if (summary) {
    await redisClient.set(
      cacheKey,
      summary,
      {
        ex: 3600 // Expire in 1 hour
      }
    );
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      summary,
      "Life summary fetched"
    )
  );
});