import { cx } from "@/lib/utils";
import { Tabs as BaseTabs } from "@base-ui-components/react/tabs";
import type { ComponentProps } from "react";

const Tabs = BaseTabs.Root;

type TabsListProps = ComponentProps<typeof BaseTabs.List> & {
  indicatorClassName?: string;
};

function TabsList({
  className,
  children,
  indicatorClassName,
  ...props
}: TabsListProps) {
  return (
    <BaseTabs.List
      className={cx(
        "relative z-0 flex w-fit rounded-lg bg-muted p-0.5",
        className
      )}
      {...props}
    >
      {children}
      <BaseTabs.Indicator
        className={cx(
          "absolute left-0 z-[-1] h-8 w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)] rounded-md bg-surface transition-all duration-200 ease-in-out",
          indicatorClassName
        )}
      />
    </BaseTabs.List>
  );
}

function TabsTrigger({
  className,
  ...props
}: ComponentProps<typeof BaseTabs.Tab>) {
  return (
    <BaseTabs.Tab
      className={cx(
        "inline-flex h-8 cursor-pointer items-center justify-center gap-2 rounded-md px-3 font-medium text-text-2 outline-0 outline-primary transition-all duration-200 ease-in-out focus-visible:outline-2 disabled:pointer-events-none disabled:opacity-50 data-selected:text-text",
        className
      )}
      {...props}
    />
  );
}

function TabsPanel({
  className,
  ...props
}: ComponentProps<typeof BaseTabs.Panel>) {
  return (
    <BaseTabs.Panel
      className={cx(
        "focus-visible:-outline-offset-2 rounded-lg text-text outline-primary focus-visible:outline-2",
        className
      )}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsPanel };
