"use client";
import { cx, focusInput } from "@/lib/utils";
import { OTPInput, OTPInputContext } from "input-otp";
import { Minus } from "lucide-react";
import { type ComponentProps, useContext } from "react";

function InputOTP({
  containerClassName,
  ...props
}: ComponentProps<typeof OTPInput>) {
  return (
    <OTPInput
      containerClassName={cx(
        "flex items-center justify-center gap-2 text-text disabled:pointer-events-none has-[:disabled]:opacity-50",
        containerClassName
      )}
      {...props}
    />
  );
}

function InputOTPGroup({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cx("flex items-center gap-2", className)} {...props} />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: ComponentProps<"div"> & { index: number }) {
  const inputOTPContext = useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      className={cx(
        "relative flex size-10 items-center justify-center rounded-lg border bg-surface shadow-xs transition-all",
        focusInput,
        isActive &&
          "border-primary ring-3 ring-primary/20 dark:ring-primary/30",
        className
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

function InputOTPSeparator({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cx("text-text-2", className)} {...props}>
      <Minus size={12} />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
