import { Button, type ButtonProps } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { cx } from '@/lib/utils';

type ActionButtonProps = ButtonProps & {
  isLoading: boolean;
};

function ActionButton({
  className,
  isLoading,
  disabled,
  children,
  ...props
}: ActionButtonProps) {
  return (
    <Button
      className={cx('relative overflow-hidden', className)}
      disabled={disabled || isLoading}
      {...props}
    >
      <span
        className={cx(
          'inline-flex items-center justify-center gap-2 transition-all ease-in-out',
          isLoading && 'translate-y-[200%] opacity-0',
        )}
      >
        {children}
      </span>
      <Spinner
        className={cx(
          '-translate-y-[200%] absolute opacity-0 transition-all ease-in-out',
          isLoading && 'translate-y-0 opacity-100',
        )}
      />
    </Button>
  );
}

export { ActionButton };
