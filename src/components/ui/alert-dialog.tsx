"use client";

import { cx } from "@/lib/utils";
import { AlertDialog as BaseAlertDialog } from "@base-ui-components/react";
import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import { buttonStyles } from "./button";

const AlertDialog = BaseAlertDialog.Root;

const AlertDialogTrigger = BaseAlertDialog.Trigger;

function AlertDialogPopup({
  className,
  ...props
}: ComponentProps<typeof BaseAlertDialog.Popup>) {
  return (
    <BaseAlertDialog.Portal>
      <BaseAlertDialog.Backdrop className="fixed inset-0 z-50 overflow-y-auto bg-overlay backdrop-blur-xs transition-opacity ease-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-closed:duration-150 data-open:duration-200" />
      <BaseAlertDialog.Popup
        className={cx(
          "-translate-x-1/2 -translate-y-1/2 fixed top-[calc(50%-1.25rem*var(--nested-dialogs))] left-1/2 z-50 w-md max-w-[calc(100vw-3rem)] scale-[calc(1-0.1*var(--nested-dialogs))] overflow-y-auto rounded-xl bg-modal text-text outline-0 transition-all ease-out data-ending-style:scale-95 data-starting-style:scale-95 data-ending-style:opacity-0 data-starting-style:opacity-0 data-closed:duration-150 data-open:duration-200",
          className
        )}
        {...props}
      />
    </BaseAlertDialog.Portal>
  );
}

function AlertDialogHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cx(
        "mx-0.5 mt-0.5 flex flex-col gap-1 rounded-xl bg-surface px-5.5 py-6",
        className
      )}
      {...props}
    />
  );
}

function AlertDialogFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cx("flex justify-between gap-4 px-6 py-4", className)}
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
      className={cx("font-semibold text-xl", className)}
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
      className={cx("text-text-2", className)}
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
  iconOnly,
  size,
  ...props
}: AlertDialogActionProps) {
  return (
    <BaseAlertDialog.Close
      className={buttonStyles({
        color,
        variant,
        iconOnly,
        size,
        className: cx("w-full", className),
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
  AlertDialogHeader,
  AlertDialogFooter,
};
