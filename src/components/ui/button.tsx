import { Spinner } from '@/components/ui/spinner';
import { cx, focusRing } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import type { ComponentProps } from 'react';

export const buttonStyles = cva(
  [
    focusRing,
    "inline-flex shrink-0 cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-lg font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-on-primary hover:bg-[color-mix(in_oklab,var(--primary),var(--text)_10%)]',
        secondary:
          'border border-black/4 bg-secondary hover:bg-[color-mix(in_oklab,var(--secondary),var(--color-black)_4%)] dark:border-white/5 dark:hover:bg-[color-mix(in_oklab,var(--secondary),var(--color-white)_5%)]',
        danger:
          'bg-danger text-on-danger ring-danger/50 hover:bg-[color-mix(in_oklab,var(--danger),var(--text)_10%)]',
        subtle: 'hover:bg-secondary',
      },
      size: {
        sm: 'h-8',
        md: 'h-9',
        lg: 'h-10',
      },
      iconOnly: {
        true: 'aspect-square',
        false: null,
      },
    },
    compoundVariants: [
      {
        size: 'sm',
        iconOnly: false,
        className: 'gap-1.5 px-3',
      },
      {
        size: 'md',
        iconOnly: false,
        className: 'gap-2 px-4',
      },
      {
        size: 'lg',
        iconOnly: false,
        className: 'gap-2.5 px-5',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      iconOnly: false,
    },
  },
);

export function Button({
  className,
  size,
  variant,
  iconOnly,
  ...props
}: ComponentProps<'button'> & VariantProps<typeof buttonStyles>) {
  return (
    <button
      className={cx(buttonStyles({ variant, size, iconOnly }), className)}
      {...props}
    />
  );
}

export function ActionButton({
  className,
  loading,
  disabled,
  children,
  ...props
}: ComponentProps<'button'> &
  VariantProps<typeof buttonStyles> & {
    loading: boolean;
  }) {
  return (
    <Button
      className={cx('relative overflow-hidden', className)}
      disabled={disabled || loading}
      {...props}
    >
      <span
        className={cx(
          "inline-flex items-center justify-center gap-2 transition-all duration-200 ease-out-quint [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
          loading && 'translate-y-[200%] opacity-0',
        )}
      >
        {children}
      </span>
      <Spinner
        className={cx(
          '-translate-y-[200%] absolute opacity-0 transition-all duration-200 ease-out-quint',
          loading && 'translate-y-0 opacity-100',
        )}
      />
    </Button>
  );
}
