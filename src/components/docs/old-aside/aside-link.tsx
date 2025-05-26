'use client';

import { cx, focusRing } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentProps } from 'react';

export default function AsideLink({
  href,
  className,
  ...props
}: ComponentProps<typeof Link>) {
  const path = usePathname();
  const isActive = path === href;

  return (
    <Link
      href={href}
      {...props}
      className={cx(
        'flex h-8 items-center gap-2 rounded-md px-2 text-text-2',
        '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        'font-medium transition-colors hover:bg-secondary',
        focusRing,
        isActive &&
          'bg-primary-muted text-primary hover:bg-primary-muted hover:text-primary',
        className,
      )}
    />
  );
}
