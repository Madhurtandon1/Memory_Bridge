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


def extract_memory(transcript: str):

    prompt = f"""
You are an expert memory extraction assistant.

Analyze the transcript and return ONLY valid JSON.

Transcript:
{transcript}

Rules:

- Generate a meaningful title.
- Generate a concise summary.
- Extract all people mentioned.
- Extract all places mentioned.
- Extract important events.
- Infer emotions from context even if not explicitly stated.
- Generate useful tags.
- Assign an importanceScore between 1 and 10.
- Never return explanations.
- Never return markdown.
- Return ONLY valid JSON.

Examples:

Birthday celebration:
emotions = ["joy", "love", "happiness"]

Family reunion:
emotions = ["love", "warmth", "connection"]

Graduation:
emotions = ["pride", "achievement", "joy"]

Wedding:
emotions = ["love", "excitement", "happiness"]

Funeral:
emotions = ["sadness", "grief", "loss"]

Vacation:
emotions = ["joy", "excitement", "relaxation"]

Return JSON in this exact format:

{{
  "title": "",
  "summary": "",
  "people": [],
  "places": [],
  "events": [],
  "emotions": [],
  "tags": [],
  "importanceScore": 5
}}
"""

    response = model.generate_content(prompt)

    text = response.text.strip()

    if text.startswith("```json"):
        text = text.replace("```json", "")

    text = text.replace("```", "").strip()

    try:

        data = json.loads(text)

        # Ensure required fields exist

        data.setdefault("title", "Untitled Memory")
        data.setdefault("summary", "")

        data.setdefault("people", [])
        data.setdefault("places", [])
        data.setdefault("events", [])
        data.setdefault("emotions", [])
        data.setdefault("tags", [])

        # Fallback emotion

        if not data["emotions"]:
            data["emotions"] = ["neutral"]

        # Validate importance score

        score = data.get(
            "importanceScore",
            5
        )

        if not isinstance(score, int):
            score = 5

        score = max(
            1,
            min(score, 10)
        )

        data["importanceScore"] = score

        return data

    except Exception as e:

        print(
            "JSON Parse Error:",
            e
        )

        print(
            "Raw Gemini Response:"
        )

        print(text)

        raise