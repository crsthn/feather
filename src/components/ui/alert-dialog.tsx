'use client';
import { cx } from '@/lib/utils';
import { AlertDialog as BaseAlertDialog } from '@base-ui-components/react';
import type { ComponentProps } from 'react';
import type { VariantProps } from 'tailwind-variants';
import { buttonStyles } from './button';

const AlertDialog = BaseAlertDialog.Root;
const AlertDialogTrigger = BaseAlertDialog.Trigger;

function AlertDialogPopup({
  className,
  ...props
}: ComponentProps<typeof BaseAlertDialog.Popup>) {
  return (
    <BaseAlertDialog.Portal>
      <BaseAlertDialog.Backdrop className="fixed inset-0 z-50 bg-overlay backdrop-blur-xs transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 data-closed:ease-in-out-quint data-open:ease-out-quint" />
      <BaseAlertDialog.Popup
        className={cx(
          '-translate-x-1/2 -translate-y-1/2 fixed top-[calc(50%-1.25rem*var(--nested-dialogs))] left-1/2 z-50 w-md max-w-[calc(100vw-3rem)] scale-[calc(1-0.1*var(--nested-dialogs))] overflow-hidden rounded-xl border bg-bg outline-none transition-all duration-200 data-ending-style:scale-95 data-starting-style:scale-95 data-ending-style:opacity-0 data-starting-style:opacity-0 data-closed:ease-in-out-quint data-open:ease-out-quint',
          className,
        )}
        {...props}
      />
    </BaseAlertDialog.Portal>
  );
}

function AlertDialogMain({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cx('flex flex-col gap-1 border-b bg-surface p-6', className)}
      {...props}
    />
  );
}

function AlertDialogFooter({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cx('flex justify-between gap-4 px-6 py-4', className)}
      {...props}
    />
  );
}

function AlertDialogTitle({
  className,
  ...props
}: ComponentProps<typeof BaseAlertDialog.Title>) {
  return (
    <BaseAlertDialog.Title
      className={cx('font-semibold text-xl', className)}
      {...props}
    />
  );
}

function AlertDialogDescription({
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

type AlertDialogActionProps = Omit<
  ComponentProps<typeof BaseAlertDialog.Close>,
  keyof VariantProps<typeof buttonStyles>
> &
  VariantProps<typeof buttonStyles>;

function AlertDialogClose({
  className,
  color,
  variant,
  ...props
}: AlertDialogActionProps) {
  return (
    <BaseAlertDialog.Close
      className={buttonStyles({
        color,
        variant,
        className: cx('w-full', className),
      })}
      {...props}
    />
  );
}

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogClose,
  AlertDialogMain,
  AlertDialogFooter,
};
