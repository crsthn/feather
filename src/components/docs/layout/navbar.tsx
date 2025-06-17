import MobileNavigation from '@/components/docs/layout/mobile-navigation';
import Search from '@/components/docs/layout/search';
import RootLink from '@/components/docs/layout/shared/root-link';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import {} from '@/components/ui/tabs';
import type { PageTree } from 'fumadocs-core/server';
import Image from 'next/image';
import Link from 'next/link';

type NavbarProps = {
  items: PageTree.Node[];
  rootItems: PageTree.Folder[];
};

export default function Navbar({ items, rootItems }: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b bg-surface/80 pl-6 backdrop-blur-xl lg:pr-6">
      <nav className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            className="dark:invert"
            src="/feather.svg"
            alt="Feather logo"
            width={20}
            height={20}
          />
          <span className="font-semibold text-lg">Feather</span>
        </Link>
        {rootItems.length > 0 && (
          <ul className="hidden gap-2 sm:flex">
            {rootItems.map((item) => (
              <RootLink key={item.$id} href={item.index?.url as string}>
                {item.name}
              </RootLink>
            ))}
          </ul>
        )}
      </nav>
      <div className="inline-flex items-center">
        <Search items={items} rootItems={rootItems} />
        <MobileNavigation items={items} rootItems={rootItems} />
      </div>
      <ThemeToggle className="hidden lg:inline-flex" />
    </header>
  );
}
