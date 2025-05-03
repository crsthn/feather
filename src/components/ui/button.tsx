import { focusRing } from '@/lib/utils';
import type { ComponentProps } from 'react';
import { type VariantProps, tv } from 'tailwind-variants';

const buttonStyles = tv({
  base: [
    focusRing,
    'inline-flex cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-lg font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  ],
  variants: {
    color: {
      primary: 'ring-primary/50',
      secondary: 'ring-muted',
      danger: 'ring-danger/50',
    },
    size: {
      sm: 'h-8 text-sm [&_svg]:size-4',
      md: 'h-10 text-sm [&_svg]:size-4',
      lg: 'h-12 text-base [&_svg]:size-5',
    },
    variant: {
      solid: 'border',
      subtle: 'bg-transparent hover:bg-secondary',
    },
    iconOnly: {
      true: 'aspect-square',
      false: '',
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: 'solid',
      class:
        'border border-input bg-primary text-on-primary hover:bg-[color-mix(in_oklab,var(--primary),var(--text)_10%)] active:bg-primary',
    },
    {
      color: 'secondary',
      variant: 'solid',
      class:
        'border-black/4 bg-secondary hover:bg-[color-mix(in_oklab,var(--secondary),var(--color-black)_4%)] active:bg-secondary dark:border-white/5 dark:active:bg-secondary dark:hover:bg-[color-mix(in_oklab,var(--secondary),var(--color-white)_5%)]',
    },
    {
      color: 'danger',
      variant: 'solid',
      class:
        'border border-input bg-danger text-on-danger hover:bg-[color-mix(in_oklab,var(--danger),var(--text)_10%)] active:bg-danger',
    },
    {
      color: 'primary',
      variant: 'subtle',
      class: 'text-primary',
    },
    {
      color: 'danger',
      variant: 'subtle',
      class: 'text-danger',
    },
    {
      iconOnly: false,
      size: 'sm',
      class: 'gap-1 px-3',
    },
    {
      iconOnly: false,
      size: 'md',
      class: 'gap-2 px-4',
    },
    {
      iconOnly: false,
      size: 'lg',
      class: 'gap-2 px-6',
    },
  ],
  defaultVariants: {
    color: 'primary',
    size: 'md',
    variant: 'solid',
    iconOnly: false,
  },
});

type ButtonProps = Omit<
  ComponentProps<'button'>,
  keyof VariantProps<typeof buttonStyles>
> &
  VariantProps<typeof buttonStyles> & {
    iconOnly?: boolean;
  };

function Button({
  className,
  color,
  size,
  variant,
  iconOnly,
  ref,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonStyles({ color, size, variant, iconOnly, className })}
      {...props}
    />
  );
}

export { Button, buttonStyles, type ButtonProps };
