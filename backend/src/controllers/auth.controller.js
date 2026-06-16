import prisma from "../config/prisma.js";
import bcrypt from "bcryptjs";

import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendEmail } from "../utils/sendEmail.js";
import crypto from "crypto";

import {generateAccessToken, generateRefreshToken} from "../utils/token.js";

export const registerUser = asyncHandler(async (req, res) => {

  const { name, email, password } = req.body;

  const existingUser = await prisma.user.findUnique({
    where: { email }
  });

  if (existingUser) {
    throw new ApiError(400, "User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

const user = await prisma.user.create({
  data: {
    name,
    email,
    password: hashedPassword
  },
  select: {
    id: true,
    name: true,
    email: true,
    role: true,
    createdAt: true
  }
});

  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);

  return res.status(201).json(
    new ApiResponse(
      201,
      user,
      "User registered successfully"
    )
  );
});

export const loginUser = asyncHandler(async (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(
      400,
      "Email and password are required"
    );
  }

  const user = await prisma.user.findUnique({
    where: { email }
  });

  if (!user) {
    throw new ApiError(
      404,
      "User not found"
    );
  }

  const isPasswordCorrect =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!isPasswordCorrect) {
    throw new ApiError(
      401,
      "Invalid credentials"
    );
  }

  const accessToken =
    generateAccessToken(user.id);

  const refreshToken =
    generateRefreshToken(user.id);

  await prisma.user.update({
    where: {
      id: user.id
    },
    data: {
      refreshToken
    }
  });

  const loggedInUser =
    await prisma.user.findUnique({
      where: {
        id: user.id
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true
      }
    });

  const options = {
    httpOnly: true,
    secure: false
  };

  return res
    .status(200)
    .cookie(
      "accessToken",
      accessToken,
      options
    )
    .cookie(
      "refreshToken",
      refreshToken,
      options
    )
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken
        },
        "Login successful"
      )
    );

});

export const getCurrentUser = asyncHandler(
  async (req, res) => {

    return res.status(200).json(
      new ApiResponse(
        200,
        req.user,
        "Current user fetched successfully"
      )
    );

});

export const logoutUser = asyncHandler(
  async (req, res) => {

    await prisma.user.update({
      where: {
        id: req.user.id
      },
      data: {
        refreshToken: null
      }
    });

    const options = {
      httpOnly: true,
      secure: false
    };

    return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json(
        new ApiResponse(
          200,
          {},
          "User logged out successfully"
        )
      );

});


export const updateProfile = asyncHandler(
  async (req, res) => {

    const { name, avatar } = req.body;

    const updatedUser =
      await prisma.user.update({
        where: {
          id: req.user.id
        },
        data: {
          name,
          avatar
        },
        select: {
          id: true,
          name: true,
          email: true,
          avatar: true,
          role: true
        }
      });

    return res.status(200).json(
      new ApiResponse(
        200,
        updatedUser,
        "Profile updated successfully"
      )
    );
  }
);

export const changePassword = asyncHandler(
  async (req, res) => {

    const {
      oldPassword,
      newPassword
    } = req.body;

    if (!oldPassword || !newPassword) {
      throw new ApiError(
        400,
        "Old password and new password are required"
      );
    }

    const user =
      await prisma.user.findUnique({
        where: {
          id: req.user.id
        }
      });

    const isPasswordCorrect =
      await bcrypt.compare(
        oldPassword,
        user.password
      );

    if (!isPasswordCorrect) {
      throw new ApiError(
        400,
        "Old password is incorrect"
      );
    }

    const hashedPassword =
      await bcrypt.hash(
        newPassword,
        10
      );

    await prisma.user.update({
      where: {
        id: req.user.id
      },
      data: {
        password: hashedPassword,
        refreshToken: null
      }
    });

    return res.status(200).json(
      new ApiResponse(
        200,
        {},
        "Password changed successfully"
      )
    );
  }
);

export const forgotPassword = asyncHandler(async (req, res) => {

  const { email } = req.body;

  const user =
    await prisma.user.findUnique({
      where: { email }
    });

  if (!user) {

    throw new ApiError(
      404,
      "User not found"
    );

  }

  const resetToken =
    crypto.randomBytes(32)
      .toString("hex");

  const hashedToken =
    crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

  await prisma.user.update({

    where: {
      id: user.id
    },

    data: {

      resetPasswordToken:
        hashedToken,

      resetPasswordExpiry:
        new Date(
          Date.now() +
          15 * 60 * 1000
        )

    }

  });

  const resetUrl =

`${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  await sendEmail(

    user.email,

    "Reset Password",

    `
      <h2>MemoryBridge Password Reset</h2>

      <p>
        Click below to reset password:
      </p>

      <a href="${resetUrl}">
        Reset Password
      </a>
    `
  );

  return res.status(200).json(

    new ApiResponse(
      200,
      {},
      "Password reset email sent"
    )

  );

});

export const resetPassword = asyncHandler(async (req, res) => {

  const { token } =
    req.params;

  const { password } =
    req.body;

  const hashedToken =
    crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

  const user =
    await prisma.user.findFirst({

      where: {

        resetPasswordToken:
          hashedToken,

        resetPasswordExpiry: {
          gt: new Date()
        }

      }

    });

  if (!user) {

    throw new ApiError(
      400,
      "Invalid or expired token"
    );

  }

  const hashedPassword =
    await bcrypt.hash(
      password,
      10
    );

  await prisma.user.update({

    where: {
      id: user.id
    },

    data: {

      password:
        hashedPassword,

      refreshToken:
        null,

      resetPasswordToken:
        null,

      resetPasswordExpiry:
        null

    }

  });

  return res.status(200).json(

    new ApiResponse(
      200,
      {},
      "Password reset successful"
    )

  );

});

export const deleteAccount = asyncHandler(async (req, res) => {

    const { password } =
      req.body;

    if (!password) {

      throw new ApiError(
        400,
        "Password is required"
      );

    }

    const user =
      await prisma.user.findUnique({

        where: {
          id: req.user.id
        }

      });

    if (!user) {

      throw new ApiError(
        404,
        "User not found"
      );

    }

    const isPasswordCorrect =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isPasswordCorrect) {

      throw new ApiError(
        401,
        "Invalid password"
      );

    }

    await prisma.$transaction(

      async (tx) => {

        // Delete chats

        await tx.chatMessage.deleteMany({

          where: {

            session: {
              userId: user.id
            }

          }

        });

        await tx.chatSession.deleteMany({

          where: {
            userId: user.id
          }

        });

        // Delete stories

        await tx.story.deleteMany({

          where: {

            memory: {
              userId: user.id
            }

          }

        });

        // Delete uploads

        await tx.upload.deleteMany({

          where: {

            memory: {
              userId: user.id
            }

          }

        });

        // Delete memories

        await tx.memory.deleteMany({

          where: {
            userId: user.id
          }

        });

        // Delete collections

        await tx.collection.deleteMany({

          where: {
            userId: user.id
          }

        });

        // Delete user

        await tx.user.delete({

          where: {
            id: user.id
          }

        });

      }

    );

    return res
      .status(200)
      .clearCookie(
        "accessToken"
      )
      .clearCookie(
        "refreshToken"
      )
      .json(

        new ApiResponse(
          200,
          {},
          "Account deleted successfully"
        )

      );

  }
);