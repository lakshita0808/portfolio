# AI Portfolio Frontend

Modern React + TypeScript frontend for an AI-powered portfolio website with real-time chat functionality.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Components

### Navbar
- Fixed navigation bar with mobile menu
- Smooth scrolling to sections
- Responsive design

### Hero
- Full-screen hero section with animations
- Call-to-action buttons
- Social media links
- Animated background elements

### Projects
- Showcase of featured projects
- Tech stack tags
- External links and GitHub repos
- Hover animations

### Skills
- Categorized technical skills
- Icons for each category
- Responsive grid layout

### Experience
- Timeline of work experience
- Company details and achievements
- Easy to customize

### Chat Section
- Real-time AI chat interface
- Message history with auto-scroll
- Loading states and error handling
- Keyboard support (Enter to send)

### Contact
- Multiple contact methods
- Social media links
- Contact information cards
- Copy-friendly details

### Footer
- Quick navigation links
- Social media links
- Copyright information
- Back-to-top button

## Key Features

- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎨 Modern Tailwind CSS styling
- ⚡ Lightning-fast with Vite
- 🤖 AI chat integration
- 🔄 Auto-scrolling messages
- 🎯 Smooth section navigation

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── ChatSection.tsx
│   ├── MessageBubble.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── services/
│   └── api.ts
├── types/
│   └── chat.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## Customization

### Update Profile Information

Edit the sample data in components:
- **Projects**: `components/Projects.tsx` - Update project list
- **Skills**: `components/Skills.tsx` - Add/modify skills
- **Experience**: `components/Experience.tsx` - Update job history
- **Hero**: `components/Hero.tsx` - Update introduction
- **Contact**: `components/Contact.tsx` - Update contact info

### Change Color Scheme

Update colors in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#0f172a',      // Dark background
  secondary: '#1e293b',    // Lighter background
  accent: '#3b82f6',       // Main accent color
  'accent-light': '#60a5fa', // Lighter accent
}
```

### Modify Fonts

Update in `index.css` and `tailwind.config.ts`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap');
```

### Add New Sections

1. Create new component in `src/components/NewSection.tsx`
2. Import in `App.tsx`
3. Add to main layout
4. Update `Navbar.tsx` with new link

## API Integration

Backend endpoint configured in `src/services/api.ts`:
```typescript
const API_URL = "http://localhost:8000";
```

For production, update this to your deployed backend URL.

## Styling System

### Tailwind Utilities
- `btn-primary` - Primary button style
- `btn-secondary` - Secondary button style
- `glass` - Glassmorphism effect
- `section-title` - Section heading style
- `gradient-text` - Gradient text effect

### Custom Animations
- `animate-float` - Floating animation
- Keyframe animations defined in `index.css`

## Performance Optimization

- Images optimized and lazy-loaded
- Smooth animations don't block interactivity
- Efficient component re-renders
- Minimal bundle size with Tree-shaking
- Optimized for Core Web Vitals

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Modern mobile browsers

## Dependencies

### Production
- **react** (^19.2.0) - UI library
- **react-dom** (^19.2.0) - DOM rendering
- **axios** (^1.7.0) - HTTP client
- **lucide-react** (^0.344.0) - Icons
- **framer-motion** (^11.5.4) - Animations

### Development
- **vite** (^8.0.0-beta.13) - Build tool
- **typeScript** (~5.9.3) - Type safety
- **tailwindcss** (^3.4.1) - Styling
- **postcss** (^8.4.32) - CSS processor
- **autoprefixer** (^10.4.17) - Vendor prefixes
- **eslint** (^9.39.1) - Linting

## Deployment

### Vercel (Recommended)
```bash
npm run build
# Push to GitHub, connect to Vercel
```

### Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### GitHub Pages
Update `vite.config.ts`:
```typescript
export default {
  base: '/your-repo-name/',
}
```

### Traditional Hosting
```bash
npm run build
# Upload 'dist' folder to your server
```

## Environment Variables

Create a `.env.local` file (for local development):
```
VITE_API_URL=http://localhost:8000
```

Update in `services/api.ts`:
```typescript
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
```

## Troubleshooting

**Chat not connecting?**
- Ensure backend is running on `http://localhost:8000`
- Check browser console (F12 → Console)
- Verify API endpoint in `services/api.ts`

**Styles not appearing?**
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server
- Check Tailwind CSS config

**Build errors?**
- Delete `node_modules` and `dist`
- Run `npm install` again
- Check TypeScript errors: `tsc --noEmit`

**Animations stuttering?**
- Check GPU acceleration in browser
- Reduce animation complexity
- Update Framer Motion library

## Development Tips

```bash
# Type checking
tsc --noEmit

# Linting
npm run lint

# Format code
npx prettier --write .

# Analyze bundle
npm run build -- --analyze
```

## Contributing

Feel free to fork and customize this template!

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Submit a pull request

## License

MIT - Feel free to use for personal and commercial projects

---

**Built with ❤️ using React, TypeScript, Vite, and Tailwind CSS**

import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
