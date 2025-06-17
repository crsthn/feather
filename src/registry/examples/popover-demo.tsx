import { buttonStyles } from '@/components/ui/button';
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover';
import { BellIcon } from 'lucide-react';

export default function Component() {
  return (
    <Popover>
      <PopoverTrigger
        className={buttonStyles({ variant: 'secondary', iconOnly: true })}
      >
        <BellIcon aria-label="Notifications" />
      </PopoverTrigger>
      <PopoverPopup>
        <PopoverTitle>Notifications</PopoverTitle>
        <PopoverDescription>
          You are all caught up. Good job!
        </PopoverDescription>
      </PopoverPopup>
    </Popover>
  );
}
