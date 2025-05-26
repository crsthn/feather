'use client';

import { ThemeToggle } from '@/components/theme/theme-toggle';
import { cx } from '@/lib/utils';
import { Dialog } from '@base-ui-components/react';
import type { PageTree } from 'fumadocs-core/server';
import { usePathname } from 'next/navigation';
import { type ComponentProps, useState } from 'react';
import MenuAnimatedIcon from '../../icons/menu-animated';
import RootLink from './shared/root-link';
import TreeNode from './shared/tree-node';

type MobileNavigationProps = ComponentProps<typeof Dialog.Trigger> & {
  items: PageTree.Node[];
  rootItems: PageTree.Folder[];
};

export default function MobileNavigation({
  className,
  items,
  rootItems,
  ...props
}: MobileNavigationProps) {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const activeRoot = rootItems.find((item) =>
    path.startsWith(item.index?.url as string),
  );

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger
        {...props}
        className={cx(
          'group flex size-16 cursor-pointer items-center justify-center text-text-2 hover:text-text lg:hidden',
          className,
        )}
        aria-expanded={isOpen}
      >
        <MenuAnimatedIcon height={16} width={16} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Popup className="fixed inset-x-0 top-16 z-50 flex h-[calc(100vh-4rem)] flex-col overflow-y-auto bg-surface/80 text-text backdrop-blur-xl transition-all duration-200 ease-ease data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 lg:hidden">
          {rootItems.length > 0 && (
            <nav className="flex h-16 items-center gap-2 border-t px-6 sm:hidden">
              {rootItems.map((item) => (
                <RootLink
                  key={item.$id}
                  href={item.index?.url as string}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </RootLink>
              ))}
            </nav>
          )}

          <nav className="flex-1 overflow-y-auto border-t p-6">
            {activeRoot
              ? activeRoot.children.map((child) => (
                  <TreeNode
                    key={child.$id}
                    node={child}
                    onNavigate={() => setIsOpen(false)}
                  />
                ))
              : items.length > 0 &&
                items.map((item) => (
                  <TreeNode
                    key={item.$id}
                    node={item}
                    onNavigate={() => setIsOpen(false)}
                  />
                ))}
          </nav>

          <div className="flex h-16 w-full items-center border-t px-6">
            <ThemeToggle />
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
