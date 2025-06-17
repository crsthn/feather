'use client';
import { buttonStyles } from '@/components/ui/button';
import { cx } from '@/lib/utils';
import { Dialog as BaseDialog } from '@base-ui-components/react';
import type { VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import type { ComponentProps } from 'react';

export const Dialog = BaseDialog.Root;
export const DialogTrigger = BaseDialog.Trigger;

export function DialogPopup({
  className,
  ...props
}: ComponentProps<typeof BaseDialog.Popup>) {
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop className="fixed inset-0 z-50 bg-overlay backdrop-blur-xs transition-opacity data-ending-style:opacity-0 data-starting-style:opacity-0 max-sm:duration-500 max-sm:ease-[cubic-bezier(0.32,0.72,0,1)] sm:duration-200 sm:ease-out-quint" />
      <BaseDialog.Popup
        className={cx(
          'sm:-translate-x-1/2 sm:-translate-y-1/2 fixed z-50 overflow-hidden rounded-xl border bg-bg outline-none transition-all max-sm:inset-x-2 max-sm:bottom-2 max-sm:max-h-4/5 max-sm:duration-500 max-sm:ease-[cubic-bezier(0.32,0.72,0,1)] max-sm:data-ending-style:translate-y-full max-sm:data-starting-style:translate-y-full sm:top-[calc(50%-1.25rem*var(--nested-dialogs))] sm:left-1/2 sm:w-lg sm:scale-[calc(1-0.1*var(--nested-dialogs))] sm:duration-200 sm:ease-out-quint sm:data-ending-style:scale-95 sm:data-starting-style:scale-90 sm:data-ending-style:opacity-0 sm:data-starting-style:opacity-0',
          className,
        )}
        {...props}
      />
    </BaseDialog.Portal>
  );
}

export function DialogHeader({
  className,
  children,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={cx(
        'flex justify-between gap-4 border-b bg-surface py-4 pr-4 pl-6',
        className,
      )}
      {...props}
    >
      {children}
      <BaseDialog.Close
        className={cx(
          buttonStyles({
            variant: 'subtle',
            iconOnly: true,
          }),
          'size-7',
          className,
        )}
      >
        <X className="text-text-2" />
      </BaseDialog.Close>
    </div>
  );
}

export function DialogMain({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cx('flex flex-col gap-6 p-6', className)} {...props} />
  );
}

export function DialogFooter({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cx(
        'flex gap-4 border-t bg-surface px-6 py-4 max-sm:flex-col-reverse sm:justify-between',
        className,
      )}
      {...props}
    />
  );
}

export function DialogTitle({
  className,
  ...props
}: ComponentProps<typeof BaseDialog.Title>) {
  return (
    <BaseDialog.Title
      className={cx('font-semibold text-lg', className)}
      {...props}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: ComponentProps<typeof BaseDialog.Description>) {
  return (
    <BaseDialog.Description
      className={cx('text-text-2', className)}
      {...props}
    />
  );
}

export function DialogClose({
  className,
  ...props
}: ComponentProps<typeof BaseDialog.Close> &
  VariantProps<typeof buttonStyles>) {
  return (
    <BaseDialog.Close
      className={cx(
        buttonStyles({
          variant: 'secondary',
        }),
        'sm:flex-1',
        className,
      )}
      {...props}
    />
  );
}
