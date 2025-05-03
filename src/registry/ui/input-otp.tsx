'use client';
import { cx } from '@/lib/utils';
import { OTPInput, OTPInputContext } from 'input-otp';
import { type ComponentProps, useContext } from 'react';

function InputOTP({
  containerClassName,
  ...props
}: ComponentProps<typeof OTPInput>) {
  return (
    <OTPInput
      containerClassName={cx(
        'flex items-center justify-center gap-2 text-text disabled:pointer-events-none has-[:disabled]:opacity-50',
        containerClassName,
      )}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: ComponentProps<'div'> & { index: number }) {
  const inputOTPContext = useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      className={cx(
        'relative flex size-10 items-center justify-center rounded-lg border border-input bg-surface shadow-xs ring-primary/20 transition-all dark:ring-primary/30',
        isActive && 'border-primary ring-3',
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex animate-caret-blink items-center justify-center">
          <div className="h-4 w-px bg-text" />
        </div>
      )}
    </div>
  );
}
export { InputOTP, InputOTPSlot };
