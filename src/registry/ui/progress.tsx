'use client';
import { labelStyles } from '@/components/ui/label';
import { cx } from '@/lib/utils';
import { Progress as BaseProgress } from '@base-ui-components/react';
import type { ComponentProps } from 'react';

export function Progress({
  className,
  ...props
}: ComponentProps<typeof BaseProgress.Root>) {
  return (
    <BaseProgress.Root className={cx('w-full', className)} {...props}>
      <BaseProgress.Track className="block h-2 w-full overflow-hidden rounded-full bg-muted">
        <BaseProgress.Indicator className="block h-full rounded-full bg-primary transition-all duration-500 ease-out-circ" />
      </BaseProgress.Track>
    </BaseProgress.Root>
  );
}

export const ProgressValue = BaseProgress.Value;

export function ProgressLabel({
  className,
  ...props
}: ComponentProps<typeof BaseProgress.Label>) {
  return (
    <BaseProgress.Label className={cx(labelStyles, className)} {...props} />
  );
}
