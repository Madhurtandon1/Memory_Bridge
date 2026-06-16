import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

export const uploadToCloudinary = async (
  localFilePath
) => {

  const response =
    await cloudinary.uploader.upload(
      localFilePath,
      {
        resource_type: "auto",
        folder: "memory_bridge/audio"
      }
    );

  return response;
};