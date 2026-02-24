# 🚀 Complete Setup Guide

This guide will walk you through setting up your AI-powered portfolio website from scratch.

## Prerequisites

### System Requirements
- **Node.js**: 16.0.0 or higher ([Download](https://nodejs.org/))
- **Python**: 3.8 or higher ([Download](https://www.python.org/))
- **Git**: For version control ([Download](https://git-scm.com/))
- **Code Editor**: VS Code, WebStorm, or your preference

### Required API Keys
- **OpenRouter API Key** (Free): https://openrouter.ai

## Step-by-Step Setup

### 1. Get Your OpenRouter API Key

1. Visit https://openrouter.ai
2. Click "Sign in" (or create account if needed)
3. Go to Dashboard → API Keys
4. Create a new API key
5. Copy the key (starts with `sk-`)
6. Keep it safe (don't share publicly!)

### 2. Clone or Download Repository

```bash
# Using Git
git clone <your-repository-url>
cd ai-portfolio

# OR download as ZIP and extract
```

### 3. Set Up Backend

#### 3.1 Create virtual environment
```bash
cd backend

# On macOS/Linux:
python3 -m venv venv
source venv/bin/activate

# On Windows:
python -m venv venv
venv\Scripts\activate
```

You should see `(venv)` in your terminal prompt.

#### 3.2 Install Python dependencies
```bash
pip install -r requirements.txt
```

#### 3.3 Create environment configuration
```bash
# Copy the example file
cd ..
cp .env.example .env

# Edit the .env file and add your OpenRouter API key
# .env file contents:
# OPENROUTER_API_KEY=sk-your-api-key-here
# DATABASE_URL=sqlite:///./portfolio.db
```

#### 3.4 Start backend server
```bash
cd backend
source venv/bin/activate  # Ensure venv is activated
uvicorn app.main:app --reload
```

**Expected output:**
```
Uvicorn running on http://127.0.0.1:8000
```

✅ Backend is running! Check http://localhost:8000/docs in your browser to see API documentation.

### 4. Set Up Frontend

Open a **new terminal window** (keep backend running in the other).

#### 4.1 Navigate to frontend
```bash
cd frontend
```

#### 4.2 Install dependencies
```bash
npm install
```

This may take 2-5 minutes depending on your internet speed.

#### 4.3 Start development server
```bash
npm run dev
```

**Expected output:**
```
  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

✅ Frontend is running! Open http://localhost:5173 in your browser.

### 5. Test Everything

#### 5.1 Visit the website
Open http://localhost:5173 in your browser. You should see:
- Modern portfolio design
- Navbar with navigation
- Hero section
- Projects section
- Skills section
- Experience section
- Chat section
- Contact section
- Footer

#### 5.2 Test the chat
1. Scroll to "AI Resume Assistant" section
2. Type a question: "What are your main skills?"
3. Click Send
4. You should see an AI response

If chat works → Everything is set up correctly! ✅

#### 5.3 Test API endpoint
Open http://localhost:8000/docs in browser to test API endpoints directly.

## Customization

### Update Your Information

#### Frontend Changes
Edit these files with your information:

**1. Hero Section** - `frontend/src/components/Hero.tsx`
- Update your name and title
- Modify social media links
- Change CTA button text

**2. Projects** - `frontend/src/components/Projects.tsx`
- Replace with your actual projects
- Update project descriptions
- Add correct project links

**3. Skills** - `frontend/src/components/Skills.tsx`
- Update your tech stack
- Add/remove skill categories
- Customize icons

**4. Experience** - `frontend/src/components/Experience.tsx`
- Add your work history
- Update company names
- Add your achievements

**5. Contact** - `frontend/src/components/Contact.tsx`
- Update email address
- Add phone number
- Update social media links

#### Backend Changes
Edit `backend/app/main.py` - `get_portfolio()` function to update:
- Your name and bio
- Projects list
- Skills categories
- Experience details

### Theme Customization

#### Change Colors
Edit `frontend/tailwind.config.ts`:
```typescript
colors: {
  primary: '#0f172a',        // Dark background
  secondary: '#1e293b',      // Lighter background
  accent: '#3b82f6',         // Blue accent (change to your color)
  'accent-light': '#60a5fa',
}
```

Popular color codes:
- Blue: `#3b82f6`
- Purple: `#8b5cf6`
- Pink: `#ec4899`
- Green: `#10b981`
- Orange: `#f97316`

#### Change Fonts
Edit `frontend/src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap');
```

### Update Resume Content

1. Create a `resume.txt` file in backend/app/
2. Add your resume content
3. Update `chat_service.py` to load from file:
```python
with open('app/resume.txt', 'r') as f:
    resume_content = f.read()
```

## Deployment

### Deploy to GitHub

1. Create GitHub account (https://github.com)
2. Create new repository
3. Initialize and push:
```bash
git init
git add .
git commit -m "Initial commit: AI portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ai-portfolio.git
git push -u origin main
```

### Deploy Frontend to Vercel

1. Go to https://vercel.com
2. Import your GitHub repository
3. Select `frontend` folder as root
4. Deploy!

Your frontend will be live at `https://your-project.vercel.app`

### Deploy Backend to Railway

1. Go to https://railway.app
2. Create new project
3. Connect GitHub repository
4. Add environment variables:
   - `OPENROUTER_API_KEY`: Your API key
   - `DATABASE_URL`: PostgreSQL connection string
5. Railway auto-deploys!

Your backend will be live at `https://your-project.up.railway.app`

### Connect Frontend to Deployed Backend

Update `frontend/src/services/api.ts`:
```typescript
const API_URL = "https://your-project.up.railway.app";
```

## Troubleshooting

### Backend Issues

**"Port 8000 already in use"**
```bash
# Use different port
uvicorn app.main:app --port 8001 --reload
```

**"Module not found" error**
```bash
# Reinstall dependencies
pip install -r requirements.txt
```

**"OpenRouter API key invalid"**
- Check you're using the correct API key
- Ensure it starts with `sk-`
- Verify in .env file (no extra spaces)

### Frontend Issues

**"Cannot find module" errors**
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Port 5173 already in use**
```bash
# Use different port
npm run dev -- --port 3000
```

**Styles not showing**
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server
- Check tailwind.config.ts

### Chat Not Working

1. **Check backend is running:**
   - Ensure uvicorn is running
   - Visit http://localhost:8000/docs

2. **Check API key:**
   - Verify OPENROUTER_API_KEY in .env
   - Check API key is valid on openrouter.ai

3. **Check browser console:**
   - Open DevTools (F12)
   - Go to Console tab
   - Look for error messages

4. **Test API directly:**
   ```bash
   curl -X POST http://localhost:8000/chat \
     -H "Content-Type: application/json" \
     -d '{"message": "Hello"}'
   ```

## Next Steps

### 1. Customize Content
- [ ] Update your projects
- [ ] Add your real work experience
- [ ] Update skills list
- [ ] Add your photo/avatar

### 2. Deploy Project
- [ ] Push to GitHub
- [ ] Deploy frontend to Vercel
- [ ] Deploy backend to Railway
- [ ] Update API URL in frontend

### 3. Add Features
- [ ] Contact form with email notifications
- [ ] Blog section
- [ ] Download resume PDF
- [ ] Dark/light theme toggle

### 4. Optimize
- [ ] Add Google Analytics
- [ ] Optimize images
- [ ] Add SEO meta tags
- [ ] Test on mobile devices

## What to Do If Stuck

1. **Check logs:**
   - Backend: Terminal where uvicorn is running
   - Frontend: Browser console (F12)

2. **Verify configuration:**
   - Is .env file created?
   - Is API key correct?
   - Are both ports free?

3. **Restart services:**
   - Stop backend (Ctrl+C)
   - Stop frontend (Ctrl+C)
   - Start backend first
   - Wait 2 seconds, then start frontend

4. **Helpful Resources:**
   - FastAPI Docs: https://fastapi.tiangolo.com/
   - React Docs: https://react.dev/
   - Tailwind Docs: https://tailwindcss.com/
   - OpenRouter Docs: https://openrouter.ai/docs

## Support

If you encounter issues:

1. **Check the README files:**
   - Root: [README.md](./README.md)
   - Backend: [backend/README.md](./backend/README.md)
   - Frontend: [frontend/README.md](./frontend/README.md)

2. **Search GitHub Issues:** Look for similar problems

3. **Ask the community:**
   - FastAPI Discord
   - React Discord
   - Stack Overflow

---

## Summary

You now have a fully functional AI-powered portfolio! 🎉

- **Frontend:** React + TypeScript + Tailwind
- **Backend:** FastAPI + Python
- **AI:** OpenRouter (free models)
- **Features:** Chat with AI, resume Q&A, beautiful design

Congratulations! 🚀

**Happy coding!** 💻
