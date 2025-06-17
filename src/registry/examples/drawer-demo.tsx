import { Button, buttonStyles } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerMain,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { ShoppingCart } from 'lucide-react';

export default function Component() {
  return (
    <Drawer>
      <DrawerTrigger
        className={buttonStyles({
          variant: 'subtle',
        })}
      >
        <ShoppingCart />
        Checkout
      </DrawerTrigger>
      <DrawerPopup>
        <DrawerHeader>
          <DrawerTitle>Checkout</DrawerTitle>
        </DrawerHeader>
        <DrawerMain>
          <div className="h-64 w-full border border-primary border-dashed bg-primary-muted" />
          <DrawerDescription>
            Before proceeding with your payment, please visit the{' '}
            <span className="cursor-pointer text-primary hover:underline">
              compliance documents
            </span>{' '}
            section to review all necessary information.
          </DrawerDescription>
        </DrawerMain>

        <DrawerFooter>
          <Button>Pay now</Button>
          <DrawerClose>Cancel</DrawerClose>
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}
