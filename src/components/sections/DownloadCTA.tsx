'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useInView } from '@/hooks/useInView';
import { SITE_CONFIG } from '@/lib/constants';

export function DownloadCTA() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-brand p-8 md:p-16 text-center"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-white/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl translate-x-1/2 translate-y-1/2" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Ready to Transform Your
              <br />
              Nutrition Journey?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Download Nutree AI free from GitHub. Open source, no ads, no subscriptions required.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={`${SITE_CONFIG.github.repo}/releases/latest`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full border-white/30 text-white hover:bg-white/10 hover:border-white/50 sm:w-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="mr-2 h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  Download for iOS
                </Button>
              </Link>
              <Link
                href={`${SITE_CONFIG.github.repo}/releases/latest`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full border-white/30 text-white hover:bg-white/10 hover:border-white/50 sm:w-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="mr-2 h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  Download for Android
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80">
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-white">100%</div>
                <div className="text-sm">Free & Open Source</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-white">7</div>
                <div className="text-sm">Languages</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-white">AI</div>
                <div className="text-sm">Powered</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
