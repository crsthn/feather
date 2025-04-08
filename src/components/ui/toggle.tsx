import { cx, focusRing } from "@/lib/utils";
import { Toggle as BaseToggle } from "@base-ui-components/react/toggle";
import { ToggleGroup as BaseToggleGroup } from "@base-ui-components/react/toggle-group";
import type { ComponentProps } from "react";

function ToggleGroup({
  className,
  ...props
}: ComponentProps<typeof BaseToggleGroup>) {
  return <BaseToggleGroup className={cx("flex", className)} {...props} />;
}

function Toggle({ className, ...props }: ComponentProps<typeof BaseToggle>) {
  return (
    <BaseToggle
      className={cx(
        "flex size-8 cursor-pointer select-none items-center justify-center rounded-md hover:bg-secondary active:bg-secondary data-pressed:bg-secondary",
        focusRing,
        className
      )}
      {...props}
    />
  );
}

export { ToggleGroup, Toggle };
