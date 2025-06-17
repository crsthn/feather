import { cx, focusInput } from '@/lib/utils';
import { Input as BaseInput } from '@base-ui-components/react/input';
import type { ComponentProps } from 'react';

export function Input({
  className,
  size,
  ...props
}: ComponentProps<typeof BaseInput>) {
  return (
    <BaseInput
      className={cx(
        focusInput,
        'flex h-9 w-full appearance-none rounded-lg border border-input bg-surface px-3 text-sm shadow-xs placeholder:text-text-3 data-disabled:pointer-events-none data-invalid:border-danger data-disabled:bg-secondary data-disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}
