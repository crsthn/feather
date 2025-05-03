'use client';
import { cx } from '@/lib/utils';
import { Dialog as BaseDialog } from '@base-ui-components/react';
import { X } from 'lucide-react';
import type { ComponentProps } from 'react';
import type { VariantProps } from 'tailwind-variants';
import { buttonStyles } from './button';

const Drawer = BaseDialog.Root;
const DrawerTrigger = BaseDialog.Trigger;

function DrawerPopup({
  className,
  ...props
}: ComponentProps<typeof BaseDialog.Popup>) {
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop className="fixed inset-0 z-50 bg-overlay backdrop-blur-xs transition-opacity duration-400 ease-out-quint data-ending-style:opacity-0 data-starting-style:opacity-0" />
      <BaseDialog.Popup
        className={cx(
          'fixed z-50 flex flex-col rounded-xl border bg-bg outline-none transition-all duration-400 ease-out-quint max-sm:inset-x-2 max-sm:bottom-2 max-sm:max-h-4/5 max-sm:data-ending-style:translate-y-full max-sm:data-starting-style:translate-y-full sm:inset-y-2 sm:right-2 sm:max-w-md sm:data-ending-style:translate-x-full sm:data-starting-style:translate-x-full',
          className,
        )}
        {...props}
      />
    </BaseDialog.Portal>
  );
}

function DrawerHeader({
  className,
  children,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={cx('flex justify-between gap-4 py-4 pr-4 pl-6', className)}
      {...props}
    >
      {children}
      <BaseDialog.Close
        className={buttonStyles({
          color: 'secondary',
          variant: 'subtle',
          className: 'size-7',
          iconOnly: true,
        })}
      >
        <X className="text-text-2" />
      </BaseDialog.Close>
    </div>
  );
}

function DrawerMain({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cx(
        'flex flex-1 flex-col gap-6 overflow-y-auto border-y bg-surface p-6',
        className,
      )}
      {...props}
    />
  );
}

function DrawerFooter({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cx('flex flex-col gap-4 px-6 py-4', className)}
      {...props}
    />
  );
}

function DrawerTitle({
  className,
  ...props
}: ComponentProps<typeof BaseDialog.Title>) {
  return (
    <BaseDialog.Title
      className={cx('font-semibold text-xl', className)}
      {...props}
    />
  );
}

function DrawerDescription({
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

function DrawerClose({
  className,
  color,
  variant,
  ...props
}: ComponentProps<typeof BaseDialog.Close> &
  VariantProps<typeof buttonStyles>) {
  return (
    <BaseDialog.Close
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
  Drawer,
  DrawerTrigger,
  DrawerPopup,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  DrawerHeader,
  DrawerMain,
  DrawerFooter,
};
