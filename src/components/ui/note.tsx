import type { ComponentProps } from 'react';
import { type VariantProps, tv } from 'tailwind-variants';

const noteStyles = tv({
  base: 'flex flex-col gap-1 overflow-hidden rounded-lg p-4 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  variants: {
    color: {
      primary: 'bg-primary-muted [&_svg]:text-primary',
      secondary: 'bg-muted',
      danger: 'bg-danger-muted [&_svg]:text-danger',
    },
  },
  defaultVariants: {
    color: 'secondary',
  },
});

type NoteProps = Omit<
  ComponentProps<'div'>,
  keyof VariantProps<typeof noteStyles>
> &
  VariantProps<typeof noteStyles>;

function Note({ className, color, ...props }: NoteProps) {
  return <div className={noteStyles({ color, className })} {...props} />;
}

export { Note };
