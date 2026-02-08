'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

interface FloatingIconProps {
  emoji: string;
  className?: string;
  delay?: number;
  size?: 'sm' | 'md' | 'lg';
}

export function FloatingIcon({ emoji, className, delay = 0, size = 'md' }: FloatingIconProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      className={cn(
        'absolute pointer-events-none select-none',
        sizeClasses[size],
        className
      )}
    >
      <motion.span
        animate={
          !isMobile
            ? {
                y: [-10, 10, -10],
                rotate: [-5, 5, -5],
              }
            : {}
        }
        transition={
          !isMobile
            ? {
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 2,
              }
            : {}
        }
        className="inline-block drop-shadow-lg"
        role="img"
        aria-hidden="true"
      >
        {emoji}
      </motion.span>
    </motion.div>
  );
}

// Pre-defined food icons with positions for hero section
export const FLOATING_FOODS = [
  { emoji: '🥗', position: 'top-20 right-4 md:right-20', delay: 0.6 },
  { emoji: '🍎', position: 'top-1/3 left-4 md:left-8', delay: 0.7 },
  { emoji: '🥑', position: 'bottom-32 right-8 md:right-32', delay: 0.8 },
  { emoji: '🍊', position: 'bottom-20 right-4 md:right-16', delay: 0.9 },
  { emoji: '🥦', position: 'top-1/2 right-0 md:right-4', delay: 1.0 },
  { emoji: '🍇', position: 'bottom-1/3 left-0 md:left-4', delay: 1.1 },
] as const;
