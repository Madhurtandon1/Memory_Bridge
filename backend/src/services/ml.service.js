import axios from "axios";
import FormData from "form-data";
import fs from "fs";

export const processMemoryWithAI = async (filePath) => {

  const formData = new FormData();

  formData.append(
    "audio",
    fs.createReadStream(filePath)
  );

  const response = await axios.post(
  `${process.env.ML_SERVICE_URL}/process-memory/`,
  formData,
  {
    headers: formData.getHeaders(),
    maxBodyLength: Infinity
  }
);

  return response.data;
};