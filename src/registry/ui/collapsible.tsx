import { cx } from "@/lib/utils";
import { Collapsible as BaseCollapsible } from "@base-ui-components/react/collapsible";
import type { ComponentProps } from "react";

function Collapsible({
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

function CollapsibleTrigger({
  className,
  ...props
}: ComponentProps<typeof BaseCollapsible.Trigger>) {
  return (
    <BaseCollapsible.Trigger
      className={cx("group cursor-pointer", className)}
      {...props}
    />
  );
}

function CollapsiblePanel({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <BaseCollapsible.Panel
      keepMounted
      className="h-[var(--collapsible-panel-height)] transition-[height] duration-200 ease-in-out data-ending-style:h-0 data-starting-style:h-0"
    >
      <div className={cx("overflow-hidden", className)} {...props}>
        {children}
      </div>
    </BaseCollapsible.Panel>
  );
}

export { Collapsible, CollapsibleTrigger, CollapsiblePanel };
