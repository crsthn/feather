import { buttonStyles } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogMain,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreditCard } from "lucide-react";

export default function Component() {
  return (
    <Dialog>
      <DialogTrigger className={buttonStyles({ variant: "subtle" })}>
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
          <div className="flex h-40 w-full items-center justify-center bg-primary-muted" />
        </DialogMain>

        <DialogFooter>
          <DialogClose color="primary">Confirm payment</DialogClose>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}
