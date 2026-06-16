import jwt from "jsonwebtoken";
import prisma from "../config/prisma.js";

import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";


// export const verifyJWT = asyncHandler(async (req, res, next) => {
//   try {
//     const token =
//       req.cookies?.accessToken ||
//       req.headers.authorization?.replace("Bearer ", "");

//     console.log("AUTH HEADER:", req.headers.authorization);
//     console.log("TOKEN:", token);

//     if (!token) {
//       throw new ApiError(401, "Unauthorized request");
//     }

//     const decodedToken = jwt.verify(
//       token,
//       process.env.JWT_ACCESS_SECRET
//     );

//     console.log("DECODED TOKEN:", decodedToken);

//     const user = await prisma.user.findUnique({
//       where: {
//         id: decodedToken.userId,
//       },
//       select: {
//         id: true,
//         name: true,
//         email: true,
//         role: true,
//       },
//     });

//     console.log("FOUND USER:", user);

//     if (!user) {
//       throw new ApiError(
//         401,
//         "Invalid access token"
//       );
//     }

//     req.user = user;

//     next();
//   } catch (error) {
//     console.error("JWT VERIFY ERROR:", error.message);

//     throw new ApiError(
//       401,
//       error?.message || "Invalid access token"
//     );
//   }
// });



export const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    

    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(
      token,
      process.env.JWT_ACCESS_SECRET
    );

    

    const user = await prisma.user.findUnique({
      where: {
        id: decodedToken.userId
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true
      }
    });

   

    if (!user) {
      throw new ApiError(
        401,
        "Invalid access token"
      );
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("JWT ERROR:", error);

    throw new ApiError(
      401,
      error?.message || "Invalid access token"
    );
  }
});