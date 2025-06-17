import { Badge } from '@/components/ui/badge';

export default function Component() {
  return (
    <div className="flex gap-4">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="danger">Danger</Badge>
    </div>
  );
}
