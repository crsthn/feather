import { buttonStyles } from '@/components/ui/button';
import {
  Menu,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuSeparator,
  MenuTrigger,
} from '@/components/ui/menu';
import {
  ArrowRightLeft,
  CreditCard,
  LogOut,
  Settings,
  User,
} from 'lucide-react';

export default function Component() {
  return (
    <Menu>
      <MenuTrigger className={buttonStyles({ color: 'secondary' })}>
        Open Menu
      </MenuTrigger>
      <MenuPopup>
        <MenuGroup>
          <MenuGroupLabel>Cristhian R.</MenuGroupLabel>
          <MenuSeparator />
          <MenuItem>
            <User />
            Profile
          </MenuItem>
          <MenuItem>
            <CreditCard />
            Billings
          </MenuItem>
          <MenuItem>
            <Settings />
            Preferences
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuItem>
          <ArrowRightLeft />
          Switch account
        </MenuItem>
        <MenuItem className="text-danger">
          <LogOut />
          Sign out
        </MenuItem>
      </MenuPopup>
    </Menu>
  );
}
