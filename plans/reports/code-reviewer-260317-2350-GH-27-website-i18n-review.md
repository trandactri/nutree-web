# Code Review: NM-27 Website Landing Page Update

## Score: 8/10

## Scope
- **Files changed**: 13 (11 modified, 2 deleted)
- **LOC**: -440 removed, +198 added (net -242, good reduction)
- **New files**: `locale-context.tsx`, `translations.ts` (in diff but already committed)
- **Deleted**: `DemoVideo.tsx`, `DownloadCTA.tsx` (dead code cleanup)

## Overall Assessment

Solid implementation. The i18n system is well-typed, the Google Play removal is thorough, and the translation wiring is consistent across all active sections. Type check, lint, and build all pass cleanly. A few hardcoded strings remain and one DRY issue with duplicated components.

---

## Critical Issues

None.

---

## High Priority

### H1: Hardcoded English strings remaining in components

Several user-visible strings are not wired through the translation system:

| File | Line | String |
|------|------|--------|
| `Hero.tsx` | 93 | `aria-label="Download on App Store"` |
| `Hero.tsx` | 167 | `"Scroll"` (scroll indicator text) |
| `Header.tsx` | 91, 99 | `aria-label="Download on App Store"`, `"App Store"` button text |
| `MobileMenu.tsx` | 101, 107 | `"English"`, `"Tieng Viet"` (hardcoded but correct per locale -- acceptable) |
| `MobileMenu.tsx` | 122 | `aria-label="Download on App Store"` |
| `FinalCTA.tsx` | 134 | `aria-label="Download on App Store"` |
| `FinalCTA.tsx` | 145-146 | `"Download on the"` / `"App Store"` (hardcoded inside button) |
| `Footer.tsx` | 27 | `SITE_CONFIG.description` (English-only constant) |

**Impact**: When locale is `vi`, these strings remain in English. The `aria-label` strings affect screen reader users; `SITE_CONFIG.description` and FinalCTA button text are visible to all users.

**Recommendation**: Add `downloadLabel`, `appStore`, `scroll`, and `siteDescription` keys to `TranslationStrings` and wire them in.

### H2: `getNavLabel` duplicated in 3 files

`getNavLabel()` is copy-pasted identically in `Header.tsx`, `MobileMenu.tsx`, and `Footer.tsx`. This is fragile -- if a nav link is added/renamed, all three must be updated.

**Recommendation**: Move to a shared utility, e.g., export from `locale-context.tsx` or a new `nav-utils.ts`.

### H3: `AppleIcon` component duplicated in 4 files

The same `AppleIcon` SVG component exists in `Hero.tsx`, `Header.tsx`, `MobileMenu.tsx`, and `FinalCTA.tsx`.

**Recommendation**: Extract to `components/ui/AppleIcon.tsx`.

---

## Medium Priority

### M1: `ConfettiParticle` uses `Math.random()` during render

In `FinalCTA.tsx` (lines 14-39), `Math.random()` is called directly during render for colors, sizes, and animation values. This causes hydration mismatches in SSR (though currently all components are `'use client'` so it manifests as visual inconsistency between renders rather than a hard error).

**Recommendation**: Use deterministic values based on the index/key, or memoize random values with `useMemo`.

### M2: `DownloadCTA.tsx` not fully deleted

The diff shows `DownloadCTA.tsx` was supposed to be removed but the file still exists on disk (just not imported). It contains stale Google Play references and hardcoded English strings.

**Recommendation**: Delete the file entirely.

### M3: `NAV_LINKS` labels in `constants.ts` are now unused

`constants.ts` still defines `label` properties on `NAV_LINKS` (`'How it works'`, `'Features'`, `'Download'`), but all components now use `getNavLabel()` to get translated labels. The `label` field is dead data.

**Recommendation**: Remove `label` from `NAV_LINKS` entries, or better yet, use the href as the translation key directly instead of the `getNavLabel` if-chain.

### M4: No locale persistence

The locale resets to `'en'` on every page load/navigation. There is no `localStorage` or cookie persistence.

**Recommendation**: Add `localStorage` persistence in `LocaleProvider`:
```ts
const [locale, setLocaleState] = useState<Locale>(() => {
  if (typeof window !== 'undefined') {
    return (localStorage.getItem('locale') as Locale) || 'en';
  }
  return 'en';
});
// In setLocale callback:
localStorage.setItem('locale', l);
```

### M5: `FEATURES` and `FEATURE_ICONS` constants in `constants.ts` appear unused

The old `FEATURES` array (6 items with icons) and `FEATURE_ICONS` map are still in `constants.ts` but `BentoFeatures.tsx` now gets feature data from translations. These are dead code.

**Recommendation**: Remove `FEATURES` and `FEATURE_ICONS` from `constants.ts`.

---

## Low Priority

### L1: Translation `{Nutree}` template not documented

The `renderTitle()` function handles `{Nutree}` placeholders in translation strings (e.g., `'How {Nutree} works'`). This convention is implicit -- a comment or JSDoc would help future contributors.

### L2: Feature items lack `icon` in translations type

`TranslationStrings.features.items` has `id`, `title`, `description` but no `icon`. Icons are mapped separately via `FEATURE_CONFIG`. This works but means the mapping relies on `id` matching between translations and config -- a typo in either breaks silently (shows fallback icon placeholder).

### L3: `document.documentElement.lang` set in locale context

Line 23 of `locale-context.tsx` directly manipulates the DOM (`document.documentElement.lang = l`). This is fine for a client-only app but would cause issues if SSR is ever enabled for this page.

---

## Positive Observations

1. **Clean type system**: `TranslationStrings` interface ensures both locales have identical structure at compile time
2. **Good SSR boundary**: `'use client'` directives are placed correctly; `page.tsx` remains a server component
3. **Thorough Google Play removal**: No remaining Google Play buttons in active components
4. **Net code reduction**: -242 lines while adding a feature (i18n) is excellent
5. **Build is clean**: No TypeScript errors, no lint warnings, production build succeeds
6. **Bundle size reasonable**: 153 kB first load for home page

## Metrics

| Metric | Status |
|--------|--------|
| TypeScript | 0 errors |
| ESLint | 0 warnings |
| Build | Pass |
| Bundle (home) | 153 kB first load |

## Recommended Actions (prioritized)

1. Wire remaining hardcoded strings through translations (H1)
2. Extract `getNavLabel` to shared utility (H2)
3. Extract `AppleIcon` to shared component (H3)
4. Delete `DownloadCTA.tsx` (M2)
5. Clean up dead constants `FEATURES`/`FEATURE_ICONS` (M5)
6. Add locale persistence via localStorage (M4)
7. Remove unused `label` from `NAV_LINKS` (M3)

## Unresolved Questions

1. Should `SITE_CONFIG.description` and `SITE_CONFIG.tagline` also be translated? They appear in the Footer and potentially in meta tags.
2. Is the `metadataBase` warning in the build output intentional? It affects social sharing/OG images.
3. Should the `weekly-budget` feature card have a screenshot? It's the only one of 4 without one (shows icon placeholder instead).
