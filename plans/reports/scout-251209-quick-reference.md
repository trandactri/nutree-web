# Nutree AI Web - Quick Reference Guide

**Generated**: December 9, 2025  
**Phase Status**: 4/5 Complete (80%)

---

## Quick Stats

- **Framework**: Next.js 14.2.0
- **UI Library**: React 18.3.1
- **Styling**: Tailwind CSS 3.4.0
- **Animation**: Framer Motion 11.0.0
- **TypeScript**: 5.3.0 (Strict)
- **Components**: 14 reusable components
- **Pages**: 2 routes (/ and /changelog)
- **Build Time**: <30 seconds
- **Bundle Size**: ~300 kB (gzipped)

---

## File Locations by Purpose

### Core Pages
```
Home Page          → src/app/page.tsx
Changelog          → src/app/changelog/page.tsx
Root Layout        → src/app/layout.tsx
Global Styles      → src/app/globals.css
```

### Components (14 Total)

**Layout Components (4)**
```
Header             → src/components/layout/Header.tsx
Footer             → src/components/layout/Footer.tsx
Mobile Menu        → src/components/layout/MobileMenu.tsx
Aurora Background  → src/components/layout/AuroraBackground.tsx
```

**Section Components (5)**
```
Hero               → src/components/sections/Hero.tsx
Features           → src/components/sections/Features.tsx
Demo Video         → src/components/sections/DemoVideo.tsx
Download CTA       → src/components/sections/DownloadCTA.tsx
Release List       → src/components/sections/ReleaseList.tsx (Phase 4)
```

**UI Components (7)**
```
Button             → src/components/ui/Button.tsx
Logo               → src/components/ui/Logo.tsx
Feature Card       → src/components/ui/FeatureCard.tsx
Screenshot Frame   → src/components/ui/ScreenshotPlaceholder.tsx
Release Card       → src/components/ui/ReleaseCard.tsx (Phase 4)
```

### Utilities & Configuration
```
Class Merger       → src/lib/cn.ts
Constants          → src/lib/constants.ts
GitHub API         → src/lib/github.ts (Phase 4)
Custom Hook        → src/hooks/useInView.ts
Type Definitions   → src/types/index.ts
```

### Configuration Files
```
Tailwind Config    → tailwind.config.ts
TypeScript Config  → tsconfig.json
Next.js Config     → next.config.js
PostCSS Config     → postcss.config.js
ESLint Config      → .eslintrc.json
```

---

## Design System Quick Access

### Colors

**Primary Palette** (Brand)
```
Forest Green    #1A4739  → primary-forest      [Main brand color]
Teal            #29B6A1  → primary-teal        [Accent]
Emerald         #2D8B70  → primary-emerald     [Secondary]
```

**Semantic** (Neutral)
```
Background      #FAFCFB  → background          [Page background]
Foreground      #0F1F1A  → foreground          [Text]
Muted           #6B7B75  → muted               [Secondary text]
Border          #D4E5DE  → border              [Dividers]
```

**Using in Tailwind**
```html
<!-- Background -->
<div class="bg-background text-foreground">

<!-- Accents -->
<div class="bg-primary-forest text-primary-teal">

<!-- Borders -->
<div class="border-border/50">

<!-- Gradients -->
<div class="bg-gradient-brand">
```

### Typography

**Fonts Available** (Via CSS variables)
```
Display Font: Plus Jakarta Sans (--font-plus-jakarta)
Body Font:    DM Sans           (--font-dm-sans)
```

**Usage in Components**
```tsx
// Display font (headings)
<h1 className="font-display text-4xl">

// Body font (default)
<p className="font-body text-base">
```

### Animations

**Tailwind Built-in**
```css
animation-aurora-shift    /* 8s infinite mesh gradient shift */
animation-fade-in         /* 0.6s opacity entrance */
animation-slide-up        /* 0.6s + vertical slide entrance */
animation-delay-100/200/300/400  /* Stagger delays */
```

**Framer Motion** (Client components)
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
/>
```

---

## Component API Reference

### Button Component
```tsx
import { Button } from '@/components/ui/Button';

<Button 
  variant="primary"      // 'primary' | 'secondary' | 'ghost'
  size="lg"             // 'sm' | 'md' | 'lg'
  className="custom"    // Optional Tailwind classes
>
  Click me
</Button>
```

### Logo Component
```tsx
import { Logo } from '@/components/ui/Logo';

<Logo 
  size="md"            // 'sm' | 'md' | 'lg'
  linkHome={true}      // true = wrapped in Link to /, false = image only
  className="custom"   // Optional classes
/>
```

### Aurora Background
```tsx
import { AuroraBackground } from '@/components/layout/AuroraBackground';

<AuroraBackground 
  intensity="medium"   // 'subtle' | 'medium' | 'strong'
  className="min-h-screen"
>
  {children}
</AuroraBackground>
```

### Feature Card
```tsx
import { FeatureCard } from '@/components/ui/FeatureCard';

<FeatureCard
  title="Feature Name"
  description="What it does"
  icon="camera"        // From FEATURE_ICONS: camera, sparkles, chart, pencil, settings
  screenshotLabel="Demo"
  index={0}            // For alternating layout
  isInView={true}      // From useInView hook
/>
```

### useInView Hook
```tsx
import { useInView } from '@/hooks/useInView';

