# Deployment Guide

Complete guide to deploying your AI portfolio to production using free and premium services.

## Quick Deployment Summary

| Component | Service | Cost | Setup Time |
|-----------|---------|------|-----------|
| Frontend | Vercel | Free | 5 minutes |
| Backend | Railway | Free (500 hours/month) | 10 minutes |
| Database | Railway PostgreSQL | Free (5GB) | Included |
| Domain | Namecheap | From $0.99 | Variable |

## Frontend Deployment

### Option 1: Vercel (Recommended)

**Easiest option for React apps. Free tier is very generous.**

1. **Sign Up**
   - Go to https://vercel.com
   - Click "Sign Up"
   - Use GitHub account (recommended)

2. **Import Project**
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure**
   - Root Directory: `frontend`
   - Framework: React
   - Click "Deploy"

4. **Get URL**
   - Vercel assigns you a URL like: `your-project.vercel.app`
   - Your frontend is live!

5. **Custom Domain (Optional)**
   - Go to Project Settings
   - Add your domain
   - Update DNS records in domain registrar

### Option 2: Netlify

1. Go to https://netlify.com
2. Connect GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `frontend/dist`
5. Deploy!

### Option 3: GitHub Pages

```bash
# In frontend/vite.config.ts
export default {
  base: '/your-repo-name/',
}

# Build and push
npm run build
git add dist
git commit -m "Deploy"
git push
```

## Backend Deployment

### Option 1: Railway (Recommended)

**Best free tier for Python backends. 500 hours/month free.**

1. **Sign Up**
   - Go to https://railway.app
   - Click "Start Project"
   - Select "GitHub" and authorize
   - Or use email signup

2. **Create Project**
   - Click "New Project"
   - Select "Deploy from GitHub"
   - Select your repository

3. **Configure**
   - Root directory: `backend`
   - Railway auto-detects Python

4. **Set Environment Variables**
   - Click on your project → Variables
   - Add:
     ```
     OPENROUTER_API_KEY=sk-your-key
     DATABASE_URL=postgresql://[connection-string]
     ```

5. **Deploy**
   - Railway auto-deploys on git push
   - Your backend URL: `your-project.up.railway.app`

6. **Setup PostgreSQL Database**
   - In Railway: Click "New"
   - Select "PostgreSQL"
   - Get connection string from Variables
   - Update DATABASE_URL in main project

### Option 2: Heroku

**Heroku Eco Dyno: $5/month or free trial**

1. **Sign Up**
   - https://heroku.com
   - Create account

2. **Create App**
   - Click "New" → "Create new app"
   - Enter app name: `your-portfolio-api`
   - Select region

3. **Deploy with Git**
   ```bash
   heroku login
   heroku git:remote -a your-portfolio-api
   git push heroku main
   ```

4. **Set Environment Variables**
   ```bash
   heroku config:set OPENROUTER_API_KEY=sk-your-key
   heroku config:set DATABASE_URL=postgresql://...
   ```

5. **Create Database**
   - Add "Heroku Postgres" from Resources
   - Get connection string

### Option 3: PythonAnywhere

1. Go to https://www.pythonanywhere.com
2. Sign up (free tier available)
3. Upload code via Git
4. Configure WSGI
5. Set domain

## Database Setup

### Railway PostgreSQL (Included in free tier)

```bash
# In Railway dashboard:
# 1. Click "New" → "PostgreSQL"
# 2. Get connection string from Variables tab
# 3. Add to your backend environment:
#    DATABASE_URL=postgresql://user:pass@host:port/dbname
```

### Free Database Alternatives

- **Railway PostgreSQL**: 5GB free
- **Heroku Postgres**: Available with app
- **Neon**: https://neon.tech (Free tier: 3 projects, 5GB)
- **Supabase**: https://supabase.com (Free tier: 500MB)

## Connect Frontend to Deployed Backend

### Update API URL

Edit `frontend/src/services/api.ts`:

```typescript
// Development
const API_URL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:8000'
  : 'https://your-api.railway.app';

// Or use environment variable
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
```

### For Vercel, create `frontend/.env.production`

```
VITE_API_URL=https://your-api.railway.app
```

## Custom Domain Setup

### Get a Domain

1. **Cheap Options:**
   - Namecheap: https://www.namecheap.com
   - Google Domains: https://domains.google
   - Bluehost: https://www.bluehost.com

2. **Free Domains:**
   - Freenom: https://www.freenom.com (limited)
   - GitHub Pages: username.github.io

