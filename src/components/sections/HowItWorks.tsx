'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/cn';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: 'camera' | 'sparkles' | 'target';
}

const STEPS: Step[] = [
  {
    number: 1,
    title: 'Snap a Photo',
    description: 'Point your camera at any meal. Our AI recognizes food instantly.',
    icon: 'camera',
  },
  {
    number: 2,
    title: 'Get Nutrition',
    description: 'Instant breakdown of calories, protein, carbs, and fats.',
    icon: 'sparkles',
  },
  {
    number: 3,
    title: 'Hit Your Goals',
    description: 'Track progress and get personalized meal recommendations.',
    icon: 'target',
  },
];

function StepIcon({ icon }: { icon: Step['icon'] }) {
  const icons = {
    camera: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
    sparkles: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    target: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  };

  return icons[icon];
}

export function HowItWorks() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-bg opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-badge">How It Works</span>
          <h2 className="section-title">
            Track your nutrition in <span className="gradient-text">seconds</span>
          </h2>
          <p className="section-subtitle">
            Three simple steps to transform your health journey with AI-powered precision.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 max-w-5xl mx-auto">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              {/* Connector Line (hidden on mobile, visible on md+) */}
              {index < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(50%+60px)] w-[calc(100%-60px)] h-px bg-gradient-to-r from-primary-teal/50 to-primary-teal/10" />
              )}

              {/* Card */}
              <div className="glass-card-hover p-8 text-center h-full">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-brand text-white font-display font-bold text-lg mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-forest/10 text-primary-forest mb-6">
                  <StepIcon icon={step.icon} />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted">
            Ready to start?{' '}
            <a href="#download" className="text-primary-teal font-medium hover:underline">
              Download the app
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
