'use client';

import { Button, type buttonStyles } from '@/components/ui/button';
import type { VariantProps } from 'class-variance-authority';
import { Check, Copy } from 'lucide-react';
import {
  type ComponentProps,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

type CopyButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonStyles> & {
    text: string;
  };

export default function CopyButton({
  text,
  iconOnly = true,
  variant = 'subtle',
  size = 'sm',
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = useState<boolean>(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(text);

    setCopied(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setCopied(false);
      timeoutRef.current = null;
    }, 1500);
  }, [text]);

  return (
    <Button
      onClick={handleCopy}
      iconOnly={iconOnly}
      variant={variant}
      size={size}
      {...props}
    >
      <Copy
        className={`text-text-2 transition-all ease-in-out ${
          copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
      />
      <Check
        className={`absolute transition-all ease-in-out ${
          copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      />
    </Button>
  );
}
