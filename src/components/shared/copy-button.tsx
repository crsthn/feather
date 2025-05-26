'use client';

import { Check, Copy } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Button, type ButtonProps } from '../ui/button';

type CopyButtonProps = ButtonProps & {
  text: string;
};

export default function CopyButton({
  text,
  iconOnly = true,
  color = 'secondary',
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
      color={color}
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
