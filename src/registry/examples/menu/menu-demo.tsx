import { buttonStyles } from "@/components/ui/button";
import {
  Menu,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/menu";
import {
  ArrowRightLeft,
  CreditCard,
  LogOut,
  Settings,
  User,
} from "lucide-react";

export default function Component() {
  return (
    <Menu>
      <MenuTrigger className={buttonStyles({ color: "secondary" })}>
        Open Menu
      </MenuTrigger>
      <MenuPopup>
        <MenuGroup>
          <MenuGroupLabel>Cristhian R.</MenuGroupLabel>
          <MenuSeparator />
          <MenuItem>
            <User size={16} />
            Profile
          </MenuItem>
          <MenuItem>
            <CreditCard size={16} />
            Billings
          </MenuItem>
          <MenuItem>
            <Settings size={16} />
            Preferences
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuItem>
          <ArrowRightLeft size={16} />
          Switch account
        </MenuItem>
        <MenuItem className="text-danger">
          <LogOut size={16} />
          Sign out
        </MenuItem>
      </MenuPopup>
    </Menu>
  );
}
