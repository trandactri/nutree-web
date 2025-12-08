# Nutree AI Landing Page - Onboarding Guide

## Quick Start

```bash
cd /Users/tonytran/Projects/nutree-universe/web
npm install
npm run dev
```

Visit http://localhost:3000

## Prerequisites

- Node.js 18+
- npm 9+

## Environment Variables

Currently no environment variables required for Phase 1.

For Phase 4 (GitHub API integration), you'll need:

```bash
# .env.local
GITHUB_TOKEN=your_github_personal_access_token
```

## Project Structure

```
web/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout with fonts
│   │   ├── page.tsx      # Home page
│   │   └── changelog/    # Changelog page
│   ├── components/       # React components (Phase 2+)
│   ├── lib/              # Utilities & constants
│   └── types/            # TypeScript types
├── public/               # Static assets
└── [config files]        # Build configs
```

## Development Commands

```bash
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
npm run type-check # TypeScript validation
```

## Design System

**Brand Colors:**
- Primary Forest: `#1A4739`
- Primary Teal: `#29B6A1`
- Primary Emerald: `#2D8B70`

**Fonts:**
- Display: Plus Jakarta Sans (headings)
- Body: DM Sans (paragraphs)

**Aurora Background:**
Use `aurora-bg` class for mesh gradient effect.

## Next Steps

**Phase 2 (Ready to implement):**
- Header navigation component
- Footer with GitHub link
- Hero section with tagline
- Aurora background implementation

**Phase 3:**
- Feature showcase section
- Demo video placeholder
- Screenshot placeholders

**Phase 4:**
- GitHub API integration
- Changelog page with releases

**Phase 5:**
- Dockerfile for deployment
- Docker Compose configuration

## Resources

- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- Project Plan: `/plans/20251208-1432-nutree-landing-page/`

## Support

- Issues: GitHub Issues
- Documentation: `/web/README.md`
- Plan: `/plans/20251208-1432-nutree-landing-page/plan.md`
