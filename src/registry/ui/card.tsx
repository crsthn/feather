import { cx } from "@/lib/utils";
import type { ComponentProps } from "react";

function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cx("rounded-xl bg-surface text-text", className)}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cx("flex flex-col gap-1 p-6", className)} {...props} />
  );
}

function CardTitle({ className, ...props }: ComponentProps<"h2">) {
  return <h3 className={cx("font-semibold text-xl", className)} {...props} />;
}

function CardDescription({ className, ...props }: ComponentProps<"p">) {
  return <p className={cx("text-text-2", className)} {...props} />;
}

function CardMain({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("px-6 pb-6", className)} {...props} />;
}

function CardFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cx("flex items-center px-6 pb-6", className)} {...props} />
  );
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardMain };
