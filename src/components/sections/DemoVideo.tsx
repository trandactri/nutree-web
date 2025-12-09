'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

export function DemoVideo() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      id="demo"
      className="py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary-forest/10 text-sm font-medium text-primary-forest">
            See It In Action
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Watch How Easy It Is
          </h2>
          <p className="mt-4 text-lg text-muted">
            From scanning your meal to getting complete nutrition data in seconds.
          </p>
        </motion.div>

        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 md:mt-16"
        >
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary-forest/10 to-primary-teal/10 border border-border/50 aspect-video">
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="group flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-2xl transition-transform hover:scale-110"
                aria-label="Play demo video"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8 text-primary-forest translate-x-0.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Placeholder content */}
            <div className="flex h-full flex-col items-center justify-end p-8 text-center">
              <span className="mb-2 font-display text-lg font-semibold bg-gradient-to-r from-primary-forest via-primary-emerald to-primary-teal bg-clip-text text-transparent">
                NutreeAI
              </span>
              <span className="text-sm font-medium text-muted">Demo Video</span>
              <span className="text-xs text-muted/60">Coming Soon</span>
            </div>

            {/* Decorative gradients */}
            <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-primary-teal/20 blur-3xl" />
            <div className="absolute -top-16 -left-16 h-48 w-48 rounded-full bg-primary-forest/20 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
