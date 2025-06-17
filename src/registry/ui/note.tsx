import { cx } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import type { ComponentProps } from 'react';

const noteStyles = cva(
  "flex flex-col gap-1 overflow-hidden rounded-lg p-4 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: 'bg-primary-muted [&_svg]:text-primary',
        secondary: 'bg-muted',
        danger: 'bg-danger-muted [&_svg]:text-danger',
      },
    },
    defaultVariants: {
      variant: 'secondary',
    },
  },
);

export function Note({
  variant,
  className,
  ...props
}: ComponentProps<'div'> & VariantProps<typeof noteStyles>) {
  return <div className={cx(noteStyles({ variant }), className)} {...props} />;
}
