'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScreenshotPlaceholder } from '@/components/ui/ScreenshotPlaceholder';
import { useInView } from '@/hooks/useInView';
import { FEATURES, FEATURE_ICONS } from '@/lib/constants';
import { cn } from '@/lib/cn';

// Feature icon component
function FeatureIcon({ icon }: { icon: keyof typeof FEATURE_ICONS }) {
  switch (icon) {
    case 'camera':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
        </svg>
      );
    case 'sparkles':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      );
    case 'chart':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      );
    case 'pencil':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
      );
    case 'settings':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
      );
    default:
      return null;
  }
}

function getFeatureHighlights(icon: string): string[] {
  const highlights: Record<string, string[]> = {
    camera: ['Instant AI analysis', 'Works with any meal', 'No manual entry needed'],
    sparkles: ['Personalized suggestions', 'Dietary preference aware', 'Weekly meal plans'],
    chart: ['Visual macro breakdown', 'Daily/weekly trends', 'Goal tracking'],
    pencil: ['Adjust portions easily', 'Add/remove items', 'Nutrition auto-updates'],
    settings: ['7 language options', 'Light & dark themes', 'Metric or imperial'],
  };
  return highlights[icon] || [];
}

export function FeaturesSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });

  const activeFeature = FEATURES[activeIndex];

  return (
    <section ref={sectionRef} id="features" className="min-h-screen py-16 md:py-20 flex flex-col justify-center">
      <div className="container mx-auto px-4 flex flex-col h-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-8 md:mb-12"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary-forest/10 text-sm font-medium text-primary-forest">
            Features
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Everything You Need to{' '}
            <span className="gradient-text">Track Smarter</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Powerful AI features that make nutrition tracking effortless and insightful.
          </p>
        </motion.div>

        {/* Feature Slider Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center flex-1"
        >
          {/* Left: Screenshot Display */}
          <div className="relative order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="sticky top-24"
              >
                <ScreenshotPlaceholder
                  aspectRatio="9:16"
                  label={activeFeature.title}
                  className="max-w-sm mx-auto lg:max-w-md"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Feature Selection */}
          <div className="space-y-4 order-1 lg:order-2">
            {FEATURES.map((feature, index) => (
              <FeatureTab
                key={feature.id}
                feature={feature}
                isActive={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface FeatureTabProps {
  feature: (typeof FEATURES)[number];
  isActive: boolean;
  onClick: () => void;
  index: number;
}

function FeatureTab({ feature, isActive, onClick, index }: FeatureTabProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full text-left p-4 md:p-6 rounded-2xl border transition-all duration-300',
        isActive
          ? 'bg-white border-primary-forest/20 shadow-lg'
          : 'bg-transparent border-border/50 hover:border-border hover:bg-white/50'
      )}
      aria-pressed={isActive}
      aria-label={`View ${feature.title} feature`}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className={cn(
            'flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-colors',
            isActive
              ? 'bg-gradient-brand text-white'
              : 'bg-primary-forest/10 text-primary-forest'
          )}
        >
          <FeatureIcon icon={feature.icon as keyof typeof FEATURE_ICONS} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3
            className={cn(
              'font-display text-lg font-semibold transition-colors',
              isActive ? 'text-foreground' : 'text-foreground/80'
            )}
          >
            {feature.title}
          </h3>

          {/* Expanded content when active */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature highlights */}
                <ul className="mt-3 space-y-1.5">
                  {getFeatureHighlights(feature.icon).map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-muted">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4 text-primary-teal flex-shrink-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Indicator */}
        <div
          className={cn(
            'flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full transition-colors',
            isActive
              ? 'bg-primary-teal text-white'
              : 'bg-border/50 text-muted'
          )}
        >
          {isActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-3.5 w-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          ) : (
            <span className="text-xs font-medium">{index + 1}</span>
          )}
        </div>
      </div>
    </button>
  );
}
