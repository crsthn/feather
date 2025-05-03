'use client';
import { labelStyles } from '@/components/ui/label';
import { cx } from '@/lib/utils';
import { Progress as BaseProgress } from '@base-ui-components/react';
import type { ComponentProps } from 'react';

function Progress({
  className,
  ...props
}: ComponentProps<typeof BaseProgress.Root>) {
  return (
    <BaseProgress.Root className={cx('w-full', className)} {...props}>
      <BaseProgress.Track className="block h-2 w-full overflow-hidden rounded-full bg-muted">
        <BaseProgress.Indicator className="block h-full bg-primary transition-all duration-600 ease-out-quart" />
      </BaseProgress.Track>
    </BaseProgress.Root>
  );
}

const ProgressValue = BaseProgress.Value;

function ProgressLabel({
  className,
  ...props
}: ComponentProps<typeof BaseProgress.Label>) {
  return (
    <BaseProgress.Label
      className={labelStyles({ className: className as string })}
      {...props}
    />
  );
}

export { Progress, ProgressLabel, ProgressValue };
