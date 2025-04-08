import Aside from "@/components/docs/layout/aside";
import Navbar from "@/components/docs/layout/navbar";
import { source } from "@/lib/source";
import type { PageTree } from "fumadocs-core/server";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const rootItems = source.pageTree.children.filter(
    (item): item is PageTree.Folder =>
      item.type === "folder" &&
      item.root === true &&
      item.index?.type === "page"
  );

  return (
    <>
      <Navbar items={source.pageTree.children} rootItems={rootItems} />
      <Aside items={source.pageTree.children} rootItems={rootItems} />
      <main className="mt-16 flex min-h-[calc(100vh-4rem)] gap-6 bg-bg px-6 lg:ml-70 lg:rounded-tl-2xl lg:pl-12 xl:pr-0">
        {children}
      </main>
    </>
  );
}
