'use client';
import { cx } from '@/lib/utils';
import { Popover as BasePopover } from '@base-ui-components/react';
import type { ComponentProps } from 'react';

const Popover = BasePopover.Root;
const PopoverTrigger = BasePopover.Trigger;

function PopoverPopup({
  className,
  ...props
}: ComponentProps<typeof BasePopover.Popup>) {
  return (
    <BasePopover.Portal>
      <BasePopover.Positioner sideOffset={8} className="z-50">
        <BasePopover.Popup
          className={cx(
            'min-w-48 origin-[var(--transform-origin)] rounded-lg border bg-bg p-4 shadow-[0_24px_32px_-8px_rgba(0,0,0,0.06),0_8px_16px_-4px_rgba(0,0,0,0.04)] outline-none transition-all ease-out-cubic data-ending-style:scale-95 data-starting-style:scale-95 data-ending-style:opacity-0 data-starting-style:opacity-0',
            className,
          )}
          {...props}
        />
      </BasePopover.Positioner>
    </BasePopover.Portal>
  );
}

function PopoverTitle({
  className,
  ...props
}: ComponentProps<typeof BasePopover.Title>) {
  return (
    <BasePopover.Title className={cx('font-medium', className)} {...props} />
  );
}

function PopoverDescription({
  className,
  ...props
}: ComponentProps<typeof BasePopover.Description>) {
  return (
    <BasePopover.Description
      className={cx('text-text-2', className)}
      {...props}
    />
  );
}

export {
  Popover,
  PopoverTrigger,
  PopoverPopup,
  PopoverTitle,
  PopoverDescription,
};
