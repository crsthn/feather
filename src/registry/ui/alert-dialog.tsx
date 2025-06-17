'use client';
import { cx } from '@/lib/utils';
import { AlertDialog as BaseAlertDialog } from '@base-ui-components/react';
import type { ComponentProps } from 'react';
import { buttonStyles } from './button';

export const AlertDialog = BaseAlertDialog.Root;
export const AlertDialogTrigger = BaseAlertDialog.Trigger;

export function AlertDialogPopup({
  className,
  ...props
}: ComponentProps<typeof BaseAlertDialog.Popup>) {
  return (
    <BaseAlertDialog.Portal>
      <BaseAlertDialog.Backdrop className="fixed inset-0 z-50 bg-overlay backdrop-blur-xs transition-opacity duration-200 ease-out-quint data-ending-style:opacity-0 data-starting-style:opacity-0" />
      <BaseAlertDialog.Popup
        className={cx(
          '-translate-x-1/2 -translate-y-1/2 fixed top-[calc(50%-1.25rem*var(--nested-dialogs))] left-1/2 z-50 w-md max-w-[calc(100vw-2rem)] scale-[calc(1-0.1*var(--nested-dialogs))] overflow-hidden rounded-xl border bg-bg outline-none transition-all duration-200 ease-out-quint data-ending-style:scale-95 data-starting-style:scale-90 data-ending-style:opacity-0 data-starting-style:opacity-0',
          className,
        )}
        {...props}
      />
    </BaseAlertDialog.Portal>
  );
}

export function AlertDialogMain({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div className={cx('flex flex-col gap-1 p-6', className)} {...props} />
  );
}

export function AlertDialogFooter({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={cx(
        'flex justify-between gap-4 border-y border-b-transparent bg-surface px-6 py-4',
        className,
      )}
      {...props}
    />
  );
}

export function AlertDialogTitle({
  className,
  ...props
}: ComponentProps<typeof BaseAlertDialog.Title>) {
  return (
    <BaseAlertDialog.Title
      className={cx('font-semibold text-lg', className)}
      {...props}
    />
  );
}

export function AlertDialogDescription({
  className,
  ...props
}: ComponentProps<typeof BaseAlertDialog.Description>) {
  return (
    <BaseAlertDialog.Description
      className={cx('text-text-2', className)}
      {...props}
    />
  );
}

export function AlertDialogClose({
  className,
  ...props
}: ComponentProps<typeof BaseAlertDialog.Close>) {
  return (
    <BaseAlertDialog.Close
      className={cx(
        buttonStyles({
          variant: 'secondary',
        }),
        'flex-1',
        className,
      )}
      {...props}
    />
  );
}
