"use client";
import { cx, focusInteractive } from "@/lib/utils";
import { Checkbox as BaseCheckbox } from "@base-ui-components/react";
import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui-components/react";
import { Check } from "lucide-react";
import type { ComponentProps } from "react";

function Checkbox({
  className,
  ...props
}: ComponentProps<typeof BaseCheckbox.Root>) {
  return (
    <BaseCheckbox.Root
      className={cx(
        "inline-flex size-4 shrink-0 cursor-pointer appearance-none items-center justify-center rounded-sm border bg-surface shadow-xs transition-all duration-150 data-disabled:data-unchecked:bg-muted data-disabled:pointer-events-none data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50",
        focusInteractive,
        className
      )}
      {...props}
    >
      <BaseCheckbox.Indicator className="flex items-center justify-center text-on-primary data-unchecked:hidden">
        <Check size={12} strokeWidth={4} />
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  );
}

function CheckboxGroup({
  className,
  ...props
}: ComponentProps<typeof BaseCheckboxGroup>) {
  return (
    <BaseCheckboxGroup
      className={cx("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

export { Checkbox, CheckboxGroup };
