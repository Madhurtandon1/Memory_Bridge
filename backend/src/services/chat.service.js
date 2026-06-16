import axios from "axios";

export const askMemoryAssistant =
async (
  question,
  memories,
  conversation
) => {

  const response =
    await axios.post(
      `${process.env.ML_SERVICE_URL}/chat/`,
      {
        question,
        memories,
        conversation
      }
    );

  return response.data;
};