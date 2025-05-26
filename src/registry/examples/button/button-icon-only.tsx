import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

export default function Component() {
  return (
    <div className="flex gap-4">
      <Button size="sm" iconOnly>
        <Star />
      </Button>
      <Button size="md" iconOnly>
        <Star />
      </Button>
      <Button size="lg" iconOnly>
        <Star />
      </Button>
    </div>
  );
}
