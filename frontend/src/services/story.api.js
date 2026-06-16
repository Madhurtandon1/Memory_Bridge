import api from "./api";

export const generateStory =
  async (memoryId) => {

    const res =
      await api.get(
        `/stories/${memoryId}/generate`
      );

    return res.data;
  };

export const getStory =
  async (memoryId) => {

    const res =
      await api.get(
        `/stories/${memoryId}`
      );

    return res.data;
  };

export const generateStoryAudio =
async (
  storyId,
  voiceType
) => {

  const res =
    await api.post(
      `/stories/${storyId}/audio`,
      {
        voiceType
      }
    );

  return res.data;
};