'use client';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/toast';

export default function Component() {
  return (
    <Button
      color="secondary"
      onClick={() =>
        toast.add({
          type: 'success',
          title: 'Done!',
          description: 'Your action was completed successfully.',
        })
      }
    >
      Show toast
    </Button>
  );
}
