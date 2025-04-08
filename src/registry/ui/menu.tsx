"use client";
import { cx } from "@/lib/utils";
import { Menu as BaseMenu } from "@base-ui-components/react/menu";
import { Check, ChevronRight } from "lucide-react";
import type { ComponentProps } from "react";

const Menu = BaseMenu.Root;
const MenuTrigger = BaseMenu.Trigger;

function MenuPopup({
  className,
  ...props
}: ComponentProps<typeof BaseMenu.Popup>) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner className="z-50" sideOffset={8}>
        <BaseMenu.Popup
          className={cx(
            "min-w-40 origin-[var(--transform-origin)] rounded-lg bg-popover p-1 text-text shadow-[0_8px_30px_rgba(0,0,0,0.08),0_4px_15px_rgba(0,0,0,0.06)] outline-none backdrop-blur-2xl transition-all ease-out data-ending-style:scale-90 data-starting-style:scale-90 data-ending-style:opacity-0 data-starting-style:opacity-0 data-closed:duration-150 data-open:duration-200",
            className
          )}
          {...props}
        />
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  );
}

function MenuItem({
  className,
  ...props
}: ComponentProps<typeof BaseMenu.Item>) {
  return (
    <BaseMenu.Item
      className={cx(
        "flex h-8 cursor-pointer select-none items-center gap-2 rounded-md px-2 outline-none data-disabled:data-highlighted:bg-transparent data-disabled:pointer-events-none data-highlighted:bg-secondary data-disabled:text-text-3",
        className
      )}
      {...props}
    />
  );
}

function MenuSeparator({
  className,
  ...props
}: ComponentProps<typeof BaseMenu.Separator>) {
  return (
    <BaseMenu.Separator
      className={cx("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  );
}

function MenuCheckboxItem({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseMenu.CheckboxItem>) {
  return (
    <BaseMenu.CheckboxItem
      className={cx(
        "grid h-8 cursor-pointer select-none grid-cols-[1fr_1rem] items-center gap-4 rounded-md px-2 outline-none data-disabled:data-highlighted:bg-transparent data-disabled:pointer-events-none data-highlighted:bg-secondary data-disabled:text-text-3",
        className
      )}
      {...props}
    >
      {children}
      <BaseMenu.CheckboxItemIndicator className="text-primary data-disabled:opacity-50">
        <Check size={16} strokeWidth={3} />
      </BaseMenu.CheckboxItemIndicator>
    </BaseMenu.CheckboxItem>
  );
}

const MenuRadioGroup = BaseMenu.RadioGroup;

function MenuRadioItem({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseMenu.RadioItem>) {
  return (
    <BaseMenu.RadioItem
      className={cx(
        "grid h-8 cursor-pointer select-none grid-cols-[1fr_1rem] items-center gap-4 rounded-md px-2 outline-none data-disabled:data-highlighted:bg-transparent data-disabled:pointer-events-none data-highlighted:bg-secondary data-disabled:text-text-3",
        className
      )}
      {...props}
    >
      {children}
      <BaseMenu.RadioItemIndicator className="text-primary data-disabled:opacity-50">
        <Check size={16} strokeWidth={3} />
      </BaseMenu.RadioItemIndicator>
    </BaseMenu.RadioItem>
  );
}

const MenuGroup = BaseMenu.Group;

function MenuGroupLabel({
  className,
  ...props
}: ComponentProps<typeof BaseMenu.GroupLabel>) {
  return (
    <BaseMenu.GroupLabel
      className={cx(
        "flex h-8 items-center px-2 text-text-2 text-xs",
        className
      )}
      {...props}
    />
  );
}

function MenuSubmenuTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseMenu.SubmenuTrigger>) {
  return (
    <BaseMenu.SubmenuTrigger
      className={cx(
        "flex h-8 cursor-pointer select-none items-center justify-between gap-4 rounded-md px-2 outline-none data-disabled:data-highlighted:bg-transparent data-disabled:pointer-events-none data-highlighted:bg-secondary data-disabled:text-text-3",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight size={16} />
    </BaseMenu.SubmenuTrigger>
  );
}

export {
  Menu,
  MenuTrigger,
  MenuPopup,
  MenuItem,
  MenuSeparator,
  MenuCheckboxItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuGroup,
  MenuGroupLabel,
  MenuSubmenuTrigger,
};
