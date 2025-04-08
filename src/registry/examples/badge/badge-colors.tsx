import { Badge } from "@/components/ui/badge";

export default function Component() {
  return (
    <div className="flex gap-4">
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="danger">Danger</Badge>
    </div>
  );
}
