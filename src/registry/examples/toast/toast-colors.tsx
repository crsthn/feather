"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle2, CircleX, Info } from "lucide-react";
import { toast } from "sonner";

export default function Component() {
  return (
    <div className="flex items-center gap-4">
      <Button
        iconOnly
        color="danger"
        onClick={() =>
          toast.error(" Something went wrong", {
            description: "We couldn’t process your request.",
          })
        }
      >
        <CircleX size={16} />
      </Button>
      <Button
        iconOnly
        color="primary"
        onClick={() =>
          toast.success("Done!", {
            description: "Your action was completed successfully.",
          })
        }
      >
        <CheckCircle2 size={16} />
      </Button>
      <Button
        iconOnly
        color="secondary"
        onClick={() =>
          toast("Heads up!", {
            description: "Remember to save your changes before leaving.",
          })
        }
      >
        <Info size={16} />
      </Button>
    </div>
  );
}
