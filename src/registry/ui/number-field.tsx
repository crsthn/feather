import { cx, focusInput } from '@/lib/utils';
import { NumberField as BaseNumberField } from '@base-ui-components/react/number-field';
import { Minus, Plus } from 'lucide-react';
import type { ComponentProps } from 'react';
import { buttonStyles } from './button';

function NumberInput({
  ...props
}: ComponentProps<typeof BaseNumberField.Root>) {
  return (
    <BaseNumberField.Root {...props}>
      <BaseNumberField.Group className="flex rounded-lg shadow-xs">
        <BaseNumberField.Decrement
          className={buttonStyles({
            color: 'secondary',
            iconOnly: true,
            className: 'rounded-r-none border-r-0',
          })}
        >
          <Minus />
        </BaseNumberField.Decrement>
        <BaseNumberField.Input
          className={cx(
            focusInput,
            'flex h-10 w-full border border-input bg-surface px-3 text-center text-text tabular-nums placeholder:text-text-3 data-disabled:pointer-events-none data-disabled:bg-secondary data-disabled:opacity-50',
          )}
        />
        <BaseNumberField.Increment
          className={buttonStyles({
            color: 'secondary',
            iconOnly: true,
            className: 'rounded-l-none border-l-0',
          })}
        >
          <Plus />
        </BaseNumberField.Increment>
      </BaseNumberField.Group>
    </BaseNumberField.Root>
  );
}

export { NumberInput };
