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
    "http://127.0.0.1:8000/process-memory/",
    formData,
    {
      headers: formData.getHeaders(),
      maxBodyLength: Infinity
    }
  );

  return response.data;
};