"use client";
import { cx } from "@/lib/utils";
import { PreviewCard as BasePreviewCard } from "@base-ui-components/react";
import type { ComponentProps } from "react";

const PreviewCard = BasePreviewCard.Root;

const PreviewCardTrigger = BasePreviewCard.Trigger;

function PreviewCardPopup({
  className,
  ...props
}: ComponentProps<typeof BasePreviewCard.Popup>) {
  return (
    <BasePreviewCard.Portal>
      <BasePreviewCard.Positioner sideOffset={8}>
        <BasePreviewCard.Popup
          className={cx(
            "flex w-60 origin-[var(--transform-origin)] flex-col gap-2 rounded-lg bg-popover p-3 text-text shadow-[0_8px_30px_rgba(0,0,0,0.08),0_4px_15px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition-all ease-out data-ending-style:scale-90 data-starting-style:scale-90 data-ending-style:opacity-0 data-starting-style:opacity-0 data-closed:duration-150 data-open:duration-200",
            className
          )}
          {...props}
        />
      </BasePreviewCard.Positioner>
    </BasePreviewCard.Portal>
  );
}

export { PreviewCard, PreviewCardTrigger, PreviewCardPopup };
