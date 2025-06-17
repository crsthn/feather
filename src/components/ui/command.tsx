'use client';
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogPopup,
  DialogTitle,
} from '@/components/ui/dialog';
import { cx } from '@/lib/utils';
import { Command as CommandPrimitive } from 'cmdk';
import { SearchIcon } from 'lucide-react';
import type { ComponentProps } from 'react';

export const Command = CommandPrimitive;

export function CommandDialog({
  title = 'Command Palette',
  description = 'Search for a command to run...',
  children,
  ...props
}: ComponentProps<typeof Dialog> & {
  title?: string;
  description?: string;
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogPopup className="overflow-hidden p-0">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-text-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogPopup>
    </Dialog>
  );
}

export function CommandInput({
  className,
  ...props
}: ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div className="flex items-center gap-2 px-4.5">
      <SearchIcon className="size-4 shrink-0 text-text-2" />
      <CommandPrimitive.Input
        className={cx(
          'h-14 w-full outline-hidden placeholder:text-text-2 disabled:pointer-events-none disabled:opacity-50',
          className,
        )}
        {...props}
      />
    </div>
  );
}

export function CommandList({
  className,
  ...props
}: ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      className={cx(
        'max-h-80 overflow-y-auto overflow-x-hidden rounded-b-xl border-t bg-surface p-2',
        className,
      )}
      {...props}
    />
  );
}

export function CommandEmpty({
  ...props
}: ComponentProps<typeof CommandPrimitive.Empty>) {
  return <CommandPrimitive.Empty className="py-6 text-center" {...props} />;
}

export function CommandGroup({
  ...props
}: ComponentProps<typeof CommandPrimitive.Group>) {
  return <CommandPrimitive.Group {...props} />;
}

export function CommandSeparator({
  className,
  ...props
}: ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      className={cx('h-px bg-border', className)}
      {...props}
    />
  );
}

export function CommandItem({
  className,
  ...props
}: ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      className={cx(
        'flex h-9 cursor-pointer select-none items-center gap-2 rounded-lg px-2 outline-hidden data-[disabled=true]:pointer-events-none data-[selected=true]:bg-secondary data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
        className,
      )}
      {...props}
    />
  );
}

export function CommandShortcut({
  className,
  ...props
}: ComponentProps<'span'>) {
  return (
    <span
      className={cx(
        'ml-auto text-muted-foreground text-xs tracking-widest',
        className,
      )}
      {...props}
    />
  );
}
