# import whisper

# model = whisper.load_model("tiny")

# def transcribe_audio(audio_path: str):

#     result = model.transcribe(audio_path)

#     return result["text"]


import whisper

_model = None

def get_model():
    global _model

    if _model is None:
        print("Loading Whisper Tiny Model...")
        _model = whisper.load_model("tiny")

    return _model

def transcribe_audio(audio_path: str):

    model = get_model()

    result = model.transcribe(audio_path)

    return result["text"]