# AI Portfolio Backend

Fast, modern Python backend built with FastAPI for an AI-powered portfolio website.

## Quick Start

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment
cp ../.env.example .env
# Edit .env with your OpenRouter API key

# Run server
uvicorn app.main:app --reload
```

Backend will be available at `http://localhost:8000`

## Features

- 🚀 Built with FastAPI (async/await)
- 🤖 OpenRouter AI integration (free models)
- 🗄️ SQLAlchemy ORM with SQLite/PostgreSQL
- 📚 Auto-generated API documentation (Swagger UI)
- 🔐 CORS enabled for frontend integration
- ⚡ High performance async operations
- 📝 Fully typed with Pydantic models

## Project Structure

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py          # FastAPI app & endpoints
│   ├── database.py      # Database configuration
│   ├── models.py        # SQLAlchemy models
│   ├── schemas.py       # Pydantic models
│   ├── config.py        # Environment config
│   ├── chat_service.py  # Chat logic
│   └── openrouter.py    # OpenRouter API client
└── requirements.txt     # Python dependencies
```

## API Endpoints

### Health & Status
```
GET /
- Health check endpoint
- Returns: {"status": "ok", "message": "..."}
```

### Portfolio Data
```
GET /portfolio
- Get complete portfolio information
- Returns: Portfolio object with projects, skills, experience

GET /resume-text
- Get resume content for AI context
- Returns: {"content": "..."}
```

### AI Chat
```
POST /chat
- Send message to AI assistant
- Request: {"message": "Your question"}
- Response: {"reply": "AI response"}
```

### Documentation
```
GET /docs              # Swagger UI
GET /redoc             # ReDoc documentation
```

## Configuration

### Environment Variables

Create `.env` file:
```
OPENROUTER_API_KEY=sk-your-key-here
DATABASE_URL=sqlite:///./portfolio.db
```

### Database Options

**SQLite (Development):**
```
DATABASE_URL=sqlite:///./portfolio.db
```

**PostgreSQL (Production):**
```
DATABASE_URL=postgresql://user:password@localhost:5432/ai_portfolio
```

**MySQL:**
```
DATABASE_URL=mysql+pymysql://user:password@localhost/ai_portfolio
```

### OpenRouter Configuration

1. Get free API key: https://openrouter.ai
2. Add to `.env`: `OPENROUTER_API_KEY=your_key`
3. Models available:
   - `mistralai/mistral-7b-instruct` (recommended, free)
   - `meta-llama/llama-2-7b-chat`
   - `openai/gpt-3.5-turbo`
   - See https://openrouter.ai/docs#models for more

## Installation

### Requirements
- Python 3.8+
- pip (Python package manager)

### Install Dependencies
```bash
pip install -r requirements.txt
```

### Dependencies
- **fastapi** - Web framework
- **uvicorn** - ASGI server
- **sqlalchemy** - ORM
- **psycopg2-binary** - PostgreSQL adapter
- **pydantic** - Data validation
- **httpx** - Async HTTP client
- **python-dotenv** - Environment variables

## Running the Server

### Development Mode
```bash
uvicorn app.main:app --reload
```
- Auto-restarts on file changes
- Debug mode enabled
- Available at http://localhost:8000

### Production Mode
```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

### With Gunicorn (Production)
```bash
gunicorn -w 4 -k uvicorn.workers.UvicornWorker app.main:app
```

## Database Operations

### Initialize Database
Database tables are created automatically on startup via:
```python
Base.metadata.create_all(bind=engine)
```

### Add Resume Content
```python
from sqlalchemy.orm import Session
from app.models import Resume

def add_resume(db: Session, content: str):
    resume = Resume(content=content)
    db.add(resume)
    db.commit()
    return resume
```

## Customization

### Update Portfolio Data

Edit `app/main.py` - `get_portfolio()` endpoint:
```python
@app.get("/portfolio")
async def get_portfolio():
    portfolio_data = {
        "name": "Your Name",
        "title": "Your Title",
        "bio": "Your bio",
        # ... more data
    }
    return portfolio_data
```

### Update Chat System

