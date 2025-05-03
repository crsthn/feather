'use client';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { Toast as BaseToast } from '@base-ui-components/react/toast';
import { CircleCheck, CircleX, Info } from 'lucide-react';
import type { ComponentProps } from 'react';

export type ToastType = 'loading' | 'success' | 'error' | 'info';

const icons: Record<ToastType, React.ReactNode> = {
  loading: <Spinner />,
  success: <CircleCheck className="text-primary" />,
  error: <CircleX className="text-danger" />,
  info: <Info />,
};

const toast = BaseToast.createToastManager();

function Toast({
  children,
  ...props
}: ComponentProps<typeof BaseToast.Provider>) {
  return (
    <BaseToast.Provider {...props} toastManager={toast}>
      {children}
      <BaseToast.Viewport className="fixed top-auto bottom-4 z-100 flex max-sm:inset-x-4 sm:right-6 sm:bottom-6 sm:w-89">
        <ToastList />
      </BaseToast.Viewport>
    </BaseToast.Provider>
  );
}

function ToastList() {
  const { toasts } = BaseToast.useToastManager();
  return toasts.map((toast) => (
    <BaseToast.Root
      key={toast.id}
      toast={toast}
      style={{
        ['--gap' as string]: '1rem',
        ['--offset-y' as string]:
          'calc(var(--toast-offset-y) * -1 + (var(--toast-index) * var(--gap) * -1) + var(--toast-swipe-movement-y))',
      }}
      className="absolute right-0 bottom-0 left-auto z-[calc(1000-var(--toast-index))] mr-0 flex w-full select-none items-center justify-between gap-3 rounded-lg border bg-bg bg-clip-padding p-4 shadow-[0_24px_32px_-8px_rgba(0,0,0,0.06),0_8px_16px_-4px_rgba(0,0,0,0.04)] transition-all duration-600 ease-out-quint [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+calc(var(--toast-index)*-15px)))_scale(calc(1-(var(--toast-index)*0.1)))] after:absolute after:bottom-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full data-[ending-style]:opacity-0 data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))] data-[expanded]:[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y)))] data-[expanded]:data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[expanded]:data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-[expanded]:data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[expanded]:data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))] data-[starting-style]:[transform:translateY(150%)] data-[ending-style]:[&:not([data-limited])]:[transform:translateY(150%)]"
    >
      <div className="flex gap-3 [&>svg]:size-4 [&>svg]:shrink-0">
        {toast.type && toast.type ? icons[toast.type as ToastType] : null}
        <div className="flex flex-col gap-1">
          <BaseToast.Title className="font-medium leading-4" />
          <BaseToast.Description className="font-normal text-text-2" />
        </div>
      </div>
      <BaseToast.Action render={<Button size="sm" />} />
    </BaseToast.Root>
  ));
}

export { toast, Toast };
