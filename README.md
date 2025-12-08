# Nutree AI Landing Page

Next.js 14 landing page for Nutree AI - AI-powered nutrition tracking platform.

**Live Demo**: Coming soon
**Source**: [trandactri/nutree-web](https://github.com/trandactri/nutree-web)
**License**: BSD-3-Clause

## Quick Start

### Prerequisites

- Node.js 18.17+ or 20+
- npm 9+ or yarn 4+

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev          # Start dev server (hot reload)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## Project Structure

```
web/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with fonts, metadata
│   │   ├── page.tsx                # Home page
│   │   ├── changelog/
│   │   │   └── page.tsx            # Changelog page
│   │   └── globals.css             # Global styles, CSS variables
│   ├── components/                 # Reusable React components (Phase 2+)
│   ├── lib/
│   │   ├── constants.ts            # Brand constants, site config
│   │   └── utils.ts                # Utility functions (Phase 2+)
│   └── types/
│       └── index.ts                # TypeScript type definitions
├── public/
│   ├── logo.png                    # Brand logo
│   ├── favicon.ico                 # Browser favicon (Phase 2+)
│   └── apple-touch-icon.png        # iOS home screen icon (Phase 2+)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── postcss.config.js
├── .eslintrc.json
└── .gitignore
```

## Design System

### Colors

**Brand Palette** (extracted from Nutree logo):

```
Primary Forest Green:   #1A4739 (rgb(26, 71, 57))
Teal:                  #29B6A1 (rgb(41, 182, 161))
Emerald:               #2D8B70 (rgb(45, 139, 112))

Background:            #FAFCFB (off-white, green tint)
Foreground:            #0F1F1A (near black, green tint)
Muted:                 #6B7B75 (muted green-gray)
Border:                #D4E5DE (soft green border)

Nutrition Accents:
  Protein:             #E91E63 (pink)
  Carbs:               #FFC107 (amber)
  Fat:                 #9C27B0 (purple)
  Calories:            #FF5722 (deep orange)
```

### Typography

**Display Font**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- Weight: 400, 500, 600, 700, 800
- Used for headings, hero section
- Modern, warm, characterful personality

**Body Font**: [DM Sans](https://fonts.google.com/specimen/DM+Sans)
- Weight: 400, 500, 700
- Used for body text, UI elements
- Clean, readable, excellent readability

Both fonts support:
- Latin (EN, ES, FR, DE)
- Vietnamese (VI)
- Extended character sets
- Multiple weight variations

### Effects & Animations

**Aurora Background**: Animated radial gradient mesh effect
- Blur: 80px
- Colors: Forest green (rgba(45, 139, 112, 0.15)) + Teal (rgba(41, 182, 161, 0.12))
- Animation: 8-10s infinite oscillation

**Button Styles**:
- Primary: Gradient background, rounded full, shadow on hover
- Secondary: Border-based, transparent fill on hover

**Animations**:
- fade-in: 0.6s ease-out
- slide-up: 0.6s ease-out
- aurora-shift: 8s infinite

See `src/app/globals.css` for full implementation.

## Configuration

### Tailwind CSS

Custom theme configured in `tailwind.config.ts`:
- Brand colors with custom names
- Custom animation keyframes
- Font family variables
- Gradient backgrounds

### Next.js

Configuration in `next.config.js`:
- **output**: standalone (supports Docker)
- **images**: Remote patterns for Unsplash, Pexels, GitHub
- **optimization**: Package import optimization for Framer Motion

### TypeScript

Strict mode enabled in `tsconfig.json`:
- `strict: true`
- `noImplicitAny: true`
- `moduleResolution: bundler`
- Path aliases: `@/*` → `./src/*`

## Development Workflow

### Creating Components

```tsx
// src/components/Header.tsx
import clsx from 'clsx';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={clsx('bg-background', className)}>
      {/* Component content */}
    </header>
  );
}
```

### Adding Styles

Use Tailwind utility classes with custom theme colors:

```tsx
<button className="bg-gradient-brand text-white px-8 py-4 rounded-full hover:shadow-lg">
  Get Started
</button>
```

For complex styles, use `globals.css` with `@layer` directive:

```css
@layer components {
  .custom-component {
    @apply flex items-center gap-4;
  }
}
```

### Type Safety

Always define props interfaces:

```tsx
interface Props {
  title: string;
  count?: number;
  onClick: (id: string) => void;
}

export function Component({ title, count, onClick }: Props) {
  // ...
}
```

## Code Standards

**Principles**: KISS (Keep It Simple) • DRY (Don't Repeat) • YAGNI (You Aren't Gonna Need It)

**Rules**:
- File size: <200 lines (split larger files)
- TypeScript strict mode: No `any` types
- No hardcoded values: Use `src/lib/constants.ts`
- No secrets in code: Use environment variables
- Document complex logic with comments

**Formatting**:
```bash
npm run lint        # Check ESLint rules
npm run type-check  # Verify TypeScript types
```

## Environment Variables

No environment variables required for development. Optional for advanced features:

```bash
# .env.local (not committed)
NEXT_PUBLIC_API_URL=https://api.nutreeai.com
```

## Building for Production

```bash
npm run build
npm start
```

Optimizations applied:
- Next.js static optimization
- CSS minification via PostCSS
- JavaScript code splitting
- Image optimization (when using `next/image`)

## Docker Support

The project is configured for Docker deployment:

```bash
# Build image
docker build -t nutree-web:latest .

# Run container
docker run -p 3000:3000 nutree-web:latest
```

See the main project [Deployment Guide](../docs/deployment-guide.md) for full Docker/K8s setup.

## Performance Targets

- Lighthouse Performance: >= 90
- Core Web Vitals: All green
- Build time: < 30s
- Dev server startup: < 5s

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS Safari 12+, Chrome Mobile 90+

## Phase Plan

This is Phase 1 of a 5-phase rollout:

- **Phase 1** ✅: Next.js setup, design system, configuration (COMPLETE)
- **Phase 2** 🔄: Hero section, header, footer components
- **Phase 3** ⏳: Features showcase, screenshots, testimonials
- **Phase 4** ⏳: GitHub changelog integration, changelog page
- **Phase 5** ⏳: Performance optimization, SEO, deployment

See [Phase 1 Implementation Plan](../plans/20251208-1432-nutree-landing-page/phase-01-nextjs-setup.md) for details.

## Contributing

1. Create a feature branch: `git checkout -b feature/description`
2. Make changes following code standards
3. Run linting: `npm run lint`
4. Run type check: `npm run type-check`
5. Commit: `git commit -m "feat(scope): description"`
6. Push to remote and create PR

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)

## Project Links

- **Main Project**: [nutree-universe](https://github.com/nutree/nutree-universe)
- **Backend**: [FastAPI service](../backend/README.md)
- **Mobile**: [Flutter app](../mobile/README.md)
- **Docs**: [Project documentation](../docs/)

## License

BSD-3-Clause - See LICENSE file for details
