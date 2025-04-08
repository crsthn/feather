import { cx } from "@/lib/utils";
import { Tooltip as BaseTooltip } from "@base-ui-components/react/tooltip";
import type { ComponentProps } from "react";

const TooltipProvider = BaseTooltip.Provider;
const Tooltip = BaseTooltip.Root;
const TooltipTrigger = BaseTooltip.Trigger;

function TooltipPopup({
  className,
  ...props
}: ComponentProps<typeof BaseTooltip.Popup>) {
  return (
    <BaseTooltip.Portal>
      <BaseTooltip.Positioner sideOffset={8}>
        <BaseTooltip.Popup
          className={cx(
            "flex origin-[var(--transform-origin)] flex-col rounded-md bg-bg-inverse px-2 py-1 text-text-inverse transition-all ease-out data-[ending-style]:scale-90 data-[starting-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 data-[instant]:duration-0",
            className
          )}
          {...props}
        />
      </BaseTooltip.Positioner>
    </BaseTooltip.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipPopup, TooltipProvider };
