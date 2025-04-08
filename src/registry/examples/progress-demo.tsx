"use client";
import { Progress } from "@/components/ui/progress";
import React from "react";

export default function Component() {
  const [value, setValue] = React.useState(20);

  // Simulate changes
  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setValue((current) =>
        Math.min(100, Math.round(current + Math.random() * 25))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <Progress value={value} className="max-w-64" />;
}
