import { Button, buttonStyles } from '@/components/ui/button';
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogMain,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CreditCard } from 'lucide-react';

export default function Component() {
  return (
    <Dialog>
      <DialogTrigger className={buttonStyles({ variant: 'subtle' })}>
        <CreditCard />
        Payment details
      </DialogTrigger>
      <DialogPopup>
        <DialogHeader>
          <DialogTitle>Payment details</DialogTitle>
        </DialogHeader>
        <DialogMain>
          <DialogDescription>
            Enter your payment details to proceed with the purchase. We accept
            all major credit cards.
          </DialogDescription>
          <div className="flex h-40 w-full items-center justify-center border border-primary border-dashed bg-primary-muted" />
        </DialogMain>

        <DialogFooter>
          <Button className="sm:flex-1">Confirm payment</Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}
