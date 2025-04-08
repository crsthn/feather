import { cx, focusRing } from "@/lib/utils";
import { Switch as BaseSwitch } from "@base-ui-components/react/switch";
import type { ComponentProps } from "react";

function Switch({
  className,
  ...props
}: ComponentProps<typeof BaseSwitch.Root>) {
  return (
    <BaseSwitch.Root
      className={cx(
        "relative flex h-6 w-10 cursor-pointer rounded-full bg-muted p-1 transition-all duration-150 ease-in-out disabled:pointer-events-none disabled:opacity-50 data-checked:bg-primary",
        focusRing,
        className
      )}
      {...props}
    >
      <BaseSwitch.Thumb className="aspect-square h-full rounded-full bg-on-primary transition-transform duration-150 ease-in-out data-[checked]:translate-x-4" />
    </BaseSwitch.Root>
  );
}

export { Switch };
