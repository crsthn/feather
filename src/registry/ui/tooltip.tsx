import { cx } from '@/lib/utils';
import { Tooltip as BaseTooltip } from '@base-ui-components/react/tooltip';
import type { ComponentProps } from 'react';

export function TooltipProvider({
  ...props
}: ComponentProps<typeof BaseTooltip.Provider>) {
  return <BaseTooltip.Provider timeout={0} {...props} />;
}

export function Tooltip({ ...props }: ComponentProps<typeof BaseTooltip.Root>) {
  return <BaseTooltip.Root delay={0} {...props} />;
}

export const TooltipTrigger = BaseTooltip.Trigger;

export function TooltipPopup({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseTooltip.Popup>) {
  return (
    <BaseTooltip.Portal>
      <BaseTooltip.Positioner sideOffset={8}>
        <BaseTooltip.Popup
          className={cx(
            'flex origin-[var(--transform-origin)] flex-col rounded-md bg-text px-2 py-1 text-surface text-xs transition-all ease-out-quad data-ending-style:scale-90 data-starting-style:scale-90 data-ending-style:opacity-0 data-starting-style:opacity-0 data-instant:duration-0',
            className,
          )}
          {...props}
        >
          <BaseTooltip.Arrow className="data-[side=right]:-rotate-90 data-[side=bottom]:-top-2 data-[side=top]:-bottom-2 data-[side=left]:-right-3.25 data-[side=right]:-left-3.25 data-[side=left]:rotate-90 data-[side=top]:rotate-180">
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
              <path
                d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
                className="fill-text"
              />
            </svg>
          </BaseTooltip.Arrow>
          {children}
        </BaseTooltip.Popup>
      </BaseTooltip.Positioner>
    </BaseTooltip.Portal>
  );
}
