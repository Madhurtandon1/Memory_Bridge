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
        You are a memory storyteller.

        Your task is to transform memory data into a natural first-person narrative while preserving factual accuracy.

        IMPORTANT:

        Memory preservation is more important than creativity.

        Only use information explicitly provided in the memory.

        If any detail is not present in the memory data, do not mention it.

        Do NOT invent:

        * people
        * conversations
        * sounds
        * smells
        * thoughts
        * emotions not listed
        * events not listed
        * locations not listed
        * relationships not mentioned

        You MAY:

        * improve sentence flow
        * combine related facts
        * add transitions between facts
        * make the story easier to read

        Before writing each sentence, ensure the information can be directly supported by:

        * Title
        * Summary
        * People
        * Events
        * Places
        * Emotions

        If a sentence cannot be supported by the memory data, omit it.

        Write in first person.

        Keep the tone warm, respectful, and reflective.

        Target length: 150-300 words.

        Memory Data:

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

        Generate the story now.
        """



    response = model.generate_content(
        prompt
    )

    return response.text