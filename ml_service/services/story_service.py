import os

from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)

def generate_story(memory):

    prompt = f"""
    Create a warm, emotional story
    from the memory data below.

    Title:
    {memory["title"]}

    Summary:
    {memory["summary"]}

    People:
    {memory["people"]}

    Events:
    {memory["events"]}

    Places:
    {memory["places"]}

    Emotions:
    {memory["emotions"]}

    Write a natural first-person story.
    """

    response = model.generate_content(
        prompt
    )

    return response.text