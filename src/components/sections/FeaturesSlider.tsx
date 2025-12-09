'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/cn';

// Feature data with updated descriptions matching Cal AI style
const FEATURES_DATA = [
  {
    id: 'ai-scanning',
    title: 'Track Your Food With Just a Picture',
    description: 'Snap a photo with Nutree AI, and our AI instantly analyzes your meal to determine calories, protein, carbs, and fat. No manual entry needed.',
    screen: 'scanning' as const,
  },
  {
    id: 'meal-planning',
    title: 'AI-Powered Personalized Meal Plans',
    description: 'Get personalized meal suggestions based on your goals, dietary preferences, and eating habits. Our AI learns what you like and adapts recommendations.',
    screen: 'planning' as const,
  },
  {
    id: 'dashboard',
    title: 'Complete Progress Tracking and AI Insights',
    description: 'Monitor your nutrition goals with beautiful visualizations. Get personalized AI suggestions to stay on track and optimize your diet.',
    screen: 'dashboard' as const,
  },
  {
    id: 'edit',
    title: 'Edit and Refine Your Meal Data',
    description: 'Adjust portions, add or remove items, and fine-tune your meal data anytime. Nutrition values update automatically as you make changes.',
    screen: 'edit' as const,
  },
];

export function FeaturesSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });

  const activeFeature = FEATURES_DATA[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="min-h-screen py-16 md:py-24 flex flex-col justify-center"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-12 md:mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary-forest/10 text-sm font-medium text-primary-forest">
            Features
          </span>
          <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl lg:text-5xl whitespace-nowrap">
            What does <span className="gradient-text">Nutree AI</span> include?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Powerful AI features that make nutrition tracking effortless and insightful.
          </p>
        </motion.div>

        {/* Feature Slider Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Left: Screenshot Placeholder */}
          <div className="relative order-2 lg:order-1 flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-[280px] md:w-[320px] aspect-[9/19.5] rounded-3xl bg-gradient-to-br from-primary-forest/10 to-primary-teal/10 border border-border/50 flex items-center justify-center"
              >
                {/* TODO: Replace with actual screenshot */}
                <div className="text-center p-6">
                  <span className="text-sm text-muted">{activeFeature.title}</span>
                  <p className="mt-1 text-xs text-muted/60">Replace with screenshot</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Feature Cards */}
          <div className="space-y-3 order-1 lg:order-2 max-w-md mx-auto lg:mx-0">
            {FEATURES_DATA.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                isActive={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  feature: (typeof FEATURES_DATA)[number];
  isActive: boolean;
  onClick: () => void;
}

function FeatureCard({ feature, isActive, onClick }: FeatureCardProps) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        'w-full text-left p-5 md:p-6 rounded-2xl border transition-all duration-300',
        isActive
          ? 'bg-white border-border shadow-lg shadow-black/5'
          : 'bg-transparent border-border/40 hover:border-border hover:bg-white/50'
      )}
      whileHover={{ scale: isActive ? 1 : 1.01 }}
      whileTap={{ scale: 0.99 }}
      aria-pressed={isActive}
      aria-label={`View ${feature.title} feature`}
    >
      {/* Title */}
      <h3
        className={cn(
          'font-display text-base md:text-lg font-bold leading-tight transition-colors',
          isActive ? 'text-foreground' : 'text-foreground/70'
        )}
      >
        {feature.title}
      </h3>

      {/* Description - Always visible for cleaner look */}
      <motion.p
        initial={false}
        animate={{
          opacity: isActive ? 1 : 0.6,
          height: isActive ? 'auto' : 'auto',
        }}
        className={cn(
          'mt-2 text-sm leading-relaxed transition-colors',
          isActive ? 'text-muted' : 'text-muted/60'
        )}
      >
        {feature.description}
      </motion.p>
    </motion.button>
  );
}
