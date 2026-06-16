import { useState } from "react";

import axios from "axios";

export default function AudioUploader() {

  const [file, setFile] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const handleUpload =
    async () => {

      if (!file) return;

      try {

        setLoading(true);

        const formData =
          new FormData();

        formData.append(
          "audio",
          file
        );

        const token =
          localStorage.getItem(
            "accessToken"
          );

        const res =
          await axios.post(
            "http://localhost:5000/api/v1/memories/audio",
            formData,
            {
              headers: {
                Authorization:
                  `Bearer ${token}`
              }
            }
          );

        alert(
          "Memory Created Successfully"
        );

        console.log(
          res.data
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  return (

    <div
      className="
      bg-white
      rounded-3xl
      border
      p-8"
    >

      <h2
        className="
        text-2xl
        font-bold
        mb-4"
      >
        Upload Audio Memory
      </h2>

      <input
        type="file"
        accept="audio/*"
        onChange={(e) =>
          setFile(
            e.target.files[0]
          )
        }
      />

      <button
        onClick={
          handleUpload
        }
        disabled={
          loading
        }
        className="
        mt-4
        bg-purple-600
        text-white
        px-5
        py-3
        rounded-xl"
      >

        {
          loading
            ? "Processing..."
            : "Upload Audio"
        }

      </button>

    </div>
  );
}