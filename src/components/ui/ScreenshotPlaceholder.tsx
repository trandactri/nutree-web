import { cn } from '@/lib/cn';

interface ScreenshotPlaceholderProps {
  aspectRatio?: '16:9' | '9:16' | '4:3' | '1:1';
  label?: string;
  className?: string;
}

export function ScreenshotPlaceholder({
  aspectRatio = '9:16',
  label = 'Screenshot',
  className,
}: ScreenshotPlaceholderProps) {
  const aspectClasses = {
    '16:9': 'aspect-video',
    '9:16': 'aspect-[9/16]',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-forest/10 to-primary-teal/10 border border-border/50',
        aspectClasses[aspectRatio],
        className
      )}
    >
      {/* Phone frame mockup */}
      <div className="absolute inset-4 flex items-center justify-center">
        <div className="relative h-full w-full max-w-[280px] overflow-hidden rounded-[2.5rem] bg-foreground/5 shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-foreground/10" />

          {/* Screen content placeholder */}
          <div className="flex h-full flex-col items-center justify-center p-8 text-center">
            {/* Gradient Text Logo */}
            <span className="mb-4 font-display text-xl font-bold bg-gradient-to-r from-primary-forest via-primary-emerald to-primary-teal bg-clip-text text-transparent opacity-60">
              NutreeAI
            </span>
            <span className="text-sm font-medium text-muted">{label}</span>
            <span className="mt-1 text-xs text-muted/60">Screenshot Placeholder</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-primary-teal/10 blur-2xl" />
      <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-primary-forest/10 blur-2xl" />
    </div>
  );
}
