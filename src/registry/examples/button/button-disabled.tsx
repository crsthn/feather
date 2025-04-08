import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex gap-4">
      <Button color="primary" disabled>
        Primary
      </Button>
      <Button color="secondary" disabled>
        Secondary
      </Button>
      <Button color="danger" disabled>
        Danger
      </Button>
    </div>
  );
}