Edit `app/chat_service.py`:
```python
SYSTEM_PROMPT = """
Your custom system prompt here
"""
```

### Change AI Model

Edit `app/openrouter.py`:
```python
payload = {
    "model": "mistralai/mistral-7b-instruct",  # Change this
    "messages": messages
}
```

## Testing

### Test with cURL
```bash
# Health check
curl http://localhost:8000/

# Get portfolio
curl http://localhost:8000/portfolio

# Chat endpoint
curl -X POST http://localhost:8000/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What are your skills?"}'
```

### Test with Python
```python
import requests

# Health check
response = requests.get("http://localhost:8000/")
print(response.json())

# Chat
response = requests.post(
    "http://localhost:8000/chat",
    json={"message": "Tell me about yourself"}
)
print(response.json())
```

## Deployment

### Railway (Recommended for Easy Deployment)

1. Create account at https://railway.app
2. Create new project
3. Connect GitHub repository
4. Add environment variables:
   - `OPENROUTER_API_KEY`
   - `DATABASE_URL` (PostgreSQL)
5. Railway auto-deploys on git push

### Heroku

1. Create `Procfile`:
```
web: uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

2. Deploy:
```bash
heroku create your-app-name
heroku config:set OPENROUTER_API_KEY=your_key
heroku config:set DATABASE_URL=postgresql://...
git push heroku main
```

### Docker

Create `Dockerfile`:
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY app app
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

Build and run:
```bash
docker build -t ai-portfolio .
docker run -p 8000:8000 -e OPENROUTER_API_KEY=your_key ai-portfolio
```

### Cloudflare Tunnel

```bash
# Install cloudflared
# https://developers.cloudflare.com/cloudflare-one/connections/connect-applications/

# Create tunnel
cloudflared tunnel create portfolio

# Configure
cloudflared tunnel route dns portfolio api.yourdomain.com

# Run
cloudflared tunnel run portfolio
```

## Performance Tips

1. **Database Optimization:**
   - Use PostgreSQL for production
   - Enable connection pooling
   - Add indexes on frequently queried columns

2. **API Optimization:**
   - Cache portfolio data
   - Implement rate limiting
   - Use async/await for I/O operations

3. **AI Integration:**
   - Cache common responses
   - Implement request throttling
   - Monitor API usage

## Security Best Practices

- [ ] Never commit `.env` file
- [ ] Use strong, unique API keys
- [ ] Enable HTTPS in production
- [ ] Implement rate limiting
- [ ] Validate all input data
- [ ] Use CORS carefully (specify origins)
- [ ] Keep dependencies updated
- [ ] Use environment variables for secrets

## Common Issues & Solutions

### CORS Errors
**Problem:** Frontend can't reach backend
**Solution:** Ensure CORS middleware is configured in `main.py`:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to specific domains in production
)
```

### OpenRouter API Errors
**Problem:** Chat returns error
**Solution:**
- Verify API key is correct
- Check API key has credits
- Ensure model name is valid
- Check request format

### Database Errors
**Problem:** Database connection fails
**Solution:**
- Verify DATABASE_URL is correct
- Ensure database server is running
- Check database credentials
- For SQLite: ensure write permissions

### Port Already in Use
**Problem:** Port 8000 is already in use
**Solution:**
```bash
uvicorn app.main:app --port 8001  # Use different port
```

## Monitoring & Debugging

### Enable Debug Logging
```python
import logging
logging.basicConfig(level=logging.DEBUG)
```

### Monitor API Calls
Use the Swagger UI at `/docs` to test endpoints in real-time

### Check Health
```bash
curl http://localhost:8000/
```

## Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Submit pull request

## License

MIT License - Use freely in personal and commercial projects

## Support & Resources

- FastAPI Docs: https://fastapi.tiangolo.com/
- OpenRouter API: https://openrouter.ai/docs
- SQLAlchemy Docs: https://docs.sqlalchemy.org/
- Python Async: https://docs.python.org/3/library/asyncio.html

---

**Built with ❤️ using FastAPI, SQLAlchemy, and OpenRouter**
