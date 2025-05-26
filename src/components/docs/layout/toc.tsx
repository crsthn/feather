import type { TableOfContents } from 'fumadocs-core/server';
import { Text } from 'lucide-react';
import TocContent from './toc-content';

export function Toc({ toc }: { toc: TableOfContents }) {
  if (toc.length <= 0) return null;
  return (
    <div className="sticky top-16 hidden max-h-[calc(100vh-4rem)] w-70 shrink-0 flex-col gap-3 px-6 py-12 xl:flex">
      <span className="flex items-center gap-2 text-text-2">
        <Text size={16} />
        On this page
      </span>
      <TocContent toc={toc} />
    </div>
  );
}
