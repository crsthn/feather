import { cx } from '@/lib/utils';
import { Separator as BaseSeparator } from '@base-ui-components/react/separator';
import { cva } from 'class-variance-authority';
import type { ComponentProps } from 'react';

const separatorStyles = cva('bg-border', {
  variants: {
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'w-px',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export function Separator({
  className,
  orientation,
  ...props
}: ComponentProps<typeof BaseSeparator>) {
  return (
    <BaseSeparator
      className={cx(
        separatorStyles({
          orientation,
        }),
        className,
      )}
      {...props}
    />
  );
}
