from fastapi import APIRouter
from pydantic import BaseModel

from services.story_service import (
    generate_story
)

router = APIRouter()

class MemoryInput(BaseModel):
    title: str
    summary: str | None = None
    people: list[str] = []
    places: list[str] = []
    events: list[str] = []
    emotions: list[str] = []

@router.post("/")
def create_story(data: MemoryInput):

    story = generate_story(
        data.dict()
    )

    return {
        "success": True,
        "story": story
    }