### Connect to Vercel

1. Buy domain from registrar
2. In Vercel dashboard:
   - Project Settings → Domains
   - Add your domain
   - Follow DNS setup instructions
   - Point nameservers to Vercel

### Connect to Railway Backend

1. In Railway dashboard:
   - Project Settings → Domains
   - Add your API domain (e.g., api.yourdomain.com)
   - Update DNS records

## Using Cloudflare Tunnel

**Create a public tunnel to your local machine or private server:**

```bash
# Install cloudflared
# macOS:
brew install cloudflare/cloudflare/cloudflared

# Windows/Linux: Download from
# https://developers.cloudflare.com/cloudflare-one/connections/connect-applications/

# Create tunnel
cloudflared tunnel create portfolio

# Configure tunnel (edit ~/.cloudflared/config.yml)
tunnel: portfolio
credentials-file: /Users/.../.cloudflared/portfolio.json
ingress:
  - hostname: api.yourdomain.com
    service: http://localhost:8000
  - service: http_status:404

# Run tunnel
cloudflared tunnel run portfolio

# Update DNS: Add CNAME record pointing to your tunnel
```

## SSL/HTTPS

### Automatic (Recommended)

- **Vercel**: Automatic SSL
- **Railway**: Automatic SSL
- **Heroku**: Automatic SSL
- **Netlify**: Automatic SSL

### Manual with Let's Encrypt

```bash
# Using Certbot
pip install certbot
certbot certonly --standalone -d api.yourdomain.com

# Use certificates in your server
```

## CI/CD Pipeline

### GitHub Actions - Auto Deploy on Push

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Vercel
        run: |
          npm install -g vercel
          vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
        env:
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Health Check

After deployment, verify everything works:

```bash
# Check frontend
curl https://your-domain.com

# Check backend
curl https://api.yourdomain.com/docs

# Test chat endpoint
curl -X POST https://api.yourdomain.com/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello"}'
```

## Monitoring & Logging

### Railway Dashboard
- Real-time logs
- Deployment history
- Resource usage
- Database management

### Vercel Dashboard
- Build logs
- Function logs
- Analytics
- Performance metrics

### Debug Issues

```bash
# Check backend logs
railway logs --follow

# Check deployment status
vercel list

# Stream application logs
vercel logs your-project
```

## Cost Optimization

### Free Resources
- Vercel: Unlimited free deployments
- Railway: 500 hours/month free
- PostgreSQL: 5GB free on Railway
- Cloudflare: Free DNS & DDoS protection

### Budget Estimate
- Domain: ~$12/year
- Premium features: Optional
- **Total for basic setup: FREE!**

### Upgrade When Needed
- Railway Pro: $20/month (unlimited hours)
- Custom domain: ~$12/year
- Advanced features: Variable pricing

## Troubleshooting Deployment

### Frontend Won't Build

```bash
# Check for TypeScript errors
npm run build

# Look for missing dependencies
npm list

# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Backend Won't Start

```bash
# Check dependencies
pip list

# Test locally first
python -m uvicorn app.main:app --reload

# Check environment variables are set
echo $DATABASE_URL
echo $OPENROUTER_API_KEY
```

### Chat Returns 500 Error

- Check OPENROUTER_API_KEY is valid
- Check backend logs on Railway
- Test API endpoint manually
- Verify database connection

### CORS Errors

- Frontend URL must be in CORS allowed origins
- Update CORS config in `backend/app/main.py`
- Or use Cloudflare to proxy requests

## Post-Deployment Checklist

- [ ] Frontend loads correctly
- [ ] All pages accessible
- [ ] Chat functionality works
- [ ] API documentation accessible (/docs)
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Page load time <3 seconds
- [ ] SSL/HTTPS enabled
- [ ] Environment variables set correctly
- [ ] Database connection working
- [ ] OpenRouter API working

## Next Steps

1. ✅ Deploy frontend and backend
2. 📊 Setup analytics (Google Analytics, Vercel Analytics)
3. 🔐 Add security headers
4. 📧 Setup contact form with email
5. 📱 Test on multiple devices
6. 🔍 Submit to Google Search Console
7. 📈 Monitor performance metrics

---

**Your AI portfolio is now live! 🚀**

Share your deployment:
- GitHub: your-repo-url
- Live Site: your-domain.com
- API Docs: api.your-domain.com/docs

Good luck! 💫
