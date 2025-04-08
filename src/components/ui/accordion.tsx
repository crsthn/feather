import { cx } from "@/lib/utils";
import { Accordion as BaseAccordion } from "@base-ui-components/react/accordion";
import { ChevronDown } from "lucide-react";
import type { ComponentProps } from "react";

const Accordion = BaseAccordion.Root;

function AccordionItem({
  className,
  ...props
}: ComponentProps<typeof BaseAccordion.Item>) {
  return (
    <BaseAccordion.Item
      className={cx("overflow-hidden border-b", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseAccordion.Trigger>) {
  return (
    <BaseAccordion.Header>
      <BaseAccordion.Trigger
        className={cx(
          "group flex w-full flex-1 cursor-pointer items-center justify-between py-3 text-left font-medium text-text focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset data-disabled:pointer-events-none data-disabled:text-text-3",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown
          size={16}
          className="shrink-0 text-text-2 transition-transform duration-200 ease-in-out group-data-panel-open:rotate-180 group-data-disabled:text-text-3"
          aria-hidden="true"
        />
      </BaseAccordion.Trigger>
    </BaseAccordion.Header>
  );
}

function AccordionPanel({ className, ...props }: ComponentProps<"div">) {
  return (
    <BaseAccordion.Panel className="h-[var(--accordion-panel-height)] transform-gpu transition-[height] duration-200 ease-in-out data-ending-style:h-0 data-starting-style:h-0">
      <div
        className={cx("overflow-hidden pb-3 text-text-2", className)}
        {...props}
      />
    </BaseAccordion.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionPanel };
