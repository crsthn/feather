"use client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Component() {
  return (
    <Button
      color="secondary"
      onClick={() =>
        toast.success("Done!", {
          description: "Your action was completed successfully.",
        })
      }
    >
      Show toast
    </Button>
  );
}
