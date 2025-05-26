'use client';

import { cx } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { ComponentProps } from 'react';
import { useState } from 'react';

type UnderlineLinkProps = ComponentProps<typeof Link> & {
  external?: boolean;
};

function UnderlineLink({
  href,
  children,
  className,
  external = false,
  ...props
}: UnderlineLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href} target={external ? '_blank' : undefined} {...props}>
      <motion.span
        className={cx('relative font-medium text-primary', className)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {children}
        <motion.span
          className="absolute bottom-0 left-0 h-[1px] w-full origin-left bg-current"
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: isHovered ? 1 : 0,
            transformOrigin: isHovered ? 'left center' : 'right center',
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </motion.span>
    </Link>
  );
}

UnderlineLink.displayName = 'UnderlineLink';

export { UnderlineLink, type UnderlineLinkProps };
