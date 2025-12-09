import Link from 'next/link';
import { cn } from '@/lib/cn';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  linkHome?: boolean;
}

const sizeClasses = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-4xl',
};

export function Logo({ size = 'md', className, linkHome = true }: LogoProps) {
  const logoText = (
    <span
      className={cn(
        'font-display font-semibold bg-gradient-to-r from-primary-forest via-primary-emerald to-primary-teal bg-clip-text text-transparent',
        sizeClasses[size],
        className
      )}
      aria-label="Nutree AI"
    >
      Nutree AI
    </span>
  );

  if (linkHome) {
    return (
      <Link href="/" className="inline-block">
        {logoText}
      </Link>
    );
  }

  return logoText;
}
