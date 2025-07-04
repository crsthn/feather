'use client';
import { cx } from '@/lib/utils';
import { Menu as BaseMenu } from '@base-ui-components/react/menu';
import { Check, ChevronRight } from 'lucide-react';
import type { ComponentProps } from 'react';

export const Menu = BaseMenu.Root;
export const MenuTrigger = BaseMenu.Trigger;

export function MenuPopup({
  className,
  ...props
}: ComponentProps<typeof BaseMenu.Popup>) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner className="z-50" sideOffset={8}>
        <BaseMenu.Popup
          className={cx(
            'min-w-40 origin-[var(--transform-origin)] rounded-lg border bg-bg p-1 shadow-[0_24px_32px_-8px_rgba(0,0,0,0.06),0_8px_16px_-4px_rgba(0,0,0,0.04)] outline-none transition-all ease-out-cubic data-ending-style:scale-95 data-starting-style:scale-95 data-ending-style:opacity-0 data-starting-style:opacity-0',
            className,
          )}
          {...props}
        />
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  );
}

export function MenuItem({
  className,
  ...props
}: ComponentProps<typeof BaseMenu.Item>) {
  return (
    <BaseMenu.Item
      className={cx(
        "flex h-8 cursor-pointer select-none items-center gap-2 rounded-md px-2 outline-none transition-colors data-disabled:data-highlighted:bg-transparent data-disabled:pointer-events-none data-highlighted:bg-secondary data-disabled:text-text-3 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  );
}

export function MenuSeparator({
  className,
  ...props
}: ComponentProps<typeof BaseMenu.Separator>) {
  return (
    <BaseMenu.Separator
      className={cx('-mx-1 my-1 h-px bg-border', className)}
      {...props}
    />
  );
}

export function MenuCheckboxItem({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseMenu.CheckboxItem>) {
  return (
    <BaseMenu.CheckboxItem
      className={cx(
        'grid h-8 cursor-pointer select-none grid-cols-[1fr_1rem] items-center gap-2 rounded-md px-2 outline-none transition-colors data-disabled:data-highlighted:bg-transparent data-disabled:pointer-events-none data-highlighted:bg-secondary data-disabled:text-text-3',
        className,
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

export const MenuRadioGroup = BaseMenu.RadioGroup;

export function MenuRadioItem({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseMenu.RadioItem>) {
  return (
    <BaseMenu.RadioItem
      className={cx(
        'grid h-8 cursor-pointer select-none grid-cols-[1fr_1rem] items-center gap-2 rounded-md px-2 outline-none transition-colors data-disabled:data-highlighted:bg-transparent data-disabled:pointer-events-none data-highlighted:bg-secondary data-disabled:text-text-3',
        className,
      )}
      {...props}
    >
      {children}
      <span className="flex size-4 items-center justify-center">
        <BaseMenu.RadioItemIndicator className="size-2 rounded-full bg-primary data-disabled:opacity-50" />
      </span>
    </BaseMenu.RadioItem>
  );
}

export const MenuGroup = BaseMenu.Group;

export function MenuGroupLabel({
  className,
  ...props
}: ComponentProps<typeof BaseMenu.GroupLabel>) {
  return (
    <BaseMenu.GroupLabel
      className={cx(
        'flex h-8 items-center px-2 text-text-2 text-xs',
        className,
      )}
      {...props}
    />
  );
}

export function MenuSubmenuTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseMenu.SubmenuTrigger>) {
  return (
    <BaseMenu.SubmenuTrigger
      className="flex h-8 cursor-pointer select-none items-center justify-between gap-2 rounded-md px-2 outline-none transition-color data-disabled:data-highlighted:bg-transparent data-disabled:pointer-events-none data-highlighted:bg-secondary data-disabled:text-text-3"
      {...props}
    >
      <span
        className={cx(
          "flex items-center gap-2 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
          className,
        )}
      >
        {children}
      </span>
      <ChevronRight size={16} className="text-text-2" />
    </BaseMenu.SubmenuTrigger>
  );
}
