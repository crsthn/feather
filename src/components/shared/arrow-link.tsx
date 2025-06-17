'use client';

import { cx } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import type { ComponentProps } from 'react';
import { useState } from 'react';

type ArrowLinkProps = ComponentProps<typeof Link> & {
  external?: boolean;
};

function ArrowLink({
  href,
  className,
  children,
  external = false,
  ...props
}: ArrowLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  const customTransition = {
    duration: 0.4,
  };

  const leftArrowVariants = {
    hidden: {
      opacity: 0,
      x: -12,
      y: 12,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    },
  };

  const rightArrowVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <Link href={href} target={external ? '_blank' : undefined} {...props}>
      <motion.span
        className={cx(
          'inline-flex overflow-hidden py-2 font-medium leading-none',
          className,
        )}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          x: isHovered ? 12 : 0,
        }}
        transition={customTransition}
      >
        <motion.span
          className="self-end"
          initial="hidden"
          animate={isHovered ? 'visible' : 'hidden'}
          variants={leftArrowVariants}
          transition={customTransition}
          aria-hidden="true"
        >
          <ArrowUpRight size={12} />
        </motion.span>
        {children}
        <motion.span
          className="self-start"
          initial="visible"
          animate={isHovered ? 'hidden' : 'visible'}
          variants={rightArrowVariants}
          transition={customTransition}
          aria-hidden="true"
        >
          <ArrowUpRight size={12} />
        </motion.span>
      </motion.span>
    </Link>
  );
}

ArrowLink.displayName = 'ArrowLink';

export { ArrowLink, type ArrowLinkProps };
