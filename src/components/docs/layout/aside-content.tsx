"use client";

import type { PageTree } from "fumadocs-core/server";
import { usePathname } from "next/navigation";
import TreeNode from "./shared/tree-node";

type AsideContentProps = {
  items: PageTree.Node[];
  rootItems: PageTree.Folder[];
};

export function AsideContent({ items, rootItems }: AsideContentProps) {
  const path = usePathname();

  const activeRoot = rootItems.find((item) =>
    path.startsWith(item.index?.url as string)
  );

  return (
    <>
      {activeRoot
        ? activeRoot.children.map((child) => (
            <TreeNode key={child.$id} node={child} />
          ))
        : items.length > 0 &&
          items.map((item) => <TreeNode key={item.$id} node={item} />)}
    </>
  );
}
