import { cx } from '@/lib/utils';
import type { ComponentProps } from 'react';

export function Card({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cx('rounded-xl border bg-surface', className)} {...props} />
  );
}

export function CardHeader({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cx('flex flex-col gap-1 p-6', className)} {...props} />
  );
}

export function CardTitle({ className, ...props }: ComponentProps<'h3'>) {
  return <h3 className={cx('font-semibold text-lg', className)} {...props} />;
}

export function CardDescription({ className, ...props }: ComponentProps<'p'>) {
  return <p className={cx('text-text-2', className)} {...props} />;
}

export function CardMain({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cx('px-6 pb-6', className)} {...props} />;
}

export function CardFooter({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cx('flex items-center px-6 pb-6', className)} {...props} />
  );
}
