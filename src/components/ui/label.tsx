import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

const labelStyles = tv({
  base: "inline-flex items-center gap-2 text-text font-medium data-disabled:text-text-3",
});

function Label({ className, ...props }: ComponentProps<"label">) {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: <explanation>
    <label
      className={labelStyles({ className: className as string })}
      {...props}
    />
  );
}

export { Label, labelStyles };
