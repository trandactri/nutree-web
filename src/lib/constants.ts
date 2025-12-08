export const SITE_CONFIG = {
  name: 'Nutree AI',
  tagline: 'Your AI Nutritionist in Your Pocket',
  description: 'AI-powered nutrition tracking with instant meal scanning, personalized meal planning, and real-time macro tracking.',
  url: 'https://nutreeai.com',
  github: {
    repo: 'https://github.com/trandactri/nutree-web',
    owner: 'trandactri',
    repoName: 'nutree-web',
  },
  license: 'BSD-3-Clause',
} as const;

export const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#demo', label: 'Demo' },
  { href: '/changelog', label: 'Changelog' },
  { href: SITE_CONFIG.github.repo, label: 'GitHub', external: true },
] as const;

export const FEATURES = [
  {
    id: 'ai-scanning',
    title: 'AI Meal Scanning',
    description: 'Point your camera at any meal for instant nutritional analysis powered by Google Gemini AI.',
    icon: 'camera',
  },
  {
    id: 'meal-planning',
    title: 'AI Meal Planning',
    description: 'Conversational AI suggests personalized meals based on your goals and preferences.',
    icon: 'sparkles',
  },
  {
    id: 'dashboard',
    title: 'Real-Time Dashboard',
    description: 'Visual macro tracking with progress accountability. See your nutrition at a glance.',
    icon: 'chart',
  },
  {
    id: 'edit',
    title: 'Edit with Confidence',
    description: 'Adjust portions and items post-scan. Fine-tune your meal data anytime.',
    icon: 'pencil',
  },
  {
    id: 'personalize',
    title: 'Personalize Everything',
    description: 'Goals, 7 languages, light/dark theme, metric/imperial. Your app, your way.',
    icon: 'settings',
  },
] as const;
