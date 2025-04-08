import { CodeBlock } from "@/components/docs/codeblock";
import ComponentPreview from "@/components/docs/component-preview";
import ComponentSource from "@/components/docs/component-source";
import { Heading } from "@/components/docs/heading";
import { cx } from "@/lib/utils";
import Link from "fumadocs-core/link";
import type { MDXContent } from "mdx/types";
import Image from "next/image";
import type { ComponentProps } from "react";

interface MdxProps {
  code: MDXContent;
}

export function Mdx({ code }: MdxProps) {
  const Component = code;

  return (
    <div className="prose">
      <Component
        components={{
          pre: (props: ComponentProps<"pre">) => <CodeBlock {...props} />,
          a: (props: ComponentProps<typeof Link>) => {
            return <Link {...props} />;
          },
          img: (props: ComponentProps<typeof Image>) => (
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 900px"
              className={cx("rounded-lg", props.className)}
              {...props}
            />
          ),
          h1: (props: ComponentProps<"h1">) => <Heading as="h1" {...props} />,
          h2: (props: ComponentProps<"h2">) => <Heading as="h2" {...props} />,
          h3: (props: ComponentProps<"h3">) => <Heading as="h3" {...props} />,
          h4: (props: ComponentProps<"h4">) => <Heading as="h4" {...props} />,
          ComponentSource,
          ComponentPreview,
        }}
      />
    </div>
  );
}
