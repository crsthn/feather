import { cx } from "@/lib/utils";
import { Field as BaseField } from "@base-ui-components/react/field";
import { Form as BaseForm } from "@base-ui-components/react/form";
import type { ComponentProps } from "react";
import { labelStyles } from "./label";

function Field({ className, ...props }: ComponentProps<typeof BaseField.Root>) {
  return (
    <BaseField.Root
      className={cx("flex w-full flex-col items-start gap-1", className)}
      {...props}
    />
  );
}

function FieldLabel({
  className,
  ...props
}: ComponentProps<typeof BaseField.Label>) {
  return (
    <BaseField.Label
      className={labelStyles({ className: className as string })}
      {...props}
    />
  );
}

function FieldError({
  className,
  ...props
}: ComponentProps<typeof BaseField.Error>) {
  return (
    <BaseField.Error
      className={cx("text-danger text-xs", className)}
      {...props}
    />
  );
}

function Form({ className, ...props }: ComponentProps<typeof BaseForm>) {
  return (
    <BaseForm
      className={cx("flex w-full flex-col gap-4", className)}
      {...props}
    />
  );
}

export { Field, FieldLabel, FieldError, Form };
