from fastapi import APIRouter, UploadFile, File
import os

from services.whisper_service import (
    transcribe_audio
)

router = APIRouter()

@router.post("/")
async def transcribe(
    audio: UploadFile = File(...)
):

    temp_path = f"temp_{audio.filename}"

    with open(temp_path, "wb") as buffer:
        buffer.write(
            await audio.read()
        )

    transcript = transcribe_audio(
        temp_path
    )

    os.remove(temp_path)

    return {
        "success": True,
        "transcript": transcript
    }