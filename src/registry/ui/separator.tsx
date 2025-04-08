import { Separator as BaseSeparator } from "@base-ui-components/react/separator";
import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

const separatorStyles = tv({
  base: "bg-border",
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

function Separator({
  className,
  orientation,
  ...props
}: ComponentProps<typeof BaseSeparator>) {
  return (
    <BaseSeparator
      className={separatorStyles({
        orientation,
        className: className as string,
      })}
      {...props}
    />
  );
}

export { Separator };
