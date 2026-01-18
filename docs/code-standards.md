# Code Standards - Nutree Web

**Last Updated**: December 10, 2025
**Applies To**: All TypeScript/React code in `/src` directory
**Enforcement**: ESLint + TypeScript strict mode

---

## Quick Reference

| Standard | Rule | Enforcement |
|----------|------|-------------|
| Language | TypeScript strict mode | ✅ Required |
| Files | Max 200 LOC per file | ⚠️ Guideline |
| Types | No `any` types | ✅ Required |
| Imports | Named exports preferred | ✅ Required |
| Naming | PascalCase components, camelCase functions | ✅ Required |
| Props | Always define interface | ✅ Required |
| Styling | Tailwind first, CSS layers second | ⚠️ Guideline |
| Comments | Document complex logic only | ⚠️ Guideline |
| Formatting | ESLint + auto-formatting | ✅ Required |

---

## 1. TypeScript Configuration

### Strict Mode (REQUIRED)

All files must compile with TypeScript strict mode enabled:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "moduleResolution": "bundler"
  }
}
```

**What this means**:
- No implicit `any` types
- All types must be explicitly declared
- Unused variables cause errors
- All cases in switch statements must be handled

### Type Annotations

**DO: Always annotate types**
```tsx
interface ButtonProps {
  label: string;
  onClick: (id: string) => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

export function Button({ label, onClick, disabled, variant = 'primary' }: ButtonProps) {
  return <button onClick={() => onClick('123')}>{label}</button>;
}
```

**DON'T: Use implicit or `any` types**
```tsx
// ❌ WRONG - implicit any
export function Button({ label, onClick }) { }

// ❌ WRONG - explicit any
export function Button({ label, onClick }: any) { }
```

---

## 2. File Organization

### File Naming

| Type | Format | Example |
|------|--------|---------|
| Components | PascalCase | `FeatureCard.tsx` |
| Hooks | camelCase with `use` prefix | `useInView.ts` |
| Utilities | camelCase | `cn.ts`, `constants.ts` |
| Types | PascalCase | `types/index.ts` |
| Pages | lowercase with hyphens | `changelog/page.tsx` |

### File Size Guidelines

- **Target**: < 150 LOC
- **Maximum**: 200 LOC (split if larger)
- **Minimum**: 20 LOC (avoid over-granularity)

**How to split large files**:
```
FeatureCard.tsx (large, 200 LOC)
├── Extract FeatureIcon.tsx (inline component)
├── Extract FeatureHighlights.tsx (helper component)
└── FeatureCard.tsx (reduced to 100 LOC)
```

### Directory Structure Rules

```
src/
├── app/                 # Next.js routes (one page per file)
├── components/
│   ├── layout/          # Global layout (Header, Footer, etc.)
│   ├── sections/        # Page sections (Hero, Features, etc.)
│   └── ui/              # Reusable UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and helpers
└── types/               # TypeScript type definitions
```

**Rules**:
- One main component per file
- Inline helpers are OK (< 20 LOC)
- Extract to separate file if > 20 LOC
- Group related components in directories

---

## 3. Component Patterns

### Component Structure

```tsx
// imports (sorted: react, libraries, local)
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

// types
interface MyComponentProps {
  title: string;
  children?: ReactNode;
  onClick?: () => void;
}

// component
export function MyComponent({ title, children, onClick }: MyComponentProps) {
  // state
  // effects
  // handlers
  // render
  return (
    <div>
      <h1>{title}</h1>
      {children && <div>{children}</div>}
      <Button onClick={onClick}>Click me</Button>
    </div>
  );
}

// helpers (if needed)
function helperFunction() { }
```

### Props Interface Pattern

**DO: Always define props interface**
```tsx
interface CardProps {
  title: string;
  description: string;
  icon?: 'camera' | 'sparkles' | 'chart';
  onClick?: (id: string) => void;
  className?: string;
}

export function Card({ title, description, icon, onClick, className }: CardProps) {
  // ...
}
```

**DON'T: Use implicit types or union types in params**
```tsx
// ❌ WRONG
export function Card(props: { title: string; description: string }) { }

// ❌ WRONG - implicit types
export function Card({ title, description }) { }
```

### Default Props

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false
}: ButtonProps) {
  // ...
}
```

### Children Pattern

```tsx
interface ContainerProps {
  children: React.ReactNode;
  title?: string;
}

export function Container({ children, title }: ContainerProps) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}
```

---

## 4. Naming Conventions

### Components

- **PascalCase**: `FeatureCard`, `HeroSection`, `Header`
- **Descriptive**: `FeatureCard` not `Card1`
- **No generic prefixes**: `Button` not `MyButton`, `UiButton`

### Functions & Variables

- **camelCase**: `getFeatureHighlights`, `isInView`, `handleClick`
- **Verb prefix for handlers**: `handleClick`, `onClick`, `toggleMenu`
- **Verb prefix for getters**: `getUser`, `fetchData`, `calculateTotal`
- **Boolean prefix**: `isActive`, `hasError`, `canDelete`

### Constants

- **UPPER_SNAKE_CASE**: `MAX_RETRIES`, `API_TIMEOUT`
- **camelCase for objects**: `FEATURES`, `NAVIGATION`, `SITE_CONFIG`

### Type Names

- **PascalCase**: `ButtonProps`, `Feature`, `ReleaseInfo`
- **Suffix with "Props"**: `CardProps`, `HeaderProps` (component props)
- **Suffix with "Options"**: `UseInViewOptions`, `AnimationOptions` (hook options)

---

## 5. Styling Standards

### Tailwind CSS Priority

**Preferred** (in order):
1. **Tailwind utilities** - 95% of styling
2. **CSS layers** (@layer components) - Reusable patterns
3. **CSS modules** - Page-specific styles (rare)
4. **Inline styles** - Dynamic values only
5. **CSS-in-JS** - Never (prefer Tailwind)

### Utility Classes

**DO: Use Tailwind utilities**
```tsx
<div className="flex items-center gap-4 px-6 py-4 rounded-lg bg-white shadow-md">
  Content here
</div>
```

**DON'T: Write CSS for common patterns**
```tsx
// ❌ WRONG - use Tailwind instead
<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
  Content
</div>
```

### CSS Layers

Use `@layer` for reusable component styles in `globals.css`:

```css
@layer components {
  .glass-card {
    @apply backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4;
  }

  .gradient-brand {
    @apply bg-gradient-to-r from-forest to-emerald;
  }
}
```

**When to use**:
- Pattern used in 2+ components
- Complex utility combinations
- Component-scoped styles

### Responsive Design

```tsx
<div className="
  w-full                    // Mobile: 100%
  md:w-1/2                  // Tablet+: 50%
  lg:w-1/3                  // Desktop+: 33%
  px-4 md:px-6 lg:px-8      // Responsive padding
  text-base md:text-lg      // Responsive font
  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  // Responsive grid
">
  Content
</div>
```

### Dark Mode (if implemented)

```tsx
<div className="bg-white dark:bg-slate-900 text-black dark:text-white">
  Content
</div>
```

---

## 6. Import Organization

### Import Order (REQUIRED)

```tsx
// 1. React/Next.js imports
import { ReactNode, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 2. Third-party libraries
import { motion } from 'framer-motion';
import clsx from 'clsx';

// 3. Project imports (absolute paths with @/)
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';
import type { Feature } from '@/types';

// 4. No relative imports (use @/ aliases instead)
// ❌ DON'T: import { Button } from '../ui/Button';
```

### Unused Imports

```bash
npm run lint  # ESLint will flag unused imports
```

**Rule**: No unused imports allowed in production code.

---

## 7. React Hooks

### Custom Hooks

```tsx
// ✅ Good pattern
export function useInView(options: UseInViewOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Implementation
  }, [options.threshold, options.rootMargin]);

  return { ref, isInView };
}
```

### Hook Rules

- **Rule of Hooks**: Must be called at top level of component
- **Dependencies**: Always list all dependencies in useEffect

```tsx
// ✅ Correct
const { ref, isInView } = useInView({ threshold: 0.2 });

useEffect(() => {
  if (isInView) {
    // do something
  }
}, [isInView]); // ✅ isInView in dependency array

// ❌ Wrong
useEffect(() => {
  if (isInView) {
    // do something
  }
}, []); // ❌ Missing isInView dependency
```

---

## 8. Error Handling

### Null/Undefined Checks

```tsx
// ✅ Safe access with optional chaining
const value = data?.user?.name ?? 'Unknown';

// ✅ Optional rendering
{user && <div>{user.name}</div>}

// ✅ Type guards
if (typeof value === 'string') {
  console.log(value.toUpperCase());
}
```

### API Error Handling

```tsx
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error; // Re-throw or return default
  }
}
```

---

## 9. Comments & Documentation

### When to Comment

**DO: Comment complex logic**
```tsx
// IntersectionObserver uses a separate reference to avoid
// stale closures in useEffect dependencies
const observerRef = useRef<IntersectionObserver | null>(null);
```

**DO: Document non-obvious decisions**
```tsx
// RTL direction hack: flip even-indexed cards to right by using CSS direction
// This is better than flex-direction: row-reverse which affects tab order
const isEven = index % 2 === 0;
```

**DON'T: Over-comment obvious code**
```tsx
// ❌ Don't do this
// Set x to 5
const x = 5;

// ✅ Instead, use clear naming
const maxRetries = 5;
```

### JSDoc (Optional)

```tsx
/**
 * Renders a feature card with alternating left/right layout
 * @param props - Component props
 * @param props.title - Feature title
 * @param props.icon - Icon key from FEATURE_ICONS
 * @param props.index - Position in grid (used for alternating layout)
 */
export function FeatureCard({ title, icon, index }: FeatureCardProps) {
  // ...
}
```

---

## 10. Performance Best Practices

### Memoization

```tsx
// Use memo for expensive components
import { memo } from 'react';

export const FeatureCard = memo(function FeatureCard({ title }: FeatureCardProps) {
  return <div>{title}</div>;
});
```

**When to memoize**:
- Component receives expensive props
- Component renders frequently
- Performance issue confirmed in profiler

### Code Splitting

```tsx
// Use dynamic imports for non-critical sections
import dynamic from 'next/dynamic';

const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  loading: () => <div>Loading...</div>,
});
```

### Image Optimization

```tsx
// Always use next/image for optimized images
import Image from 'next/image';

<Image
  src="https://example.com/image.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  priority={false}  // Set true for above-fold images
/>
```

---

## 11. Security Standards

### XSS Prevention

**Rule**: Never use `dangerouslySetInnerHTML` (EVER)

```tsx
// ❌ NEVER DO THIS
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// ✅ DO THIS: Type-safe component pattern
function FeatureIcon({ icon }: { icon: 'camera' | 'sparkles' }) {
  switch (icon) {
    case 'camera':
      return <svg>...</svg>;
    case 'sparkles':
      return <svg>...</svg>;
  }
}
```

### Secret Management

**Rule**: No secrets in code

```tsx
// ❌ WRONG
const API_KEY = 'sk-1234567890';

// ✅ RIGHT: Use environment variables
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
```

### Input Sanitization

```tsx
// Always sanitize user input before rendering
import DOMPurify from 'dompurify'; // if needed

const cleanHTML = DOMPurify.sanitize(userInput);
```

---

## 12. Testing Standards

### Unit Test Pattern

```tsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders button with label', () => {
    render(<Button label="Click me" onClick={() => {}} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClick = jest.fn();
    render(<Button label="Click" onClick={onClick} />);
    screen.getByText('Click').click();
    expect(onClick).toHaveBeenCalled();
  });
});
```

### Test Organization

```
components/
├── Button.tsx
├── Button.test.tsx      # Co-located test file
└── Button.stories.tsx   # Storybook stories (optional)
```

---

## 13. Accessibility Standards

### Semantic HTML

```tsx
// ✅ Use semantic elements
<section>
  <h2>Features</h2>
  <article>...</article>
</section>

// ❌ Avoid non-semantic wrappers
<div>
  <div>Features</div>
</div>
```

### ARIA Labels

```tsx
// ✅ Buttons with aria-label
<button aria-label="Play demo video" className="...">
  <PlayIcon />
</button>

// ✅ Form inputs with labels
<label htmlFor="email">Email</label>
<input id="email" type="email" />
```

### Color Contrast

- All text must have 4.5:1 contrast ratio minimum
- Test with tools: axe DevTools, WebAIM contrast checker

---

## 14. Git Conventions

### Commit Message Format

```
<type>(<scope>): <description>

[optional body]

Example:
feat(hero): add animated aurora background
fix(button): adjust padding for mobile
docs(readme): update setup instructions
chore(deps): upgrade framer-motion to 11.0
```

### Types

| Type | When | Example |
|------|------|---------|
| `feat` | New feature | `feat(features): add scroll animations` |
| `fix` | Bug fix | `fix(header): prevent mobile menu overflow` |
| `docs` | Documentation | `docs(api): add JSDoc comments` |
| `chore` | Dependencies, config | `chore(deps): update tailwind` |
| `refactor` | Code restructure | `refactor(components): extract icon logic` |
| `test` | Tests only | `test(button): add unit tests` |
| `style` | Formatting | `style: apply prettier formatting` |

---

## 15. ESLint Rules

### Key Rules Enforced

```json
{
  "rules": {
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "no-unused-vars": "error",
    "no-implicit-globals": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error"
  }
}
```

### Running Linting

```bash
npm run lint           # Check all files
npm run lint -- --fix # Auto-fix issues
```

---

## 16. Common Patterns

### Conditional Rendering

```tsx
// ✅ Simple conditions
{isLoading && <Spinner />}
{error && <ErrorMessage error={error} />}
{data && <Content data={data} />}

// ✅ Ternary for if-else
{isActive ? <Active /> : <Inactive />}

// ✅ Early return in complex logic
if (!user) return <NotFound />;
if (!user.permissions.admin) return <Forbidden />;
return <AdminPanel />;

// ❌ Avoid complex nested ternaries
{a ? b ? c : d : e ? f : g}
```

### List Rendering

```tsx
// ✅ Always provide key
{items.map((item) => (
  <Card key={item.id} item={item} />
))}

// ❌ Never use index as key (unless list is static)
{items.map((item, index) => (
  <Card key={index} item={item} />
))}
```

### Event Handlers

```tsx
// ✅ Named handlers
function handleClick() {
  // ...
}

// ✅ Inline for simple cases
onClick={() => setOpen(!open)}

// ❌ Avoid anonymous functions with complex logic
onClick={() => {
  if (condition) {
    doA();
    doB();
    doC();
  }
}}
// Instead: extract to named function
```

---

## 17. Code Review Checklist

When reviewing code, verify:

- [ ] TypeScript strict mode passing
- [ ] ESLint 0 errors, 0 warnings
- [ ] No `any` types
- [ ] Components have prop interfaces
- [ ] Props interface named with "Props" suffix
- [ ] Files < 200 LOC
- [ ] No console.log in production code
- [ ] No hardcoded values (use constants)
- [ ] Accessibility: semantic HTML, aria-labels
- [ ] Performance: no unnecessary re-renders
- [ ] Security: no dangerouslySetInnerHTML
- [ ] Tests: unit tests for logic
- [ ] Comments: only for complex logic
- [ ] Naming: clear, descriptive names
- [ ] Imports: organized and sorted

---

## 18. Quick Fixes for Common Issues

### TypeScript Error: Property does not exist

```tsx
// ❌ Error: Property 'foo' does not exist
const value = data.foo;

// ✅ Fix: Check type or use optional chaining
const value = data?.foo;
type Data = { foo?: string };
```

### ESLint Error: 'x' is defined but never used

```tsx
// ❌ Error
const unused = 5;

// ✅ Fix: Remove or use
const used = 5;
console.log(used);
```

### React Hook Error: Missing dependency

```tsx
// ❌ Error: useEffect has missing dependency 'count'
useEffect(() => {
  console.log(count);
}, []);

// ✅ Fix: Add to dependency array
useEffect(() => {
  console.log(count);
}, [count]);
```

---

## 19. Resources & Tools

### Recommended Tools

- **Linter**: ESLint with @next/eslint-config-next
- **Formatter**: Prettier (optional, ESLint is sufficient)
- **Type Checker**: TypeScript (tsc)
- **Bundle Analyzer**: next/bundle-analyzer
- **Accessibility**: axe DevTools browser extension
- **Performance**: Chrome DevTools Lighthouse
- **Git Hooks**: Husky (optional, for pre-commit checks)

### Commands

```bash
npm run lint          # Check for errors
npm run lint -- --fix # Auto-fix issues
npm run type-check    # TypeScript checking
npm run build         # Production build
npm run dev           # Development server
```

---

## 20. Questions & Clarifications

### When unsure about a pattern, ask:

1. **Is this used elsewhere?** Follow existing patterns
2. **Is this the simplest approach?** Prefer clarity over cleverness
3. **Can this be tested?** Write testable code
4. **Is this secure?** Never compromise on security
5. **Is this accessible?** Include WCAG compliance

---

## Approval & Feedback

**These standards are living documents.** If you find issues or have suggestions:

1. Create a GitHub issue with the problem
2. Propose a solution with examples
3. Get consensus from the team
4. Update this document

---

## Summary

| Category | Key Rule |
|----------|-----------|
| **Types** | No `any` types, always define props interfaces |
| **Files** | Max 200 LOC, PascalCase for components |
| **Styling** | Tailwind first, CSS layers second |
| **Security** | Never use dangerouslySetInnerHTML |
| **Testing** | Write testable code, unit test critical logic |
| **Performance** | Use next/image, dynamic imports, memoization |
| **Accessibility** | Semantic HTML, aria-labels, 4.5:1 contrast |
| **Comments** | Only document complex logic |

---

**Last Updated**: December 10, 2025
**Maintained By**: @trandactri
**License**: BSD-3-Clause

---

**End of Document**
