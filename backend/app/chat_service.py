from sqlalchemy.orm import Session
from .models import Resume
from .openrouter import call_openrouter

SYSTEM_PROMPT = """
You are Lakshita Jawandhiya's AI assistant.
Answer strictly using the resume provided.
If the information is not in resume, say:
"I do not have that information in Lakshita's resume."
Be professional and recruiter-friendly.
"""

async def generate_reply(db: Session, user_message: str):
    resume = db.query(Resume).first()
    resume_content = resume.content if resume else ""

    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "system", "content": f"Resume:\n{resume_content}"},
        {"role": "user", "content": user_message},
    ]

    return await call_openrouter(messages)
