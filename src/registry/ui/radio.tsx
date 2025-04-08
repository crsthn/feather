"use client";
import { cx, focusInteractive } from "@/lib/utils";
import {
  Radio as BaseRadio,
  RadioGroup as BaseRadioGroup,
} from "@base-ui-components/react";
import type { ComponentProps } from "react";

function RadioGroup({
  className,
  ...props
}: ComponentProps<typeof BaseRadioGroup>) {
  return (
    <BaseRadioGroup
      className={cx("flex flex-col items-start gap-1", className)}
      {...props}
    />
  );
}

function Radio({ className, ...props }: ComponentProps<typeof BaseRadio.Root>) {
  return (
    <BaseRadio.Root
      className={cx(
        "inline-flex size-4 shrink-0 cursor-pointer appearance-none items-center justify-center rounded-full border bg-surface shadow-xs transition-all duration-150 data-disabled:data-unchecked:bg-muted data-disabled:pointer-events-none data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50",
        focusInteractive,
        className
      )}
      {...props}
    >
      <BaseRadio.Indicator className="size-2 rounded-full bg-on-primary data-unchecked:hidden" />
    </BaseRadio.Root>
  );
}

export { Radio, RadioGroup };
