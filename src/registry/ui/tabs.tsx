import { cx, focusRing } from '@/lib/utils';
import { Tabs as BaseTabs } from '@base-ui-components/react/tabs';
import type { ComponentProps } from 'react';

export const Tabs = BaseTabs.Root;

export function TabsList({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseTabs.List>) {
  return (
    <BaseTabs.List
      className={cx(
        'relative z-0 flex w-fit rounded-lg bg-muted p-0.5',
        className,
      )}
      {...props}
    >
      {children}
      <BaseTabs.Indicator className="absolute left-0 z-[-1] h-8 w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)] rounded-md bg-surface transition-all duration-300 ease-out-quint" />
    </BaseTabs.List>
  );
}

export function TabsTrigger({
  className,
  ...props
}: ComponentProps<typeof BaseTabs.Tab>) {
  return (
    <BaseTabs.Tab
      className={cx(
        focusRing,
        'inline-flex h-8 cursor-pointer items-center justify-center gap-2 rounded-md px-3 font-medium text-text-2 duration-300 ease-out-quint data-disabled:pointer-events-none data-disabled:text-text-3 data-selected:text-text',
        className,
      )}
      {...props}
    />
  );
}

export function TabsPanel({
  className,
  ...props
}: ComponentProps<typeof BaseTabs.Panel>) {
  return (
    <BaseTabs.Panel className={cx('outline-none', className)} {...props} />
  );
}
