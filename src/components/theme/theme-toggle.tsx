"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cx } from "@/lib/utils";
import { Radio } from "@base-ui-components/react/radio";
import { RadioGroup } from "@base-ui-components/react/radio-group";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { type ComponentProps, useEffect, useState } from "react";

const themes = [
  { value: "dark", icon: Moon },
  { value: "light", icon: Sun },
  { value: "system", icon: Monitor },
] as const;

export function ThemeToggle({
  className,
  ...props
}: ComponentProps<typeof RadioGroup>) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Skeleton className={cx("h-8 w-20 rounded-full bg-muted", className)} />
    );
  }

  return (
    <RadioGroup
      value={theme}
      onValueChange={(value) => setTheme(value as string)}
      className={cx("inline-flex h-fit rounded-full bg-muted p-1", className)}
      {...props}
    >
      {themes.map(({ value, icon: Icon }) => (
        <Radio.Root
          key={value}
          value={value}
          className="flex size-6 cursor-pointer items-center justify-center rounded-full text-text-2 focus-visible:outline-2 focus-visible:outline-primary data-checked:bg-surface data-checked:text-text"
        >
          <Icon size={14} />
        </Radio.Root>
      ))}
    </RadioGroup>
  );
}
