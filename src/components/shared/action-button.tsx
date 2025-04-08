import { cx } from "@/lib/utils";
import { type ButtonProps, buttonStyles } from "../ui/button";
import { Spinner } from "../ui/spinner";

type ActionButtonProps = ButtonProps & {
  loading?: boolean;
};

function ActionButton({
  className,
  color,
  size,
  variant,
  iconOnly,
  loading,
  disabled,
  children,
  ref,
  ...props
}: ActionButtonProps) {
  return (
    <button
      className={cx(
        "relative overflow-hidden",
        buttonStyles({ color, size, variant, iconOnly, className })
      )}
      disabled={disabled || loading}
      {...props}
    >
      <span
        className={cx(
          "inline-flex items-center justify-center gap-2 transition-all ease-in-out",
          loading && "-translate-y-10 opacity-0"
        )}
      >
        {children}
      </span>
      <Spinner
        className={cx(
          "absolute translate-y-10 opacity-0 transition-all ease-in-out",
          loading && "translate-y-0 opacity-100"
        )}
      />
    </button>
  );
}

export { ActionButton };
