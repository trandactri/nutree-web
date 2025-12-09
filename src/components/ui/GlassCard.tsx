'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function GlassCard({ children, className, hover = true, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      className={cn(
        'relative overflow-hidden rounded-2xl p-6',
        'bg-white/60 backdrop-blur-xl',
        'border border-white/40',
        'shadow-glass',
        hover && 'transition-shadow duration-300 hover:shadow-glass-lg cursor-pointer',
        className
      )}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
