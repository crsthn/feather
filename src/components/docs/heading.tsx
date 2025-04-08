import { cx } from "@/lib/utils";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Types = "h1" | "h2" | "h3" | "h4";
type HeadingProps<T extends Types> = Omit<ComponentPropsWithoutRef<T>, "as"> & {
  as?: T;
};

export function Heading<T extends Types = "h1">({
  as,
  className,
  ...props
}: HeadingProps<T>): React.ReactElement {
  const As = as ?? "h1";

  if (!props.id) return <As className={className} {...props} />;

  return (
    <As
      className={cx("flex scroll-m-24 items-center gap-2 text-text", className)}
      {...props}
    >
      <Link href={`#${props.id}`} className="peer no-underline">
        {props.children}
      </Link>
      <LinkIcon
        size={16}
        className="-translate-x-2 not-prose shrink-0 text-text-2 opacity-0 transition-all duration-200 peer-hover:translate-x-0 peer-hover:opacity-100"
      />
    </As>
  );
}
