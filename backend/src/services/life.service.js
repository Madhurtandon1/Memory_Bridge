import axios from "axios";

export const generateLifeSummary =
async (memories) => {

  const response =
    await axios.post(

      `${process.env.ML_SERVICE_URL}/life/`,

      {
        memories
      }

    );

  return response.data;
};