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
    try:
        resume = db.query(Resume).first()
        resume_content = resume.content if resume else ""
    except Exception:
        resume_content = ""
    
    # Default resume content if database is empty
    if not resume_content:
        resume_content = """
Lakshita Jawandhiya
Computer Science and Engineering Student at NIT Surat
CGPA: 8.82/10.00

Experience:
- AMTS Intern at Salesforce (May 2025 - July 2025)
  Automated background operational processes in Salesforce Stage Management
  Implemented structured agent workflows with Agentforce
  Developed Agentforce integrations with REST APIs

Achievements:
- GATE Qualified (AIR 11017)
- AdobeGenSolve Hackathon (Top 5 percentile)
- Google Cloud Study Jams Certified
- Salesforce Futureforce Women in Tech Summit
- JEE Mains & Advanced Qualified
- MHTCET Qualified (99.7 percentile)

Positions:
- Community Head, ACM NIT Surat Student Chapter (2023-2025)

Skills:
Languages: C/C++, Python, Java, JavaScript, TypeScript, HTML, CSS
Frontend: React.js, Vite, Tailwind CSS
Backend: Node.js, Express.js, FastAPI, REST APIs
Databases: MongoDB, MySQL, PostgreSQL, Firebase
Tools: Git, GitHub, Docker, VS Code
"""

    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "system", "content": f"Resume:\n{resume_content}"},
        {"role": "user", "content": user_message},
    ]

    return await call_openrouter(messages)
