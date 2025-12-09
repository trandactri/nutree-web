'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';

// Apple App Store Icon
function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

// Google Play Store Icon
function PlayStoreIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.49l-2.302 2.302-8.634-8.635z" />
    </svg>
  );
}

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg md:hidden"
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex h-16 items-center justify-between px-4">
          <Logo size="sm" />
          <button
            className="flex h-10 w-10 items-center justify-center"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                className="font-display text-2xl font-semibold text-foreground"
                onClick={onClose}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          {/* Store Download Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: NAV_LINKS.length * 0.1 }}
            className="flex flex-col gap-3 w-full max-w-xs px-4"
          >
            <Link
              href={SITE_CONFIG.stores.appStore}
              onClick={onClose}
              aria-label="Download on App Store"
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full gap-2"
              >
                <AppleIcon className="h-5 w-5" />
                App Store
              </Button>
            </Link>
            <Link
              href={SITE_CONFIG.stores.googlePlay}
              onClick={onClose}
              aria-label="Get it on Google Play"
            >
              <Button
                variant="secondary"
                size="lg"
                className="w-full gap-2"
              >
                <PlayStoreIcon className="h-5 w-5" />
                Google Play
              </Button>
            </Link>
          </motion.div>
        </nav>
      </div>
    </motion.div>
  );
}
