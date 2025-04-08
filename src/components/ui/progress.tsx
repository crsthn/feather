"use client";
import { cx } from "@/lib/utils";
import { Progress as BaseProgress } from "@base-ui-components/react";
import type { ComponentProps } from "react";

function Progress({
  className,
  ...props
}: ComponentProps<typeof BaseProgress.Root>) {
  return (
    <BaseProgress.Root className={cx("w-full", className)} {...props}>
      <BaseProgress.Track className="block h-2 w-full overflow-hidden rounded-full bg-muted">
        <BaseProgress.Indicator className="block h-full bg-primary transition-all duration-500 ease-in-out" />
      </BaseProgress.Track>
    </BaseProgress.Root>
  );
}

export { Progress };
