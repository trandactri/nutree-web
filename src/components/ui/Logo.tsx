import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/cn';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  linkHome?: boolean;
}

const sizes = {
  sm: { width: 120, height: 32 },
  md: { width: 160, height: 42 },
  lg: { width: 240, height: 64 },
};

export function Logo({ size = 'md', className, linkHome = true }: LogoProps) {
  const { width, height } = sizes[size];

  const image = (
    <Image
      src="/logo.png"
      alt="Nutree AI"
      width={width}
      height={height}
      className={cn('h-auto w-auto', className)}
      priority
    />
  );

  if (linkHome) {
    return (
      <Link href="/" className="inline-block">
        {image}
      </Link>
    );
  }

  return image;
}
