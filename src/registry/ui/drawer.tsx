"use client";
import { cx } from "@/lib/utils";
import { Dialog as BaseDialog } from "@base-ui-components/react";
import { X } from "lucide-react";
import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import { buttonStyles } from "./button";

const Drawer = BaseDialog.Root;
const DrawerTrigger = BaseDialog.Trigger;

function DrawerPopup({
  className,
  ...props
}: ComponentProps<typeof BaseDialog.Popup>) {
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop className="fixed inset-0 z-50 overflow-y-auto bg-overlay backdrop-blur-xs transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] data-ending-style:opacity-0 data-starting-style:opacity-0" />
      <BaseDialog.Popup
        className={cx(
          "fixed bottom-2 z-50 flex flex-1 flex-col overflow-y-auto rounded-xl bg-modal text-text transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] max-sm:inset-x-2 max-sm:h-fit max-sm:max-h-4/5 max-sm:data-ending-style:translate-y-full max-sm:data-starting-style:translate-y-full sm:inset-y-2 sm:right-2 sm:max-w-md sm:data-ending-style:translate-x-full sm:data-starting-style:translate-x-full",
          className
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
}: ComponentProps<"div">) {
  return (
    <div
      className={cx(
        "sticky top-0 flex justify-between gap-4 border-b bg-modal/80 py-4 pr-4 pl-6 backdrop-blur-xl",
        className
      )}
      {...props}
    >
      {children}
      <BaseDialog.Close
        className={buttonStyles({
          color: "secondary",
          variant: "subtle",
          className: "size-7",
          iconOnly: true,
        })}
      >
        <X className="text-text-2" />
      </BaseDialog.Close>
    </div>
  );
}

function DrawerMain({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cx("flex flex-col gap-6 p-6", className)} {...props} />
  );
}

function DrawerFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cx(
        "sticky bottom-0 mt-auto flex flex-col gap-4 border-t bg-modal/80 px-6 py-4 backdrop-blur-xl",
        className
      )}
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
      className={cx("font-semibold text-xl", className)}
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
      className={cx("text-text-2", className)}
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
        className: cx("w-full", className),
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
