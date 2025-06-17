import { cx, focusRing } from '@/lib/utils';
import { Switch as BaseSwitch } from '@base-ui-components/react/switch';
import type { ComponentProps } from 'react';

export function Switch({
  className,
  ...props
}: ComponentProps<typeof BaseSwitch.Root>) {
  return (
    <BaseSwitch.Root
      className={cx(
        focusRing,
        'relative flex h-6 w-10 cursor-pointer rounded-full bg-muted p-1 duration-200 ease-out-expo data-disabled:pointer-events-none data-checked:bg-primary data-disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <BaseSwitch.Thumb className="aspect-square h-full rounded-full bg-on-primary transition-transform duration-200 ease-out-expo data-checked:translate-x-4" />
    </BaseSwitch.Root>
  );
}
