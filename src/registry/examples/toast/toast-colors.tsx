'use client';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/toast';
import { CheckCircle2, CircleX, Info } from 'lucide-react';

export default function Component() {
  return (
    <div className="flex items-center gap-4">
      <Button
        iconOnly
        color="danger"
        aria-label="Show error toast"
        onClick={() =>
          toast.add({
            title: 'Something went wrong',
            type: 'error',
          })
        }
      >
        <CircleX size={16} />
      </Button>
      <Button
        iconOnly
        color="primary"
        aria-label="Show success toast"
        onClick={() =>
          toast.add({
            title: 'Done!',
            type: 'success',
          })
        }
      >
        <CheckCircle2 size={16} />
      </Button>
      <Button
        iconOnly
        color="secondary"
        aria-label="Show info toast"
        onClick={() =>
          toast.add({
            type: 'info',
            title: 'Heads up!',
            description: 'Remember to save your change.',
          })
        }
      >
        <Info size={16} />
      </Button>
    </div>
  );
}
