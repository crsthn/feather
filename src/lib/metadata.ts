import type { Metadata } from 'next';

export function constructMetadata({
  title = 'Feather – Beautiful, modern and accessible set of components',
  description = 'A beautiful, modern and accessible set of components built with Base UI, Tailwind CSS, and TypeScript. Fully customizable, and dark mode ready.',
  image = '/opengraph-image.png',
  icons = '/favicon.ico',
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@crsthn77',
    },
    icons,
    metadataBase: new URL('https://feather7.vercel.app/'),
  };
}
