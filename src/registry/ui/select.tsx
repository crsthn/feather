"use client";
import { cx, focusInteractive } from "@/lib/utils";
import { Select as BaseSelect } from "@base-ui-components/react";
import { ChevronsUpDown } from "lucide-react";
import type { ComponentProps } from "react";

function Select(props: ComponentProps<typeof BaseSelect.Root>) {
  return <BaseSelect.Root alignItemToTrigger={false} {...props} />;
}
const SelectValue = BaseSelect.Value;
const SelectGroup = BaseSelect.Group;

function SelectTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseSelect.Trigger>) {
  return (
    <BaseSelect.Trigger
      className={cx(
        "group flex h-10 w-full min-w-36 cursor-pointer select-none items-center justify-between gap-4 rounded-lg border bg-surface px-3 text-text shadow-xs disabled:placeholder:text-text-3 data-disabled:pointer-events-none data-disabled:bg-secondary data-placeholder:text-text-2 data-disabled:opacity-50",
        focusInteractive,
        className
      )}
      {...props}
    >
      {children}
      <BaseSelect.Icon>
        <ChevronsUpDown size={16} className="text-text-2" />
      </BaseSelect.Icon>
    </BaseSelect.Trigger>
  );
}

function SelectPopup({
  className,
  ...props
}: ComponentProps<typeof BaseSelect.Popup>) {
  return (
    <BaseSelect.Portal>
      <BaseSelect.Positioner className="z-50" sideOffset={8}>
        <BaseSelect.Popup
          className={cx(
            "group origin-[var(--transform-origin)] rounded-lg border-0 bg-popover p-1 shadow-[0_8px_30px_rgba(0,0,0,0.08),0_4px_15px_rgba(0,0,0,0.06)] outline-none backdrop-blur-2xl transition-all ease-out data-ending-style:scale-95 data-starting-style:scale-95 data-ending-style:opacity-0 data-starting-style:opacity-0 data-closed:duration-150 data-open:duration-200",
            className
          )}
          {...props}
        />
      </BaseSelect.Positioner>
    </BaseSelect.Portal>
  );
}

function SelectItem({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseSelect.Item>) {
  return (
    <BaseSelect.Item
      className={cx(
        "grid h-8 min-w-[calc(var(--anchor-width)-0.5rem)] cursor-pointer select-none grid-cols-[1fr_1rem] items-center gap-4 rounded-md px-2 outline-none data-disabled:data-highlighted:bg-transparent data-disabled:pointer-events-none data-highlighted:bg-secondary data-disabled:text-text-3",
        className
      )}
      {...props}
    >
      <BaseSelect.ItemText>{children}</BaseSelect.ItemText>
      <BaseSelect.ItemIndicator className="flex size-4 items-center justify-center">
        <span className="size-2 rounded-full bg-primary data-disabled:opacity-50" />
      </BaseSelect.ItemIndicator>
    </BaseSelect.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: ComponentProps<typeof BaseSelect.Separator>) {
  return (
    <BaseSelect.Separator
      className={cx("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  );
}

function SelectGroupLabel({
  className,
  ...props
}: ComponentProps<typeof BaseSelect.GroupLabel>) {
  return (
    <BaseSelect.GroupLabel
      className={cx(
        "flex h-8 items-center px-2 text-xs",
        "text-text-2",
        className
      )}
      {...props}
    />
  );
}

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectPopup,
  SelectItem,
  SelectSeparator,
  SelectGroup,
  SelectGroupLabel,
};
