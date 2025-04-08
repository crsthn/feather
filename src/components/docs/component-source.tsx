import fs from "node:fs/promises";
import path from "node:path";
import { Pre } from "@/components/docs/codeblock";
import CopyButton from "@/components/shared/copy-button";
import { tryCatch } from "@/lib/try-catch";
import { cx } from "@/lib/utils";
import { highlight } from "fumadocs-core/highlight";
import { Code2 } from "lucide-react";
import type { ComponentProps } from "react";

type ComponentSourceProps = ComponentProps<"figure"> & {
  name: string;
};
export default async function ComponentSource({
  name,
  className,
  ...props
}: ComponentSourceProps) {
  const { data, error } = await tryCatch(
    fs.readFile(
      path.join(process.cwd(), "src", "registry", `${name}.tsx`),
      "utf-8"
    )
  );

  if (error) {
    return (
      <div className="rounded-xl bg-bg p-6">
        <p className="text-text-2">Failed to load source code</p>
      </div>
    );
  }

  const rendered = await highlight(data, {
    lang: "tsx",
    components: {
      pre: Pre,
    },
  });

  return (
    <figure
      {...props}
      className={cx(
        "not-prose relative my-6 overflow-hidden rounded-xl bg-surface text-sm first:mt-0 last:mb-0",
        className
      )}
    >
      <div className="flex flex-row items-center gap-2 border-b py-1.5 pr-2.5 pl-4">
        <Code2 size={16} />
        <figcaption className="flex-1 truncate">{`components/${name}.tsx`}</figcaption>
        <CopyButton text={data} />
      </div>
      {rendered}
    </figure>
  );
}
