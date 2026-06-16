from fastapi import APIRouter
from pydantic import BaseModel

from services.extraction_service import (
    extract_memory
)

router = APIRouter()

class TranscriptInput(BaseModel):
    transcript: str

@router.post("/")
def extract(data: TranscriptInput):

    result = extract_memory(
        data.transcript
    )

    return {
        "success": True,
        "data": result
    }