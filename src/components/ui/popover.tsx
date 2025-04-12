"use client";
import { cx } from "@/lib/utils";
import { Popover as BasePopover } from "@base-ui-components/react";
import type { ComponentProps } from "react";

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
            "origin-[var(--transform-origin)] rounded-lg bg-popover p-4 text-text shadow-[0_8px_30px_rgba(0,0,0,0.08),0_4px_15px_rgba(0,0,0,0.06)] outline-none backdrop-blur-2xl transition-all ease-out data-ending-style:scale-95 data-starting-style:scale-95 data-ending-style:opacity-0 data-starting-style:opacity-0 data-closed:duration-150 data-open:duration-200",
            className
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
    <BasePopover.Title className={cx("font-medium", className)} {...props} />
  );
}

function PopoverDescription({
  className,
  ...props
}: ComponentProps<typeof BasePopover.Description>) {
  return (
    <BasePopover.Description
      className={cx("text-text-2", className)}
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
