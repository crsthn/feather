import { cx } from '@/lib/utils';
import type { ComponentProps } from 'react';

export const labelStyles =
  'inline-flex items-center gap-2 text-text data-disabled:text-text-3';

export function Label({ className, ...props }: ComponentProps<'label'>) {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: false positive
    <label className={cx(labelStyles, className)} {...props} />
  );
}
