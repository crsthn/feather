import type { ComponentProps } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const spinnerStyles = tv({
  base: "shrink-0 animate-spin rounded-full border-current border-t-transparent transition-all",
  variants: {
    size: {
      sm: "size-4 border-2",
      md: "size-8 border-4",
      lg: "size-16 border-8",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

type SpinnerProps = ComponentProps<"div"> & VariantProps<typeof spinnerStyles>;

function Spinner({ className, size, ...props }: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={spinnerStyles({ size, className })}
      {...props}
    />
  );
}

export { Spinner };
