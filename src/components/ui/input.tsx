import { focusInput } from "@/lib/utils";
import { Input as BaseInput } from "@base-ui-components/react/input";
import type { ComponentProps } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const inputStyles = tv({
  base: [
    "flex w-full appearance-none rounded-lg bg-surface shadow-xs border text-text placeholder:text-text-3 data-disabled:pointer-events-none data-disabled:bg-secondary data-disabled:opacity-50",
    focusInput,
  ],
  variants: {
    size: {
      sm: "h-8 px-2 text-sm",
      md: "h-10 px-3 text-sm",
      lg: "h-12 px-4 text-base",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type InputProps = Omit<
  ComponentProps<typeof BaseInput>,
  keyof VariantProps<typeof inputStyles>
> &
  VariantProps<typeof inputStyles>;

function Input({ className, size, ...props }: InputProps) {
  return (
    <BaseInput
      className={inputStyles({ size, className: className as string })}
      {...props}
    />
  );
}

export { Input };
