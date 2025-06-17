import { cx, focusRing } from '@/lib/utils';
import { Collapsible as BaseCollapsible } from '@base-ui-components/react/collapsible';
import type { ComponentProps } from 'react';

export const Collapsible = BaseCollapsible.Root;

export function CollapsibleTrigger({
  className,
  ...props
}: ComponentProps<typeof BaseCollapsible.Trigger>) {
  return (
    <BaseCollapsible.Trigger
      className={cx(focusRing, 'group cursor-pointer rounded-lg', className)}
      {...props}
    />
  );
}

export function CollapsiblePanel({
  className,
  children,
  ...props
}: ComponentProps<'div'>) {
  return (
    <BaseCollapsible.Panel
      keepMounted
      className="h-[var(--collapsible-panel-height)] overflow-hidden transition-all duration-300 ease-out-quint data-ending-style:h-0 data-starting-style:h-0 data-ending-style:opacity-0 data-starting-style:opacity-0"
    >
      <div className={className} {...props}>
        {children}
      </div>
    </BaseCollapsible.Panel>
  );
}
