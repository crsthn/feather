import { cx } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import type { ComponentProps } from 'react';

const spinnerStyles = cva(
  'shrink-0 animate-spin rounded-full border-current border-t-transparent',
  {
    variants: {
      size: {
        sm: 'size-4 border-2',
        md: 'size-8 border-4',
        lg: 'size-16 border-8',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  },
);

export function Spinner({
  className,
  size,
  ...props
}: ComponentProps<'div'> & VariantProps<typeof spinnerStyles>) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cx(spinnerStyles({ size }), className)}
      {...props}
    />
  );
}
