'use client';
import { cx, focusInteractive } from '@/lib/utils';
import {
  Checkbox as BaseCheckbox,
  CheckboxGroup as BaseCheckboxGroup,
} from '@base-ui-components/react';
import { Check } from 'lucide-react';
import type { ComponentProps } from 'react';

export function CheckboxGroup({
  className,
  ...props
}: ComponentProps<typeof BaseCheckboxGroup>) {
  return (
    <BaseCheckboxGroup
      className={cx('flex flex-col gap-2', className)}
      {...props}
    />
  );
}

export function Checkbox({
  className,
  ...props
}: ComponentProps<typeof BaseCheckbox.Root>) {
  return (
    <BaseCheckbox.Root
      className={cx(
        focusInteractive,
        'inline-flex size-4 shrink-0 cursor-pointer appearance-none items-center justify-center rounded-sm border border-input bg-surface shadow-xs data-disabled:data-unchecked:bg-secondary data-disabled:pointer-events-none data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <BaseCheckbox.Indicator className="flex items-center justify-center text-on-primary data-unchecked:hidden">
        <Check size={12} strokeWidth={4} />
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  );
}
