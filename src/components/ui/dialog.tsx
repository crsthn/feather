"use client";
import { cx } from "@/lib/utils";
import { Dialog as BaseDialog } from "@base-ui-components/react";
import { X } from "lucide-react";
import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import { buttonStyles } from "./button";

const Dialog = BaseDialog.Root;
const DialogTrigger = BaseDialog.Trigger;

function DialogPopup({
  className,
  ...props
}: ComponentProps<typeof BaseDialog.Popup>) {
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop className="fixed inset-0 z-50 overflow-y-auto bg-overlay backdrop-blur-xs transition-opacity ease-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-closed:duration-150 data-open:duration-200" />
      <BaseDialog.Popup
        className={cx(
          "-translate-x-1/2 -translate-y-1/2 fixed top-[calc(50%-1.25rem*var(--nested-dialogs))] left-1/2 z-50 w-lg max-w-[calc(100vw-2rem)] scale-[calc(1-0.1*var(--nested-dialogs))] overflow-y-auto rounded-xl bg-modal text-text outline-0 transition-all ease-out data-ending-style:scale-95 data-starting-style:scale-95 data-ending-style:opacity-0 data-starting-style:opacity-0 data-closed:duration-150 data-open:duration-200",
          className
        )}
        {...props}
      />
    </BaseDialog.Portal>
  );
}

function DialogHeader({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cx("flex justify-between gap-4 py-4 pr-4 pl-6", className)}
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

function DialogMain({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cx(
        "mx-0.5 flex flex-col gap-6 rounded-xl bg-surface px-5.5 py-6",
        className
      )}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cx("flex justify-between gap-4 px-6 py-4", className)}
      {...props}
    />
  );
}

function DialogTitle({
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

function DialogDescription({
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

function DialogClose({
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
  Dialog,
  DialogTrigger,
  DialogPopup,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogHeader,
  DialogMain,
  DialogFooter,
};
