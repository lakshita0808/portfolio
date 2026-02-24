from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from .database import SessionLocal, engine, Base
from .schemas import (
    ChatRequest, ChatResponse, PortfolioData, 
    ExperienceModel, ProjectModel, EducationModel, 
    AchievementModel, PositionModel, SocialLinkModel
)
from .chat_service import generate_reply

Base.metadata.create_all(bind=engine)

app = FastAPI(title="AI Portfolio API", description="Personal portfolio with AI chat assistant")

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to specific domains in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/", tags=["Health"])
async def health_check():
    """Health check endpoint"""
    return {"status": "ok", "message": "AI Portfolio API is running"}

@app.get("/portfolio", response_model=PortfolioData, tags=["Portfolio"])
async def get_portfolio():
    """Get complete portfolio information"""
    portfolio_data = {
        "name": "Lakshita Jawandhiya",
        "title": "Full Stack Developer",
        "bio": "I build beautiful, functional web applications with React, Python, and modern technologies.",
        "profile_picture": "/profile.jpg",
        "resume_url": "/resume.pdf",
        "experiences": [
            ExperienceModel(
                role="Senior Full Stack Developer",
                company="Tech Innovations Inc.",
                period="2023 - Present",
                description="Led development of scalable web applications using React and Python.",
                achievements=["Built 5+ production apps", "Led team of 3 developers", "40% performance improvement"]
            ),
            ExperienceModel(
                role="Full Stack Developer",
                company="Digital Solutions Ltd",
                period="2021 - 2023",
                description="Developed and maintained full-stack applications.",
                achievements=["Launched 8 projects", "99.9% uptime", "Reduced load time by 60%"]
            )
        ],
        "projects": [
            ProjectModel(
                title="AI Portfolio Website",
                description="An intelligent portfolio with AI chat functionality",
                tech=["React", "TypeScript", "Python", "OpenRouter API"],
                link="#",
                github="#"
            ),
            ProjectModel(
                title="Full-Stack Chat Application",
                description="Real-time chat application with authentication",
                tech=["React", "Node.js", "Socket.io", "MongoDB"],
                link="#",
                github="#"
            )
        ],
        "skills": {
            "Frontend": ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
            "Backend": ["Python", "FastAPI", "Node.js", "Express", "REST APIs"],
            "Database": ["PostgreSQL", "MongoDB", "SQLAlchemy", "Firebase"],
            "Tools": ["Git", "Docker", "CI/CD", "AWS", "Linux"]
        },
        "education": [
            EducationModel(
                degree="Bachelor of Science",
                institution="University of California",
                field="Computer Science",
                duration="2019 - 2023",
                location="Berkeley, CA",
                gpa="3.8/4.0",
                highlights=["Dean's List all 4 years", "Recipient of STEM Excellence Scholarship", "Graduated with Honors"]
            ),
            EducationModel(
                degree="Master of Science",
                institution="Stanford University",
                field="Computer Science - AI/ML Specialization",
                duration="2023 - 2025",
                location="Stanford, CA",
                gpa="3.9/4.0",
                highlights=["Full Scholarship", "Research Assistant in AI Lab", "GPA: 3.9/4.0"]
            )
        ],
        "achievements": [
            AchievementModel(
                title="AWS Certified Solutions Architect",
                description="Associate level certification demonstrating expertise in AWS cloud services",
                date="2023",
                link="https://aws.amazon.com/certification/",
                icon="☁️"
            ),
            AchievementModel(
                title="Top 100 Contributor - Open Source",
                description="Recognized for significant contributions to multiple open-source projects",
                date="2023",
                link="https://github.com",
                icon="⭐"
            ),
            AchievementModel(
                title="Hackathon Winner - TechFest 2023",
                description="First place winner in AI/ML category with innovative solution",
                date="2023",
                link="https://techfest.example.com",
                icon="🏆"
            )
        ],
        "positions": [
            PositionModel(
                title="President - Tech Club",
                organization="University of Technology",
                duration="2023 - Present",
                location="San Francisco, CA",
                description="Leading a community of 500+ tech enthusiasts",
                responsibilities=[
                    "Organized 12+ tech talks and hackathons",
                    "Managed budget of $50,000+",
                    "Mentored 50+ junior developers",
                    "Grew community from 100 to 500+ members"
                ],
                image="🎯"
            ),
            PositionModel(
                title="Lead Organizer - Developer Meetup",
                organization="Tech Community Bay Area",
                duration="2022 - 2023",
                location="San Francisco, CA",
                description="Organized monthly meetups attracting 200+ developers",
                responsibilities=[
                    "Coordinated monthly events with 200+ attendees",
                    "Secured sponsorships worth $100,000+",
                    "Managed team of 10+ volunteers",
                    "Increased community engagement by 300%"
                ],
                image="👥"
            )
        ],
        "social_links": [
            SocialLinkModel(name="GitHub", url="https://github.com", icon="github"),
            SocialLinkModel(name="LinkedIn", url="https://linkedin.com", icon="linkedin"),
            SocialLinkModel(name="LeetCode", url="https://leetcode.com", icon="code"),
            SocialLinkModel(name="CodeForces", url="https://codeforces.com", icon="zap"),
            SocialLinkModel(name="Email", url="mailto:lakshita@example.com", icon="mail")
        ]
    }
    return portfolio_data

@app.post("/chat", response_model=ChatResponse, tags=["Chat"])
async def chat(request: ChatRequest, db: Session = Depends(get_db)):
    """Chat with AI resume assistant"""
    reply = await generate_reply(db, request.message)
    return ChatResponse(reply=reply)

@app.get("/resume-text", tags=["Portfolio"])
async def get_resume_text(db: Session = Depends(get_db)):
    """Get resume text for AI context"""
    from .models import Resume
    resume = db.query(Resume).first()
    if not resume:
        return {"content": "No resume found in database"}
    return {"content": resume.content}

@app.options("/{full_path:path}", tags=["CORS"])
async def preflight_handler(full_path: str):
    """Handle CORS preflight requests"""
    return {}

