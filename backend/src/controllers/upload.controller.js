import prisma from "../config/prisma.js";

import cloudinary
from "../config/cloudinary.js";

import { ApiResponse }
from "../utils/ApiResponse.js";

import { ApiError }
from "../utils/ApiError.js";

import { asyncHandler }
from "../utils/asyncHandler.js";

import { processMemoryWithAI }
from "../services/ml.service.js";

export const uploadAudio = asyncHandler(async (req, res) => {

  const { memoryId } = req.body;

  if (!req.file) {
    throw new ApiError(
      400,
      "Audio file required"
    );
  }

  const memory =
    await prisma.memory.findUnique({
      where: {
        id: memoryId
      }
    });

      if (
    memory.userId !== req.user.id
  ) {
    throw new ApiError(
      403,
      "Unauthorized action"
    );
}

  if (!memory) {
    throw new ApiError(
      404,
      "Memory not found"
    );
  }

  const result =
    await cloudinary.uploader.upload(
      req.file.path,
      {
        resource_type: "auto"
      }
    );

  const uploadRecord =
    await prisma.upload.create({
      data: {
        fileUrl: result.secure_url,
        publicId: result.public_id,
        fileType: "AUDIO",
        memoryId
      }
    });

  return res.status(201).json(
    new ApiResponse(
      201,
      uploadRecord,
      "Audio uploaded successfully"
    )
  );

});
