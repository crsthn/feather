import { CircleCheck, CircleX } from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import { buttonStyles } from "./button";

function Toast({ ...props }: ToasterProps) {
  return (
    <Sonner
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "flex rounded-lg p-4 gap-3 select-none backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08),0_4px_15px_rgba(0,0,0,0.06)] w-full",
          icon: "relative! m-0! size-4!",
          loader: "size-4!",
          description: "text-text-2! font-normal mt-1",
          title: "font-medium leading-4!",
          default: "bg-popover",
          actionButton: buttonStyles({ size: "sm" }),
          cancelButton: buttonStyles({ color: "secondary", size: "sm" }),
        },
      }}
      icons={{
        error: <CircleX size={16} className="m-0! text-danger" />,
        success: (
          <CircleCheck
            size={16}
            className="m-0! text-green-600 dark:text-green-500"
          />
        ),
      }}
      {...props}
    />
  );
}

export { Toast };
