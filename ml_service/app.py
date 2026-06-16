from fastapi import FastAPI

from routes.transcription import router as transcription_router
from routes.memory import router as memory_router
from routes.story import router as story_router
from routes.process_memory import ( router as process_memory_router )
from routes.chat import ( router as chat_router )
from routes.life import router as life_router

from routes.extraction import (router as extraction_router)
app = FastAPI(
    title="MemoryBridge AI Service"
)

app.include_router(
    transcription_router,
    prefix="/transcribe",
    tags=["Transcription"]
)

app.include_router(
    memory_router,
    prefix="/memory",
    tags=["Memory"]
)

app.include_router(
    story_router,
    prefix="/story",
    tags=["Story"]
)

app.include_router(
    extraction_router,
    prefix="/extract",
    tags=["Extraction"]
)

app.include_router(
    process_memory_router,
    prefix="/process-memory",
    tags=["Process Memory"]
)


app.include_router(
    chat_router,
    prefix="/chat",
    tags=["Chat"]
)
app.include_router(
    life_router,
    prefix="/life"
)

@app.get("/")
def root():
    return {
        "success": True,
        "message": "MemoryBridge AI Service Running"
    }