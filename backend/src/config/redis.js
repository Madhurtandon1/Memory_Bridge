// import { Redis } from "@upstash/redis";

// export const redisClient =
//   new Redis({
//     url: process.env.UPSTASH_REDIS_REST_URL,
//     token: process.env.UPSTASH_REDIS_REST_TOKEN
//   });


import { Redis } from "@upstash/redis";

export const redisClient = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// TEMPORARY DEBUG
(async () => {
  try {
    console.log("🔍 Testing Redis connection...");

    await redisClient.set("ping", "pong");

    const value = await redisClient.get("ping");

    console.log("✅ Redis Connected:", value);
  } catch (e) {
    console.error("❌ Redis failed:");
    console.error(e);
  }
})();