'use client';

import { cx } from '@/lib/utils';
import type { TableOfContents } from 'fumadocs-core/server';
import * as Primitive from 'fumadocs-core/toc';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export default function TocContent({ toc }: { toc: TableOfContents }) {
  const containerRef = useRef<HTMLUListElement>(null);
  const [thumbProps, setThumbProps] = useState({
    height: 0,
    top: 0,
    opacity: 0,
  });

  // Track the active TOC item and update the thumb position
  useEffect(() => {
    if (!containerRef.current) return;

    // Function to update thumb position based on active element
    const updateThumbPosition = () => {
      const activeElement = containerRef.current?.querySelector(
        '[data-active="true"]',
      ) as HTMLElement;

      if (activeElement) {
        const { offsetTop, offsetHeight } = activeElement;
        setThumbProps({
          height: offsetHeight,
          top: offsetTop,
          opacity: 1,
        });
      } else {
        setThumbProps((prev) => ({ ...prev, opacity: 0 }));
      }
    };

    // Initial update
    updateThumbPosition();

    // Set up mutation observer to detect changes in the active item
    const observer = new MutationObserver(() => {
      updateThumbPosition();
    });

    // Observe the container for any attribute changes on children
    observer.observe(containerRef.current, {
      subtree: true,
      attributes: true,
      attributeFilter: ['data-active'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Primitive.AnchorProvider toc={toc}>
      <Primitive.ScrollProvider containerRef={containerRef}>
        <nav
          ref={containerRef}
          className="relative flex flex-col overflow-y-auto"
        >
          {/* Thumb indicator */}
          <motion.div
            className="absolute left-0 w-0.5 rounded-full bg-primary"
            initial={{ opacity: 0 }}
            animate={{
              height: thumbProps.height,
              top: thumbProps.top,
              opacity: thumbProps.opacity,
            }}
            transition={{
              duration: 0.15,
              ease: [0.25, 0.1, 0.25, 1.0],
            }}
          />

          {toc.map((item) => (
            <Primitive.TOCItem
              key={item.url}
              href={item.url}
              className={cx(
                'block border-l-2 py-1 font-medium text-text-2 transition-colors hover:text-text data-[active=true]:text-text',
                item.depth <= 2 && 'pl-3',
                item.depth === 3 && 'pl-6',
                item.depth >= 4 && 'pl-9',
              )}
            >
              {item.title}
            </Primitive.TOCItem>
          ))}
        </nav>
      </Primitive.ScrollProvider>
    </Primitive.AnchorProvider>
  );
}
