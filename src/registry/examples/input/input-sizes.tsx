import { Input } from "@/components/ui/input";

export default function Component() {
  return (
    <div className="flex w-full max-w-64 flex-col gap-4">
      <Input size="sm" placeholder="Name" />
      <Input size="md" placeholder="Name" />
      <Input size="lg" disabled placeholder="Name" />
    </div>
  );
}
