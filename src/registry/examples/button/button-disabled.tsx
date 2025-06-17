import { Button } from '@/components/ui/button';

export default function Component() {
  return (
    <div className="flex gap-4">
      <Button variant="primary" disabled>
        Primary
      </Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="danger" disabled>
        Danger
      </Button>
    </div>
  );
}
