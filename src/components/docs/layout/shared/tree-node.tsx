"use client";

import { cx, focusRing } from "@/lib/utils";
import type { PageTree } from "fumadocs-core/server";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { Folder, FolderContent, FolderTrigger } from "./folder";

function TreeSeparator({ children, className, ...props }: ComponentProps<"p">) {
  return (
    <p
      {...props}
      className={cx(
        "mt-6 mb-2 inline-flex items-center gap-2 font-medium first-of-type:mt-0",
        "[&_svg]:size-4 [&_svg]:shrink-0",
        className
      )}
    >
      {children}
    </p>
  );
}

function TreePage({ href, className, ...props }: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      {...props}
      className={cx(
        "flex h-8 items-center gap-2 rounded-md px-2 text-text-2",
        "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        "font-medium transition-colors hover:bg-secondary",
        focusRing,
        active &&
          "bg-primary-muted text-primary hover:bg-primary-muted hover:text-primary",
        className
      )}
    />
  );
}

export default function TreeNode({
  node,
  onNavigate,
}: { node: PageTree.Node; onNavigate?: () => void }) {
  if (node.type === "separator") {
    return (
      <TreeSeparator>
        {node.icon}
        {node.name}
      </TreeSeparator>
    );
  }

  if (node.type === "folder") {
    return (
      <Folder>
        <FolderTrigger>
          <span className="inline-flex flex-1 items-center gap-2 [&_svg]:size-4 [&_svg]:shrink-0">
            {node.icon}
            {node.name}
          </span>
        </FolderTrigger>
        <FolderContent>
          {node.children.map((child) => (
            <TreeNode key={child.$id} node={child} onNavigate={onNavigate} />
          ))}
        </FolderContent>
      </Folder>
    );
  }

  if (node.type === "page") {
    return (
      <TreePage href={node.url} onClick={onNavigate}>
        {node.icon}
        {node.name}
      </TreePage>
    );
  }
}
