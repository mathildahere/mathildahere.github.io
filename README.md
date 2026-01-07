# Mathilda Dellanova - Portfolio Website

A modern, elegant portfolio website built with Next.js and Tailwind CSS, featuring a dark theme with pink accents.

## Features

- ✨ Modern and elegant design with dark mode
- 🎨 Pink accent colors with smooth animations
- 📱 Fully responsive (desktop, tablet, mobile)
- ⚡ Built with Next.js 15 and Tailwind CSS
- 🎯 Smooth scroll animations and hover effects
- 🚀 Optimized for GitHub Pages deployment

## Sections

- **Hero**: Introduction with name, title, and social links
- **About**: Personal introduction and background
- **Skills**: 19 skill logos with hover effects
- **Projects**: Showcase of 5 projects (initially shows 3, expandable)
- **Experience**: Work history with 5 positions (initially shows 3, expandable)
- **CV Download**: Button to download resume (link to /cv.pdf)

## Tech Stack

- Next.js 15.5.9
- React 19
- TypeScript
- Tailwind CSS
- React Icons

## Getting Started

### Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This will create an optimized static export in the `out` directory.

## Deployment to GitHub Pages

### Option 1: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The static files will be in the `out` directory

3. Push the contents of `out` directory to the `gh-pages` branch or configure GitHub Pages to use the main branch

### Option 2: GitHub Actions (Recommended)

You can set up GitHub Actions to automatically build and deploy on push. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## Customization

### Update Content

- **Personal Info**: Edit `components/Hero.tsx`
- **About Section**: Edit `components/About.tsx`
- **Skills**: Edit the skills array in `components/Skills.tsx`
- **Projects**: Edit the projects array in `components/Projects.tsx`
- **Experience**: Edit the experiences array in `components/Experience.tsx`

### Update Social Links

Edit the `socialLinks` array in `components/Hero.tsx`:

```typescript
const socialLinks = [
  { icon: FaGithub, href: 'YOUR_GITHUB_URL', label: 'GitHub' },
  { icon: FaLinkedin, href: 'YOUR_LINKEDIN_URL', label: 'LinkedIn' },
  { icon: FaMedium, href: 'YOUR_MEDIUM_URL', label: 'Medium' },
  { icon: FaEnvelope, href: 'mailto:YOUR_EMAIL', label: 'Email' },
];
```

### Add Your CV

Place your CV file as `cv.pdf` in the `public` directory. The download button in the Experience section will link to it.

### Color Customization

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  'dark-bg': '#0a0a0a',
  'dark-card': '#1a1a1a',
  'dark-border': '#2a2a2a',
  'pink-accent': '#ff006e',
  'pink-light': '#ff5c9d',
  'pink-dark': '#cc0058',
}
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page combining all components
│   └── globals.css     # Global styles and Tailwind imports
├── components/
│   ├── Navigation.tsx  # Sticky navigation bar
│   ├── Hero.tsx        # Hero section with social links
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills grid with logos
│   ├── Projects.tsx    # Projects showcase
│   ├── Experience.tsx  # Work experience timeline
│   └── Footer.tsx      # Footer with attribution
├── public/             # Static files (add cv.pdf here)
└── out/               # Build output (generated)
```

## License

© 2026 Mathilda Dellanova. All rights reserved.

## Inspiration

- [Brittany Chiang](https://brittanychiang.com/)
- [Patrick David](https://bepatrickdavid.com/)
