import { cx, focusRing } from '@/lib/utils';
import { Accordion as BaseAccordion } from '@base-ui-components/react/accordion';
import { ChevronDown } from 'lucide-react';
import type { ComponentProps } from 'react';

export function Accordion({
  className,
  ...props
}: ComponentProps<typeof BaseAccordion.Root>) {
  return <BaseAccordion.Root className={cx('w-full', className)} {...props} />;
}

export function AccordionItem({
  className,
  ...props
}: ComponentProps<typeof BaseAccordion.Item>) {
  return (
    <BaseAccordion.Item
      className={cx('not-last:border-b', className)}
      {...props}
    />
  );
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseAccordion.Trigger>) {
  return (
    <BaseAccordion.Header>
      <BaseAccordion.Trigger
        className={cx(
          focusRing,
          'group flex w-full cursor-pointer items-center justify-between rounded-lg py-3 text-left font-medium data-disabled:pointer-events-none data-disabled:text-text-3',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown
          size={16}
          className="shrink-0 text-text-2 transition-transform duration-300 ease-out-quint group-data-panel-open:rotate-180 group-data-disabled:text-text-3"
          aria-hidden="true"
        />
      </BaseAccordion.Trigger>
    </BaseAccordion.Header>
  );
}

export function AccordionPanel({ className, ...props }: ComponentProps<'div'>) {
  return (
    <BaseAccordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden transition-all duration-300 ease-out-quint data-ending-style:h-0 data-starting-style:h-0 data-ending-style:opacity-0 data-starting-style:opacity-0">
      <div className={cx('pb-3 text-text-2', className)} {...props} />
    </BaseAccordion.Panel>
  );
}