const { ref, isInView } = useInView({
  threshold: 0.1,      // When 10% visible
  rootMargin: "0px",
  triggerOnce: true    // Only trigger once
});

<motion.div
  ref={ref}
  animate={isInView ? { opacity: 1 } : {}}
/>
```

---

## Constants & Configuration

### Site Configuration (lib/constants.ts)
```typescript
SITE_CONFIG = {
  name: 'Nutree AI',
  tagline: 'Your AI Nutritionist in Your Pocket',
  description: '...',
  url: 'https://nutreeai.com',
  github: {
    repo: 'https://github.com/trandactri/nutree-web',
    owner: 'trandactri',
    repoName: 'nutree-web'
  },
  license: 'BSD-3-Clause'
}
```

### Navigation Links (lib/constants.ts)
```typescript
NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#demo', label: 'Demo' },
  { href: '/changelog', label: 'Changelog' },
  { href: 'https://github.com/...', label: 'GitHub', external: true }
]
```

### Features Array (lib/constants.ts)
```typescript
FEATURES = [
  {
    id: 'ai-scanning',
    title: 'AI Meal Scanning',
    description: '...',
    icon: 'camera'
  },
  // ... 4 more features
]
```

### Feature Icons (lib/constants.ts)
```typescript
FEATURE_ICONS = {
  camera: '<svg>...</svg>',
  sparkles: '<svg>...</svg>',
  chart: '<svg>...</svg>',
  pencil: '<svg>...</svg>',
  settings: '<svg>...</svg>'
}
```

---

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server (hot reload on port 3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check TypeScript
npm run type-check

# Run ESLint
npm run lint
```

---

## Common Tasks

### Adding a New Component

1. **Create file** in appropriate folder:
   ```
   src/components/[ui|sections|layout]/ComponentName.tsx
   ```

2. **Define Props interface**:
   ```tsx
   interface ComponentProps {
     title: string;
     // ... other props
   }
   ```

3. **Export component**:
   ```tsx
   export function ComponentName({ title }: ComponentProps) {
     return <div>{title}</div>;
   }
   ```

4. **Use `cn` utility for classes**:
   ```tsx
   import { cn } from '@/lib/cn';
   
   className={cn('base-class', isActive && 'active-class')}
   ```

### Using Animations

**Framer Motion** (for dynamic):
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
/>
```

**Tailwind Classes** (for static):
```tsx
<div className="animate-fade-in animate-delay-200" />
```

**Scroll Triggers** (for visibility):
```tsx
import { useInView } from '@/hooks/useInView';

const { ref, isInView } = useInView();

<motion.div
  ref={ref}
  initial={{ opacity: 0 }}
  animate={isInView ? { opacity: 1 } : {}}
/>
```

### Adding a New Page

1. **Create route file**:
   ```
   src/app/[route]/page.tsx
   ```

2. **Export default component**:
   ```tsx
   export default function PageName() {
     return <main>{/* content */}</main>;
   }
   ```

3. **Add to navigation** (if needed):
   Update `NAV_LINKS` in `lib/constants.ts`

### Styling with Tailwind

**Custom Color Usage**:
```tsx
// Primary colors
className="bg-primary-forest text-primary-teal border-border"

// Semantic colors
className="bg-background text-foreground"

// Gradients
className="bg-gradient-brand"
```

**Responsive Utilities**:
```tsx
// Mobile-first
className="flex flex-col md:flex-row lg:grid lg:grid-cols-3"

// Visibility
className="hidden md:block"
```

---

## Performance Tips

1. **Use `next/image`** for images (already done)
2. **Code split pages** automatically (Next.js handles)
3. **Lazy load sections** with `useInView` (already implemented)
4. **Minimize animations** on lower-end devices
5. **Use CSS over JS** where possible (Tailwind preference)
6. **Avoid unnecessary re-renders** with proper memoization

---

## Security Checklist

- ✅ No hardcoded secrets in code
- ✅ TypeScript strict mode enabled
- ✅ SVG icons use safe rendering (no `dangerouslySetInnerHTML`)
- ✅ External links have `rel="noopener noreferrer"`
- ✅ Environment variables for sensitive config (.env.local)
- ✅ No `eval()` or dynamic code execution

---

## Browser Compatibility

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- iOS Safari 12+
- Chrome Mobile 90+

---

## Troubleshooting

**Issue**: Styles not applying
- Ensure file is in `src/` directory
- Check content patterns in `tailwind.config.ts`
- Verify class syntax (Tailwind utility classes)

**Issue**: TypeScript errors
- Run `npm run type-check`
- Check interface definitions
- Ensure all props are typed

**Issue**: Animations not working
- Verify component marked as `'use client'` (Framer Motion)
- Check `initial` and `animate` props on motion components
- Ensure `IntersectionObserver` compatible browser

**Issue**: Images not loading
- Verify path in `public/` folder
- Check `alt` text for accessibility
- Use `next/image` for optimization

---

## Deployment

Current setup ready for:
- **Docker**: `output: standalone` in next.config.js
- **Vercel**: Automatic deployment from git
- **Self-hosted**: `npm run build && npm start`

---

## Next Steps (Phase 5)

1. Lighthouse audit & optimization
2. Core Web Vitals improvements
3. SEO enhancements
4. Docker containerization
5. Production deployment

---

**Report Generated**: December 9, 2025  
**For Updates**: See scout-251209-web-structure.md  
**For Architecture**: See scout-251209-component-tree.txt
