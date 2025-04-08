import { focusRing } from "@/lib/utils";
import type { ComponentProps } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const buttonStyles = tv({
  base: [
    "inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-lg transition-colors disabled:pointer-events-none disabled:opacity-50 font-medium [&_svg]:pointer-events-none [&_svg]:shrink-0",
    focusRing,
  ],
  variants: {
    color: {
      primary: "",
      secondary: "",
      danger: "",
    },
    size: {
      sm: "h-8 text-sm [&_svg]:size-4",
      md: "h-10 text-sm [&_svg]:size-4",
      lg: "h-12 text-base [&_svg]:size-5",
    },
    variant: {
      solid: "border",
      subtle: "bg-transparent hover:bg-secondary",
    },
    iconOnly: {
      true: "aspect-square",
      false: "",
    },
  },
  compoundVariants: [
    {
      color: "primary",
      variant: "solid",
      class:
        "border-text/10 bg-primary text-on-primary hover:bg-[color-mix(in_oklab,var(--primary),var(--text)_10%)] active:bg-primary",
    },
    {
      color: "secondary",
      variant: "solid",
      class:
        "border-text/5 bg-secondary text-text hover:bg-[color-mix(in_oklab,var(--secondary),var(--text)_5%)] active:bg-secondary",
    },
    {
      color: "danger",
      variant: "solid",
      class:
        "border-text/10 bg-danger text-on-danger hover:bg-[color-mix(in_oklab,var(--danger),var(--text)_10%)] active:bg-danger",
    },
    {
      color: "primary",
      variant: "subtle",
      class: "text-primary",
    },
    {
      color: "secondary",
      variant: "subtle",
      class: "text-text",
    },
    {
      color: "danger",
      variant: "subtle",
      class: "text-danger",
    },
    {
      iconOnly: false,
      size: "sm",
      class: "gap-1 px-3",
    },
    {
      iconOnly: false,
      size: "md",
      class: "gap-2 px-4",
    },
    {
      iconOnly: false,
      size: "lg",
      class: "gap-2 px-6",
    },
  ],
  defaultVariants: {
    color: "primary",
    size: "md",
    variant: "solid",
    iconOnly: false,
  },
});

type ButtonProps = Omit<
  ComponentProps<"button">,
  keyof VariantProps<typeof buttonStyles>
> &
  VariantProps<typeof buttonStyles> & {
    iconOnly?: boolean;
  };

function Button({
  className,
  color,
  size,
  variant,
  iconOnly,
  ref,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonStyles({ color, size, variant, iconOnly, className })}
      {...props}
    />
  );
}

export { Button, buttonStyles, type ButtonProps };
