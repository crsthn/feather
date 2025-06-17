import { cx } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import type { ComponentProps } from 'react';

const badgeStyles = cva(
  'inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-full font-medium',
  {
    variants: {
      variant: {
        primary: 'bg-primary-muted text-primary',
        secondary: 'bg-muted text-text',
        danger: 'bg-danger-muted text-danger',
      },
      size: {
        sm: 'h-4 px-1.5 text-xs',
        md: 'h-5 px-2 text-xs',
        lg: 'h-6 px-2.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export function Badge({
  className,
  variant,
  size,
  ...props
}: ComponentProps<'span'> & VariantProps<typeof badgeStyles>) {
  return (
    <span
      className={cx(badgeStyles({ variant, size }), className)}
      {...props}
    />
  );
}
