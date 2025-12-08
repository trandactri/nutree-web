import { forwardRef } from 'react';
import { cn } from '@/lib/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-display font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-teal focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      primary:
        'text-white bg-gradient-brand rounded-full hover:shadow-lg hover:shadow-primary-teal/25 hover:-translate-y-0.5 active:translate-y-0',
      secondary:
        'text-primary-forest border-2 border-primary-forest/20 rounded-full hover:border-primary-forest/40 hover:bg-primary-forest/5',
      ghost: 'text-primary-forest hover:bg-primary-forest/5 rounded-lg',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
