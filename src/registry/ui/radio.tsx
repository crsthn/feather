'use client';
import { cx, focusRing } from '@/lib/utils';
import {
  Radio as BaseRadio,
  RadioGroup as BaseRadioGroup,
} from '@base-ui-components/react';
import type { ComponentProps } from 'react';

export function RadioGroup({
  className,
  ...props
}: ComponentProps<typeof BaseRadioGroup>) {
  return (
    <BaseRadioGroup
      className={cx('flex flex-col items-start gap-1', className)}
      {...props}
    />
  );
}

export function Radio({
  className,
  ...props
}: ComponentProps<typeof BaseRadio.Root>) {
  return (
    <BaseRadio.Root
      className={cx(
        focusRing,
        'inline-flex size-4 shrink-0 cursor-pointer appearance-none items-center justify-center rounded-full border border-input bg-surface shadow-xs data-disabled:data-unchecked:bg-secondary data-disabled:pointer-events-none data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <BaseRadio.Indicator className="size-2 rounded-full bg-on-primary data-unchecked:hidden" />
    </BaseRadio.Root>
  );
}
