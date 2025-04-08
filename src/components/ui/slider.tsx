import { cx } from "@/lib/utils";
import { Slider as BaseSlider } from "@base-ui-components/react/slider";
import type { ComponentProps } from "react";

function Slider({
  className,
  ...props
}: ComponentProps<typeof BaseSlider.Root>) {
  return (
    <BaseSlider.Root className={cx("w-full", className)} {...props}>
      <BaseSlider.Control className="flex w-full items-center">
        <BaseSlider.Track className="h-2 w-full grow cursor-pointer rounded-full bg-muted">
          <BaseSlider.Indicator className="rounded-full bg-primary" />
          <BaseSlider.Thumb className="size-5 cursor-pointer rounded-full border-2 border-primary bg-on-primary outline-none transition-colors focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 focus-visible:dark:ring-primary/30" />
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}

export { Slider };
