import { Toc } from '@/components/docs/layout/toc';
import { Mdx } from '@/components/docs/mdx';
import { constructMetadata } from '@/lib/metadata';
import { source } from '@/lib/source';
import { findNeighbour } from 'fumadocs-core/server';
import type { PageTree } from 'fumadocs-core/server';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { ReactElement } from 'react';

export interface DocPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function Page(props: DocPageProps): Promise<ReactElement> {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const { body, toc } = await page.data.load();

  const activeRoot = source.pageTree.children.find(
    (item): item is PageTree.Folder =>
      item.type === 'folder' &&
      item.root === true &&
      item.index?.type === 'page' &&
      page.url.startsWith(item.index?.url as string),
  );

  const neighbours = activeRoot
    ? findNeighbour(
        {
          name: activeRoot.name,
          children: activeRoot.children,
        },
        page.url,
      )
    : findNeighbour(source.pageTree, page.url);

  return (
    <>
      <article className="mx-auto flex min-w-0 max-w-3xl flex-1 flex-col gap-12 py-6 lg:py-12">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-4xl">{page.data.title}</h1>
          {page.data.description && (
            <p className="text-base text-text-2">{page.data.description}</p>
          )}
        </div>

        <Mdx code={body} />

        <div className="flex gap-6">
          {neighbours.previous && (
            <Link
              href={neighbours.previous.url}
              className="flex w-full flex-col items-start rounded-lg p-4 font-medium transition-colors ease-ease hover:bg-secondary"
            >
              <span className="inline-flex gap-1 text-text-2 text-xs">
                <ChevronLeft size={16} />
                Previous
              </span>
              {neighbours.previous.name}
            </Link>
          )}
          {neighbours.next && (
            <Link
              href={neighbours.next.url}
              className="flex w-full flex-col items-end rounded-lg p-4 font-medium transition-colors ease-ease hover:bg-secondary"
            >
              <span className="inline-flex text-text-2 text-xs">
                Next
                <ChevronRight size={16} />
              </span>
              {neighbours.next.name}
            </Link>
          )}
        </div>
      </article>

      <Toc toc={toc} />
    </>
  );
}

export async function generateMetadata(props: DocPageProps): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const description =
    page.data.description ??
    'A beautiful, modern and accessible set of components built with Base UI, Tailwind CSS, and TypeScript. Fully customizable, and dark mode ready.';

  return constructMetadata({
    title: `${page?.data.title} | Feather`,
    description,
  });
}

export function generateStaticParams() {
  return source.generateParams();
}
