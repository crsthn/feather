import { cx, focusRing } from '@/lib/utils';
import { Toggle as BaseToggle } from '@base-ui-components/react/toggle';
import { ToggleGroup as BaseToggleGroup } from '@base-ui-components/react/toggle-group';
import type { ComponentProps } from 'react';

export function ToggleGroup({
  className,
  ...props
}: ComponentProps<typeof BaseToggleGroup>) {
  return <BaseToggleGroup className={cx('flex', className)} {...props} />;
}

export function ToggleGroupItem({
  className,
  ...props
}: ComponentProps<typeof BaseToggle>) {
  return (
    <BaseToggle
      className={cx(
        focusRing,
        "flex size-8 min-w-0 flex-1 shrink-0 cursor-pointer select-none items-center justify-center first:rounded-l-lg last:rounded-r-lg hover:bg-secondary data-pressed:bg-muted [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  );
}

export function Toggle({
  className,
  ...props
}: ComponentProps<typeof BaseToggle>) {
  return (
    <BaseToggle
      className={cx(
        focusRing,
        "flex size-8 cursor-pointer select-none items-center justify-center rounded-lg hover:bg-secondary data-pressed:bg-muted [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  );
}
