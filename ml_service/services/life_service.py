import os
import json

from dotenv import load_dotenv

import google.generativeai as genai

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)

def generate_life_summary(memories):

    prompt = f"""
You are MemoryBridge AI.

Analyze all user memories.

Generate:

1. A short life summary
2. Main themes
3. Most important people
4. Dominant emotions

Return ONLY valid JSON.

{{
  "summary":"",
  "themes":[],
  "topPeople":[],
  "topEmotions":[]
}}

Memories:

{json.dumps(memories)}
"""

    response = model.generate_content(
        prompt
    )

    text = response.text.strip()

    if text.startswith("```json"):
        text = text.replace(
            "```json",
            ""
        )

    text = text.replace(
        "```",
        ""
    ).strip()

    return json.loads(text)