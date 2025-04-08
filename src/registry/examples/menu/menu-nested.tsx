import { buttonStyles } from "@/components/ui/button";
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuSeparator,
  MenuSubmenuTrigger,
  MenuTrigger,
} from "@/components/ui/menu";
import {
  ChevronDown,
  Copy,
  FileText,
  Mail,
  MessageSquare,
  Plus,
  Send,
} from "lucide-react";

export default function Component() {
  return (
    <Menu>
      <MenuTrigger className={buttonStyles({ color: "secondary" })}>
        Actions <ChevronDown />
      </MenuTrigger>
      <MenuPopup>
        <MenuItem>
          <Plus size={16} /> New Task
        </MenuItem>
        <MenuItem>
          <Copy size={16} /> Copy Link
        </MenuItem>
        <MenuSeparator />
        <Menu>
          <MenuSubmenuTrigger>
            <span className="flex items-center gap-2">
              <Mail size={16} /> Share
            </span>
          </MenuSubmenuTrigger>
          <MenuPopup>
            <MenuItem>
              <MessageSquare size={16} /> Message
            </MenuItem>
            <MenuItem>
              <Send size={16} /> Email
            </MenuItem>
            <MenuItem disabled>
              <FileText size={16} /> Notes
            </MenuItem>
          </MenuPopup>
        </Menu>
      </MenuPopup>
    </Menu>
  );
}
