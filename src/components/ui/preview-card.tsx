'use client';
import { cx } from '@/lib/utils';
import { PreviewCard as BasePreviewCard } from '@base-ui-components/react';
import type { ComponentProps } from 'react';

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
            'flex w-64 origin-[var(--transform-origin)] flex-col gap-2 rounded-lg border bg-bg p-3 shadow-[0_24px_32px_-8px_rgba(0,0,0,0.06),0_8px_16px_-4px_rgba(0,0,0,0.04)] transition-all ease-out-cubic data-ending-style:scale-95 data-starting-style:scale-95 data-ending-style:opacity-0 data-starting-style:opacity-0',
            className,
          )}
          {...props}
        />
      </BasePreviewCard.Positioner>
    </BasePreviewCard.Portal>
  );
}

export { PreviewCard, PreviewCardTrigger, PreviewCardPopup };
