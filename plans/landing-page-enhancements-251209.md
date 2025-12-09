# Landing Page Enhancements - Implementation Plan

**Date:** 2025-12-09
**Status:** Ready for Implementation
**Priority:** High

## Overview

Enhance the Nutree AI landing page with user-requested features including features slider, sticky store buttons, trial info, and Docker deployment.

## Requirements Summary

1. **Features Slider**: Replace vertical feature cards with horizontal slider + description panel
2. **Demo Video Placeholder**: Already exists - verify placement below Hero
3. **Download Section**: iOS/Android buttons with 3-day free trial messaging
4. **Sticky Store Buttons**: App Store + Google Play buttons always visible in header
5. **Dockerfile**: Production deployment configuration
6. **License**: Private repository license (BSD-3-Clause already in constants)

## Implementation Tasks

### Phase 1: Header Enhancements (Store Buttons)

**File:** `src/components/layout/Header.tsx`

- Add App Store and Google Play placeholder buttons next to "Download App" CTA
- Buttons must remain visible on scroll (sticky in nav)
- Use proper store icons (Apple, Google Play)
- Placeholder links with `#app-store` and `#google-play` hrefs

**Changes:**
```tsx
// Add store button component in header
<div className="hidden md:flex items-center gap-2">
  <Link href="#app-store" aria-label="Download on App Store">
    <Button variant="secondary" size="sm" className="gap-2">
      <AppleIcon className="h-4 w-4" />
      App Store
    </Button>
  </Link>
  <Link href="#google-play" aria-label="Get it on Google Play">
    <Button variant="secondary" size="sm" className="gap-2">
      <PlayStoreIcon className="h-4 w-4" />
      Google Play
    </Button>
  </Link>
</div>
```

### Phase 2: Features Slider Component

**Files:**
- `src/components/sections/FeaturesSlider.tsx` (new)
- `src/components/ui/FeatureSlide.tsx` (new)
- `src/app/page.tsx` (update import)

**Design:**
- Left side: Feature selection tabs (vertical list)
- Right side: Feature screenshot placeholder with description
- Active feature highlighted
- Smooth transition between features
- Mobile: Stack vertically, swipe-enabled

**Structure:**
```tsx
<section id="features">
  <div className="grid md:grid-cols-2 gap-8">
    {/* Left: Feature List */}
    <div className="space-y-4">
      {FEATURES.map((feature) => (
        <FeatureTab
          key={feature.id}
          active={activeFeature === feature.id}
          onClick={() => setActiveFeature(feature.id)}
          {...feature}
        />
      ))}
    </div>

    {/* Right: Screenshot + Description */}
    <div className="relative">
      <ScreenshotPlaceholder label={activeFeature.title} />
      <p className="mt-4 text-muted">{activeFeature.description}</p>
    </div>
  </div>
</section>
```

### Phase 3: Download Section Updates

**File:** `src/components/sections/DownloadCTA.tsx`

**Changes:**
1. Update messaging to include 3-day free trial info
2. Add separate iOS and Android download buttons with proper icons
3. Add trial badge/callout

**Copy:**
```
Headline: "Start Your Free Trial Today"
Subheadline: "Download Nutree AI and get 3 days free access to all premium features. No credit card required."
CTA 1: "Download for iOS" (App Store icon)
CTA 2: "Download for Android" (Play Store icon)
Badge: "3-Day Free Trial"
```

### Phase 4: Dockerfile & Deployment

**File:** `Dockerfile` (new at root)

```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

**File:** `next.config.js` (update for standalone output)

```js
const nextConfig = {
  output: 'standalone',
  // ... existing config
}
```

### Phase 5: License File

**File:** `LICENSE` (new at root)

BSD-3-Clause license for private repository (already configured in constants).

## Files to Modify

| File | Action | Description |
|------|--------|-------------|
| `src/components/layout/Header.tsx` | Modify | Add sticky store buttons |
| `src/components/layout/MobileMenu.tsx` | Modify | Add store buttons for mobile |
| `src/components/sections/Features.tsx` | Remove | Replace with slider |
| `src/components/sections/FeaturesSlider.tsx` | Create | New slider component |
| `src/components/ui/FeatureTab.tsx` | Create | Feature selector tab |
| `src/components/sections/DownloadCTA.tsx` | Modify | Trial messaging + icons |
| `src/lib/constants.ts` | Modify | Add store links placeholders |
| `src/app/page.tsx` | Modify | Update imports |
| `Dockerfile` | Create | Docker deployment |
| `next.config.mjs` | Modify | Add standalone output |
| `LICENSE` | Create | BSD-3-Clause |
| `.dockerignore` | Create | Docker ignore rules |

## Validation Checklist

- [ ] TypeScript: `npm run type-check` passes
- [ ] ESLint: `npm run lint` passes
- [ ] Build: `npm run build` succeeds
- [ ] Docker: `docker build .` succeeds
- [ ] Responsive: Test mobile/tablet/desktop
- [ ] Accessibility: ARIA labels on all interactive elements
- [ ] Performance: Lighthouse score > 90

## Dependencies

No new dependencies required. Using existing:
- framer-motion (animations)
- clsx + tailwind-merge (styling)

## Estimated Scope

- ~300 lines new code
- ~100 lines modified code
- 5 new/modified components
- 3 new config files
