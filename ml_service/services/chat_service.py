import os

from dotenv import load_dotenv

import google.generativeai as genai

from google.api_core.exceptions import (
    ResourceExhausted
)

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)

def answer_question(
    question,
    memories,
    conversation
):

    prompt = f"""
    You are MemoryBridge AI.

    You help users revisit their memories.

    Rules:

    - Use ONLY the memories provided.
    - Never invent facts.
    - If information is unavailable, clearly say:
    "That detail was not recorded in this memory."
    - Use story content whenever available.
    - Answer naturally and warmly.
    - Be concise unless the user asks for details.

    Conversation:

    {conversation}

    Memories:

    {memories}

    Question:

    {question}
    """
    try:

        response = model.generate_content(
            prompt
        )

        return response.text

    except ResourceExhausted:

        return (
            "Memory assistant is busy right now. "
            "Please try again in a minute."
        )

    except Exception as e:

        return (
            f"Error generating answer: "
            f"{str(e)}"
        )