import { ElevenLabsClient } from "elevenlabs";

const client = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY
});

export const generateStoryAudio =
  async (
    text,
    voiceId
  ) => {

    const audio =
      await client.textToSpeech.convert(
        voiceId,
        {
          text,
          model_id:
            "eleven_flash_v2_5"
        }
      );

    return audio;
  };