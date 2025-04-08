import { source } from "@/lib/source";
import type { PageTree } from "fumadocs-core/server";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Github from "../../icons/github";
import { ThemeToggle } from "../../theme/theme-toggle";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";
import { Folder, FolderContent, FolderTrigger } from "../layout/shared/folder";
import AsideLink from "./aside-link";

export default function Aside() {
  const pageTree = source.pageTree;
  return (
    <aside className="fixed inset-y-0 left-0 flex w-72 flex-col bg-surface">
      <header className="flex flex-col gap-6 border-b p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              className="dark:invert"
              src="/feather.svg"
              alt="Next.js logo"
              width={20}
              height={20}
              priority
            />
            <span className="font-semibold text-lg">Feather</span>
          </div>
          <ThemeToggle />
        </div>
        <Button color="secondary" className="justify-between px-3 text-text-2">
          <span className="flex items-center gap-2">
            <Search />
            Search docs
          </span>
          <Badge color="secondary">Ctrl K</Badge>
        </Button>
      </header>
      <main className="relative h-full overflow-y-auto px-6">
        <div className="pointer-events-none sticky inset-x-0 top-0 z-10 h-6 bg-gradient-to-b from-surface to-transparent" />
        <div className="flex grow flex-col">
          {pageTree.children.map((item) => {
            return <SidebarComposed key={item.$id} node={item} />;
          })}
        </div>

        <div className="pointer-events-none sticky right-0 bottom-0 left-0 z-10 h-6 bg-gradient-to-t from-surface to-transparent" />
      </main>
      <footer className="flex flex-col border-t p-6">
        <Link
          href="/"
          className="flex h-8 w-full items-center gap-2 text-text-2 transition-colors hover:text-text"
        >
          <Github className="fill-text" width={16} height={16} />
          GitHub
        </Link>
      </footer>
    </aside>
  );
}

function SidebarComposed({
  node,
}: {
  node: PageTree.Node;
}) {
  if (node.type === "folder") {
    return (
      <div className="flex flex-col">
        <h3 className="mb-2 flex items-center gap-x-2 font-medium">
          {node.name}
        </h3>
        {node.children.map((child) => {
          if (child.type === "separator") {
            return <Separator key={child.$id} />;
          }
          if (child.type === "page") {
            return (
              <AsideLink key={child.$id} href={child.url}>
                {child.icon}
                {child.name}
              </AsideLink>
            );
          }
          if (child.type === "folder") {
            return (
              <Folder key={child.$id}>
                <FolderTrigger>{child.name}</FolderTrigger>
                <FolderContent>
                  {child.children.map((item) => {
                    if (item.type === "page") {
                      return (
                        <AsideLink
                          key={item.$id}
                          href={item.url}
                          className="pl-6"
                        >
                          {item.icon}
                          {item.name}
                        </AsideLink>
                      );
                    }
                  })}
                </FolderContent>
              </Folder>
            );
          }
        })}
      </div>
    );
  }

  if (node.type === "separator") {
    return <Separator />;
  }

  if (node.type === "page") {
    return (
      <AsideLink href={node.url}>
        {node.icon}
        {node.name}
      </AsideLink>
    );
  }
}
