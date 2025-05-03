import { type RefObject, useEffect, useState } from 'react';

const useMeasure = ({ ref }: { ref: RefObject<null> }) => {
  const [height, setHeight] = useState<number | 'auto'>('auto');

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const rect = entry.target.getBoundingClientRect();

        setHeight(rect.height);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref]);

  return { height };
};

export default useMeasure;
