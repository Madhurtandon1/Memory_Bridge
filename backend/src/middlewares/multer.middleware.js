import multer from "multer";

const storage = multer.diskStorage({});

const fileFilter = (
  req,
  file,
  cb
) => {

  const allowedTypes = [
    "audio/mpeg",
    "audio/mp3",
    "audio/wav",
    "audio/x-wav",
    "audio/ogg",
    "audio/webm",
    "video/mp4"
  ];

  if (
    allowedTypes.includes(
      file.mimetype
    )
  ) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only audio files are allowed"
      )
    );
  }
};

export const upload = multer({
  storage,
  fileFilter
});