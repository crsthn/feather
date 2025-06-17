'use client';
import { cx } from '@/lib/utils';
import { Dialog as BaseDialog } from '@base-ui-components/react';
import type { VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import type { ComponentProps } from 'react';
import { buttonStyles } from './button';

export const Drawer = BaseDialog.Root;
export const DrawerTrigger = BaseDialog.Trigger;

export function DrawerPopup({
  className,
  ...props
}: ComponentProps<typeof BaseDialog.Popup>) {
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop className="fixed inset-0 z-50 bg-overlay backdrop-blur-xs transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] data-ending-style:opacity-0 data-starting-style:opacity-0" />
      <BaseDialog.Popup
        className={cx(
          'fixed z-50 flex flex-col overflow-hidden rounded-xl border bg-bg outline-none transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] max-sm:inset-x-2 max-sm:bottom-2 max-sm:max-h-4/5 max-sm:data-ending-style:translate-y-full max-sm:data-starting-style:translate-y-full sm:inset-y-2 sm:right-2 sm:max-w-md sm:data-ending-style:translate-x-full sm:data-starting-style:translate-x-full',
          className,
        )}
        {...props}
      />
    </BaseDialog.Portal>
  );
}

export function DrawerHeader({
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

export function DrawerMain({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cx(
        'flex flex-1 flex-col gap-6 overflow-y-auto p-6',
        className,
      )}
      {...props}
    />
  );
}

export function DrawerFooter({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cx(
        'flex flex-col gap-4 border-t bg-surface px-6 py-4',
        className,
      )}
      {...props}
    />
  );
}

export function DrawerTitle({
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

export function DrawerDescription({
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

export function DrawerClose({
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
        className,
      )}
      {...props}
    />
  );
}
