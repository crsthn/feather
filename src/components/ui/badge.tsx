import type { ComponentProps } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const badgeStyles = tv({
  base: "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-full font-medium",
  variants: {
    color: {
      primary: "bg-primary-muted text-primary",
      secondary: "bg-secondary text-text",
      danger: "bg-danger-muted text-danger",
    },
    size: {
      sm: "h-5 px-2 text-xs",
      md: "h-6 px-2 text-xs",
      lg: "h-7 px-3 text-sm",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
  },
});

type BadgeProps = Omit<
  ComponentProps<"span">,
  keyof VariantProps<typeof badgeStyles>
> &
  VariantProps<typeof badgeStyles>;

function Badge({ className, color, size, ...props }: BadgeProps) {
  return (
    <span className={badgeStyles({ color, size, className })} {...props} />
  );
}

export { Badge };
