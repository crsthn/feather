import fs from "node:fs/promises";
import path from "node:path";
import { Pre } from "@/components/docs/codeblock";
import CopyButton from "@/components/shared/copy-button";
import { Spinner } from "@/components/ui/spinner";
import { Tabs, TabsList, TabsPanel, TabsTrigger } from "@/components/ui/tabs";
import { tryCatch } from "@/lib/try-catch";
import { highlight } from "fumadocs-core/highlight";
import { Code2, Eye } from "lucide-react";
import dynamic from "next/dynamic";
import type { ComponentProps } from "react";

type ComponentPreviewProps = ComponentProps<typeof Tabs> & {
  name: string;
};

export default async function ComponentPreview({
  name,
  ...props
}: ComponentPreviewProps) {
  const DemoComponent = dynamic(() => import(`@/registry/${name}`), {
    loading: () => <Spinner size="md" />,
  });

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
    <Tabs
      className="not-prose my-6 overflow-hidden rounded-xl bg-surface text-sm first:mt-0 last:mb-0"
      defaultValue="preview"
      {...props}
    >
      <TabsList
        className="w-full rounded-b-none border-b bg-transparent py-1.5 pr-2.5 pl-1.5"
        indicatorClassName="rounded-lg bg-secondary"
      >
        <TabsTrigger value="preview">
          <Eye size={16} />
          Preview
        </TabsTrigger>
        <TabsTrigger value="code">
          <Code2 size={16} />
          Code
        </TabsTrigger>
        <CopyButton text={data} className="ml-auto" />
      </TabsList>

      <TabsPanel
        className="flex items-center justify-center p-6"
        value="preview"
      >
        <DemoComponent />
      </TabsPanel>
      <TabsPanel value="code">{rendered}</TabsPanel>
    </Tabs>
  );
}
