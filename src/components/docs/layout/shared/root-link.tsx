'use client';

import { cx, focusRing } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentProps } from 'react';

export default function RootLink({
  href,
  className,
  ...props
}: ComponentProps<typeof Link>) {
  const path = usePathname();
  const isActive = href !== '/' && path.startsWith(href as string);

  return (
    <Link
      href={href}
      {...props}
      className={cx(
        'flex h-8 items-center px-2 text-text-2',
        'font-medium transition-colors hover:text-text',
        focusRing,
        className,
        isActive && 'text-primary hover:text-primary',
      )}
    />
  );
}
