import { AsideContent } from '@/components/docs/layout/aside-content';
import type { PageTree } from 'fumadocs-core/server';

type AsideProps = {
  items: PageTree.Node[];
  rootItems: PageTree.Folder[];
};

export default function Aside({ items, rootItems }: AsideProps) {
  return (
    <aside className="fixed top-16 bottom-0 left-0 z-50 hidden w-70 flex-col bg-surface lg:flex">
      <div className="relative flex-1 overflow-hidden">
        <nav className="h-full overflow-y-auto p-6">
          <AsideContent items={items} rootItems={rootItems} />
        </nav>
        <div className="pointer-events-none absolute inset-x-6 top-0 h-6 bg-gradient-to-b from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-x-6 bottom-0 h-6 bg-gradient-to-t from-surface to-transparent" />
      </div>
    </aside>
  );
}
