import { cx } from "@/lib/utils";
import { Avatar as BaseAvatar } from "@base-ui-components/react/avatar";
import type { ComponentProps } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const avatarStyles = tv({
  base: "inline-flex shrink-0 select-none items-center justify-center overflow-hidden rounded-full align-middle relative",
  variants: {
    size: {
      sm: "size-8 text-sm",
      md: "size-10 text-base",
      lg: "size-12 text-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

function Avatar({
  className,
  size,
  ...props
}: ComponentProps<typeof BaseAvatar.Root> & VariantProps<typeof avatarStyles>) {
  return (
    <BaseAvatar.Root
      className={avatarStyles({ size, className: className as string })}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: ComponentProps<typeof BaseAvatar.Image>) {
  return (
    <BaseAvatar.Image
      className={cx("size-full object-cover", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: ComponentProps<typeof BaseAvatar.Fallback>) {
  return (
    <BaseAvatar.Fallback
      className={cx(
        "flex size-full items-center justify-center bg-muted font-medium text-primary uppercase",
        className
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
