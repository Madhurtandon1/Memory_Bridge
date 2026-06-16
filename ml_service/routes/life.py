from fastapi import APIRouter

from pydantic import BaseModel

from services.life_service import (
    generate_life_summary
)

router = APIRouter()

class LifeInput(BaseModel):
    memories: list

@router.post("/")
def life_summary(data: LifeInput):

    result = generate_life_summary(
        data.memories
    )

    return result