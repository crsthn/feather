import { cx, focusInput } from "@/lib/utils";
import { NumberField as BaseNumberField } from "@base-ui-components/react/number-field";
import { Minus, Plus } from "lucide-react";
import type { ComponentProps } from "react";
import { buttonStyles } from "./button";

function NumberInput({
  ...props
}: ComponentProps<typeof BaseNumberField.Root>) {
  return (
    <BaseNumberField.Root {...props}>
      <BaseNumberField.Group className="flex">
        <BaseNumberField.Decrement
          className={buttonStyles({
            color: "secondary",
            iconOnly: true,
            className: "rounded-none rounded-l-md border-r-0 shadow-xs",
          })}
        >
          <Minus size={16} />
        </BaseNumberField.Decrement>
        <BaseNumberField.Input
          className={cx(
            "flex h-10 w-full border bg-surface px-3 text-center text-text tabular-nums outline-none placeholder:text-text-2 disabled:placeholder:text-text-3 data-disabled:pointer-events-none data-disabled:bg-secondary data-disabled:opacity-50",
            focusInput
          )}
        />
        <BaseNumberField.Increment
          className={buttonStyles({
            color: "secondary",
            iconOnly: true,
            className: "rounded-none rounded-r-md border-l-0",
          })}
        >
          <Plus size={16} />
        </BaseNumberField.Increment>
      </BaseNumberField.Group>
    </BaseNumberField.Root>
  );
}

export { NumberInput };
