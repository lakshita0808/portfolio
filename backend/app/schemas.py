from pydantic import BaseModel
from typing import List, Optional

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    reply: str

class ExperienceModel(BaseModel):
    role: str
    company: str
    period: str
    description: str
    achievements: List[str]

class ProjectModel(BaseModel):
    title: str
    description: str
    tech: List[str]
    link: Optional[str] = None
    github: Optional[str] = None

class EducationModel(BaseModel):
    degree: str
    institution: str
    field: str
    duration: str
    location: str
    gpa: Optional[str] = None
    highlights: Optional[List[str]] = None

class AchievementModel(BaseModel):
    title: str
    description: str
    date: str
    link: Optional[str] = None
    icon: Optional[str] = None

class PositionModel(BaseModel):
    title: str
    organization: str
    duration: str
    location: str
    description: str
    responsibilities: List[str]
    image: Optional[str] = None

class SocialLinkModel(BaseModel):
    name: str
    url: str
    icon: Optional[str] = None

class PortfolioData(BaseModel):
    name: str
    title: str
    bio: str
    profile_picture: Optional[str] = None
    resume_url: Optional[str] = None
    experiences: List[ExperienceModel]
    projects: List[ProjectModel]
    skills: dict
    education: List[EducationModel]
    achievements: List[AchievementModel]
    positions: List[PositionModel]
    social_links: List[SocialLinkModel]


