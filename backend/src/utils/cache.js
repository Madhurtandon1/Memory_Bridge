import { redisClient } from "../config/redis.js";

export const invalidateUserCache = async (userId) => {

  console.log(
    "🗑️ INVALIDATING USER CACHE:",
    userId
  );

  await redisClient.del(`life:${userId}`);
  await redisClient.del(`dashboard:${userId}`);
  await redisClient.del(`insights:${userId}`);
  await redisClient.del(`collections:${userId}`);

  const memoryKeys =
    await redisClient.keys(
      `memories:${userId}*`
    );

  if (memoryKeys.length > 0) {

    console.log(
      "🗑️ MEMORY LIST CACHE CLEARED:",
      memoryKeys.length
    );

    await redisClient.del(...memoryKeys);
  }

};


export const invalidateMemoryCache =
  async (memoryId) => {

    console.log(
      "🗑️ MEMORY CACHE INVALIDATED:",
      memoryId
    );

    await redisClient.del(
      `memory:${memoryId}`
    );

};