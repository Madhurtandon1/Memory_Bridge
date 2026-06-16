from fastapi import APIRouter, UploadFile, File
import os

from services.whisper_service import (
    transcribe_audio
)

from services.extraction_service import (
    extract_memory
)

router = APIRouter()

@router.post("/")
async def process_memory(
    audio: UploadFile = File(...)
):

    temp_path = f"temp_{audio.filename}"

    try:

        with open(temp_path, "wb") as buffer:
            buffer.write(
                await audio.read()
            )

        transcript = transcribe_audio(
            temp_path
        )

        memory_data = extract_memory(
            transcript
        )

        return {
            "success": True,
            "transcript": transcript,
            "memory": memory_data
        }

    finally:

        if os.path.exists(temp_path):
            os.remove(temp_path)