import type { ComponentProps } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const noteStyles = tv({
  base: "flex flex-col overflow-hidden rounded-lg p-4 gap-1",
  variants: {
    color: {
      primary: "bg-primary-muted text-primary",
      secondary: "bg-secondary text-text",
      danger: "bg-danger-muted text-danger",
    },
  },
  defaultVariants: {
    color: "secondary",
  },
});

type NoteProps = Omit<
  ComponentProps<"div">,
  keyof VariantProps<typeof noteStyles>
> &
  VariantProps<typeof noteStyles>;

function Note({ className, color, ...props }: NoteProps) {
  return <div className={noteStyles({ color, className })} {...props} />;
}

export { Note };
