import prisma from "../config/prisma.js";
import fs from "fs";
import path from "path";

import axios from "axios";

import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { generateStoryAudio } from "../services/audio.service.js";
import { VOICES } from "../services/voice.constants.js";
import { uploadToCloudinary } from "../config/cloudinary.js";

export const generateStory = asyncHandler(async (req, res) => {

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

  const existingStory =
    await prisma.story.findUnique({
      where: {
        memoryId: id
      }
    });

  if (existingStory) {

    return res.status(200).json(
      new ApiResponse(
        200,
        existingStory,
        "Story fetched successfully"
      )
    );
  }

  const response =
    await axios.post(
      `${process.env.ML_SERVICE_URL}/story/`,
      {
        title: memory.title,
        summary: memory.summary,
        people: memory.people,
        places: memory.places,
        events: memory.events,
        emotions: memory.emotions
      }
    );

  const story =
    await prisma.story.create({
      data: {
        content:
          response.data.story,
        memoryId:
          memory.id
      }
    });

  return res.status(200).json(
    new ApiResponse(
      200,
      story,
      "Story generated successfully"
    )
  );

});


export const getStory = asyncHandler(async (req, res) => {

  const story =
    await prisma.story.findUnique({
      where: {
        memoryId:
          req.params.memoryId
      }
    });

  if (!story) {
    throw new ApiError(
      404,
      "Story not found"
    );
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      story,
      "Story fetched successfully"
    )
  );

});


export const generateAudio = asyncHandler(async (
  req,
  res
) => {

  const { id } =
    req.params;

  const {
    voiceType
  } = req.body;

  const story =
    await prisma.story.findUnique({
      where: { id }
    });
    

  if (!story) {
    throw new ApiError(
      404,
      "Story not found"
    );
  }

  if (story.audioUrl) {

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          audioUrl:
            story.audioUrl
        },
        "Audio already exists"
      )
    );

  }


const audioStream =
  await generateStoryAudio(
    story.content,
    VOICES[
      voiceType
    ] || VOICES.narrator
  );

    

const chunks = [];

for await (
  const chunk
  of audioStream
) {
  chunks.push(chunk);
}

const buffer =
  Buffer.concat(chunks);

const localFilePath =
  `./public/temp/story-${Date.now()}.mp3`;

if (!fs.existsSync("./public/temp")) {
  fs.mkdirSync(
    "./public/temp",
    { recursive: true }
  );
}

fs.writeFileSync(
  localFilePath,
  buffer
);



const uploaded =
  await uploadToCloudinary(
    localFilePath
  );


  const updated =
    await prisma.story.update({

      where: {
        id
      },

      data: {
        audioUrl:
          uploaded.url,

        voiceType
      }

    });

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        audioUrl:
          updated.audioUrl
      },
      "Audio generated"
    )
  );

});