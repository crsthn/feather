import { cx } from '@/lib/utils';
import { Avatar as BaseAvatar } from '@base-ui-components/react/avatar';
import { type VariantProps, cva } from 'class-variance-authority';
import type { ComponentProps } from 'react';

const avatarStyles = cva(
  'relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden rounded-full align-middle',
  {
    variants: {
      size: {
        sm: 'size-8 text-sm',
        md: 'size-10 text-base',
        lg: 'size-12 text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export function Avatar({
  className,
  size,
  ...props
}: ComponentProps<typeof BaseAvatar.Root> & VariantProps<typeof avatarStyles>) {
  return (
    <BaseAvatar.Root
      className={cx(avatarStyles({ size }), className)}
      {...props}
    />
  );
}

export function AvatarImage({
  className,
  ...props
}: ComponentProps<typeof BaseAvatar.Image>) {
  return (
    <BaseAvatar.Image
      className={cx('size-full object-cover', className)}
      {...props}
    />
  );
}

export function AvatarFallback({
  className,
  ...props
}: ComponentProps<typeof BaseAvatar.Fallback>) {
  return (
    <BaseAvatar.Fallback
      className={cx(
        'flex size-full items-center justify-center bg-muted font-medium text-primary uppercase',
        className,
      )}
      {...props}
    />
  );
}
