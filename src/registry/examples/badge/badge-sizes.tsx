import { Badge } from '@/components/ui/badge';

export default function Component() {
  return (
    <div className="flex gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  );
}
