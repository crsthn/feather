'use client';
import { labelStyles } from '@/components/ui/label';
import useMeasure from '@/hooks/use-measure';
import { cx } from '@/lib/utils';
import { Field as BaseField } from '@base-ui-components/react/field';
import { Form as BaseForm } from '@base-ui-components/react/form';
import { motion } from 'motion/react';
import { type ComponentProps, useRef } from 'react';

export function Form({ className, ...props }: ComponentProps<typeof BaseForm>) {
  return (
    <BaseForm
      className={cx('flex w-full flex-col gap-4', className)}
      {...props}
    />
  );
}

export function Field({
  className,
  ...props
}: ComponentProps<typeof BaseField.Root>) {
  return (
    <BaseField.Root
      className={cx('flex flex-1 flex-col items-start gap-1', className)}
      {...props}
    />
  );
}

export function FieldLabel({
  className,
  ...props
}: ComponentProps<typeof BaseField.Label>) {
  return <BaseField.Label className={cx(labelStyles, className)} {...props} />;
}

export function FieldError({
  className,
  ...props
}: ComponentProps<typeof BaseField.Error>) {
  const containerRef = useRef(null);
  const { height } = useMeasure({ ref: containerRef });
  return (
    <motion.div
      animate={{ height }}
      transition={{ duration: 0.2, ease: [0.3, 0.1, 0.1, 0.95] }}
    >
      <BaseField.Error
        match={true}
        ref={containerRef}
        className={cx('text-danger text-xs', className)}
        {...props}
      />
    </motion.div>
  );
}
