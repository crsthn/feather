import { cx, focusRing } from '@/lib/utils';
import { Slider as BaseSlider } from '@base-ui-components/react/slider';
import type { ComponentProps } from 'react';

function Slider({
  className,
  ...props
}: ComponentProps<typeof BaseSlider.Root>) {
  return (
    <BaseSlider.Root className={cx('w-full', className)} {...props}>
      <BaseSlider.Control className="flex w-full items-center">
        <BaseSlider.Track className="h-1 w-full grow cursor-pointer rounded-full bg-muted">
          <BaseSlider.Indicator className="rounded-full bg-primary" />
          <BaseSlider.Thumb
            className={cx(
              focusRing,
              'size-4 cursor-pointer rounded-full border-2 border-primary bg-on-primary transition-shadow disabled:pointer-events-none data-disabled:opacity-50',
            )}
          />
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}

export { Slider };
