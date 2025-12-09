'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/cn';

interface BentoItem {
  id: string;
  title: string;
  description: string;
  size: 'large' | 'medium' | 'small';
  icon: React.ReactNode;
  gradient?: string;
}

const BENTO_ITEMS: BentoItem[] = [
  {
    id: 'ai-scanning',
    title: 'AI Meal Scanning',
    description: 'Point your camera at any meal and get instant nutrition data. Our AI recognizes thousands of foods with 95% accuracy.',
    size: 'large',
    gradient: 'from-primary-forest/10 to-primary-teal/5',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
  },
  {
    id: 'meal-planning',
    title: 'Smart Meal Planning',
    description: 'Get personalized meal suggestions based on your goals and preferences.',
    size: 'medium',
    gradient: 'from-primary-teal/10 to-energy-lime/5',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    id: 'dashboard',
    title: 'Real-Time Dashboard',
    description: 'Track macros with beautiful visualizations and progress insights.',
    size: 'medium',
    gradient: 'from-energy-lime/10 to-primary-forest/5',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    id: 'languages',
    title: '7 Languages',
    description: 'EN, VI, ES, FR, DE, JA, ZH',
    size: 'small',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
  },
  {
    id: 'reports',
    title: 'Weekly Reports',
    description: 'Insights & trends',
    size: 'small',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    id: 'edit',
    title: 'Edit & Refine',
    description: 'Adjust portions and fine-tune your meal data anytime. Nutrition values update automatically.',
    size: 'medium',
    gradient: 'from-primary-emerald/10 to-primary-teal/5',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
];

export function BentoFeatures() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const getSizeClasses = (size: BentoItem['size']) => {
    switch (size) {
      case 'large':
        return 'col-span-4 md:col-span-2 row-span-2';
      case 'medium':
        return 'col-span-4 sm:col-span-2 md:col-span-2';
      case 'small':
        return 'col-span-2 sm:col-span-2 md:col-span-1';
      default:
        return '';
    }
  };

  return (
    <section ref={ref} id="features" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-badge">Features</span>
          <h2 className="section-title">
            Powerful features for your <span className="gradient-text">health journey</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to track, plan, and transform your nutrition habits.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="bento-grid max-w-5xl mx-auto">
          {BENTO_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(
                getSizeClasses(item.size),
                'group'
              )}
            >
              <div
                className={cn(
                  'glass-card-hover h-full p-6 md:p-8 flex flex-col',
                  item.gradient && `bg-gradient-to-br ${item.gradient}`
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    'inline-flex items-center justify-center rounded-2xl bg-primary-forest/10 text-primary-forest mb-4 transition-transform duration-300 group-hover:scale-110',
                    item.size === 'large' ? 'w-16 h-16' : item.size === 'small' ? 'w-10 h-10' : 'w-12 h-12'
                  )}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3
                  className={cn(
                    'font-display font-bold text-foreground mb-2',
                    item.size === 'large' ? 'text-2xl md:text-3xl' : item.size === 'small' ? 'text-base' : 'text-lg md:text-xl'
                  )}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className={cn(
                    'text-muted leading-relaxed',
                    item.size === 'large' ? 'text-base md:text-lg' : 'text-sm'
                  )}
                >
                  {item.description}
                </p>

                {/* Visual placeholder for large card */}
                {item.size === 'large' && (
                  <div className="flex-1 mt-6 flex items-end">
                    <div className="w-full h-32 md:h-48 rounded-xl bg-gradient-to-br from-primary-forest/5 to-primary-teal/10 border border-border/50 flex items-center justify-center">
                      <span className="text-sm text-muted">App Preview</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
