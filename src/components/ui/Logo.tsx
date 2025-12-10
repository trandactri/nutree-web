import Link from 'next/link';
import Image from 'next/image';
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

const iconSizes = {
  sm: 28,
  md: 36,
  lg: 48,
};

export function Logo({ size = 'md', className, linkHome = true }: LogoProps) {
  const iconSize = iconSizes[size];

  const logoContent = (
    <span
      className={cn(
        'inline-flex items-center gap-2',
        className
      )}
      aria-label="Nutree AI"
    >
      <picture>
        <source srcSet="/logo-gradient-200.webp" type="image/webp" />
        <Image
          src="/logo-gradient-200.png"
          alt="Nutree AI Icon"
          width={iconSize}
          height={iconSize}
          className="object-contain rounded-lg"
          priority={size === 'sm'}
        />
      </picture>
      <span
        className={cn(
          'font-display font-semibold bg-gradient-to-r from-primary-forest via-primary-emerald to-primary-teal bg-clip-text text-transparent',
          sizeClasses[size]
        )}
      >
        Nutree AI
      </span>
    </span>
  );

  if (linkHome) {
    return (
      <Link href="/" className="inline-block">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
