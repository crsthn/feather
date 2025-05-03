'use client';
import { Badge } from '@/components/ui/badge';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Dialog, DialogPopup, DialogTrigger } from '@/components/ui/dialog';
import { cx, focusInteractive } from '@/lib/utils';
import type { PageTree } from 'fumadocs-core/server';
import { Circle, SearchIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

type NavbarProps = {
  items: PageTree.Node[];
  rootItems: PageTree.Folder[];
};

export default function Search({ items, rootItems }: NavbarProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const path = usePathname();

  const activeRoot = rootItems.find((item) =>
    path.startsWith(item.index?.url as string),
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={cx(
          'inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border-input text-text-2 transition-colors hover:text-text lg:w-md lg:justify-between lg:border lg:bg-surface lg:px-3 lg:shadow-xs',
          focusInteractive,
        )}
      >
        <div className="flex items-center gap-2">
          <SearchIcon size={16} />
          <span className="hidden lg:inline">Search docs</span>
        </div>
        <Badge color="secondary" className="hidden lg:inline-flex">
          Ctrl K
        </Badge>
      </DialogTrigger>
      <DialogPopup className="top-1/10 w-xl translate-y-0">
        <Command>
          <CommandInput placeholder="Search docs..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {activeRoot
                ? activeRoot.children.map((child) => (
                    <SearchNode
                      key={child.$id}
                      node={child}
                      onNavigate={() => setOpen(false)}
                    />
                  ))
                : items.length > 0 &&
                  items.map((item) => (
                    <SearchNode
                      key={item.$id}
                      node={item}
                      onNavigate={() => setOpen(false)}
                    />
                  ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogPopup>
    </Dialog>
  );
}

function SearchNode({
  node,
  onNavigate,
}: { node: PageTree.Node; onNavigate?: () => void }) {
  const router = useRouter();

  const runCommand = useCallback(
    (command: () => unknown) => {
      onNavigate?.();
      command();
    },
    [onNavigate],
  );

  if (node.type === 'separator') {
    return;
  }

  if (node.type === 'folder') {
    return (
      <>
        {node.children.map((child) => (
          <SearchNode key={child.$id} node={child} onNavigate={onNavigate} />
        ))}
      </>
    );
  }

  if (node.type === 'page') {
    return (
      <CommandItem
        onSelect={() => {
          runCommand(() => router.push(node.url));
        }}
      >
        <Circle size={16} className="text-text-2" />
        {node.name}
      </CommandItem>
    );
  }
}
