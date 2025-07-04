import { cx } from '@/lib/utils';
import type { ComponentProps } from 'react';

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cx('animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  );
}
