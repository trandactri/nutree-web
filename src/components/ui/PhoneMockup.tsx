'use client';

import { cn } from '@/lib/cn';

interface PhoneMockupProps {
  className?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'floating';
  backgroundImage?: string;
}

export function PhoneMockup({ className, children, variant = 'default', backgroundImage }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        // Mobile: smaller, tablet+: larger
        'phone-frame w-[260px] sm:w-[280px] md:w-[300px]',
        variant === 'floating' && 'animate-float',
        className
      )}
    >
      {/* Notch */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full z-10" />

      {/* Screen */}
      <div
        className="phone-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined }}
      >
        {children || null}
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/30 rounded-full" />
    </div>
  );
}
