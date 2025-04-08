import { cx, focusRing } from "@/lib/utils";
import { Collapsible as BaseCollapsible } from "@base-ui-components/react/collapsible";
import { ChevronRight } from "lucide-react";
import type { ComponentProps } from "react";

function Folder({
  className,
  ...props
}: ComponentProps<typeof BaseCollapsible.Root>) {
  return (
    <BaseCollapsible.Root
      className={cx("overflow-hidden", className)}
      {...props}
    />
  );
}

function FolderTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseCollapsible.Trigger>) {
  return (
    <BaseCollapsible.Trigger
      className={cx(
        "group flex h-8 w-full flex-1 cursor-pointer items-center justify-between",
        "text-left font-medium text-text-2",
        "rounded-md px-2 hover:bg-secondary",
        "data-disabled:pointer-events-none data-disabled:text-text-3",
        focusRing,
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight
        size={16}
        className="shrink-0 text-text-2 transition-transform duration-200 ease-in-out group-data-panel-open:rotate-90 group-data-disabled:text-text-3"
        aria-hidden="true"
      />
    </BaseCollapsible.Trigger>
  );
}

function FolderContent({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    // NOTE: With nested panels, the CSS variable may not calculate the correct height
    <BaseCollapsible.Panel
      keepMounted
      className="h-[var(--collapsible-panel-height)] transition-[height] duration-200 ease-in-out data-ending-style:h-0 data-starting-style:h-0"
    >
      <div className={cx("overflow-hidden pl-3", className)} {...props}>
        {children}
      </div>
    </BaseCollapsible.Panel>
  );
}

export { Folder, FolderTrigger, FolderContent };
