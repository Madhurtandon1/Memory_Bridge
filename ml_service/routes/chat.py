from fastapi import APIRouter
from pydantic import BaseModel

from services.chat_service import (
    answer_question
)



router = APIRouter()

class ChatInput(BaseModel):
    question: str
    memories: list
    conversation: list = []

@router.post("/")
def chat(data: ChatInput):

    answer = answer_question(
        data.question,
        data.memories,
        data.conversation
    )

    return {
        "answer": answer
    }