'use client';
import useMeasure from '@/hooks/use-measure';
import { cx } from '@/lib/utils';
import { Field as BaseField } from '@base-ui-components/react/field';
import { Form as BaseForm } from '@base-ui-components/react/form';
import { motion } from 'motion/react';
import { type ComponentProps, useRef } from 'react';
import { labelStyles } from './label';

function Form({ className, ...props }: ComponentProps<typeof BaseForm>) {
  return (
    <BaseForm
      className={cx('flex w-full flex-col gap-4', className)}
      {...props}
    />
  );
}

function Field({ className, ...props }: ComponentProps<typeof BaseField.Root>) {
  return (
    <BaseField.Root
      className={cx('flex w-full flex-col items-start gap-1', className)}
      {...props}
    />
  );
}

function FieldLabel({
  className,
  ...props
}: ComponentProps<typeof BaseField.Label>) {
  return (
    <BaseField.Label
      className={labelStyles({ className: className as string })}
      {...props}
    />
  );
}

function FieldError({
  className,
  ...props
}: ComponentProps<typeof BaseField.Error>) {
  const containerRef = useRef(null);
  const { height } = useMeasure({ ref: containerRef });
  return (
    <motion.div
      animate={{ height }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <BaseField.Error
        forceShow={true}
        ref={containerRef}
        className={cx('text-danger text-xs', className)}
        {...props}
      />
    </motion.div>
  );
}

export { Field, FieldLabel, FieldError, Form };
