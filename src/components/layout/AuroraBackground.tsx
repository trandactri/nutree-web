'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

interface AuroraBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'medium' | 'strong';
}

export function AuroraBackground({
  children,
  className,
  intensity = 'medium',
}: AuroraBackgroundProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const opacityMap = {
    subtle: { green: 0.2, teal: 0.15 },
    medium: { green: 0.35, teal: 0.28 },
    strong: { green: 0.45, teal: 0.38 },
  };

  const opacity = opacityMap[intensity];

  // Mobile: simplified static version with reduced blur
  if (isMobile) {
    return (
      <div className={cn('relative overflow-hidden', className)}>
        {/* Static simplified blob 1 */}
        <div
          className="pointer-events-none absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full blur-[40px]"
          style={{
            background: `radial-gradient(circle, rgba(45, 139, 112, ${opacity.green * 0.6}) 0%, transparent 70%)`,
          }}
        />
        {/* Static simplified blob 2 */}
        <div
          className="pointer-events-none absolute -bottom-32 -right-32 h-[350px] w-[350px] rounded-full blur-[40px]"
          style={{
            background: `radial-gradient(circle, rgba(41, 182, 161, ${opacity.teal * 0.6}) 0%, transparent 70%)`,
          }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  // Desktop: full animated version
  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Aurora blob 1 - Top left, green */}
      <motion.div
        className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full blur-[100px]"
        style={{
          background: `radial-gradient(circle, rgba(45, 139, 112, ${opacity.green}) 0%, transparent 70%)`,
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Aurora blob 2 - Bottom right, teal */}
      <motion.div
        className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full blur-[80px]"
        style={{
          background: `radial-gradient(circle, rgba(41, 182, 161, ${opacity.teal}) 0%, transparent 70%)`,
        }}
        animate={{
          x: [0, -25, 0],
          y: [0, -15, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Aurora blob 3 - Center top, mint (subtle) */}
      <motion.div
        className="pointer-events-none absolute top-1/4 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{
          background: `radial-gradient(circle, rgba(167, 243, 208, 0.2) 0%, transparent 70%)`,
        }}
        animate={{
          x: ['-50%', '-45%', '-50%'],
          y: [0, 30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
