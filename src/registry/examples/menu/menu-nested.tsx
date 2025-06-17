import { buttonStyles } from '@/components/ui/button';
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuSeparator,
  MenuSubmenuTrigger,
  MenuTrigger,
} from '@/components/ui/menu';
import { Copy, FileText, Mail, MessageSquare, Plus, Send } from 'lucide-react';

export default function Component() {
  return (
    <Menu>
      <MenuTrigger className={buttonStyles({ variant: 'secondary' })}>
        Actions
      </MenuTrigger>
      <MenuPopup>
        <MenuItem>
          <Plus /> New Task
        </MenuItem>
        <MenuItem>
          <Copy /> Copy Link
        </MenuItem>
        <MenuSeparator />
        <Menu>
          <MenuSubmenuTrigger>
            <Mail /> Share
          </MenuSubmenuTrigger>
          <MenuPopup>
            <MenuItem>
              <MessageSquare /> Message
            </MenuItem>
            <MenuItem>
              <Send /> Email
            </MenuItem>
            <MenuItem disabled>
              <FileText /> Notes
            </MenuItem>
          </MenuPopup>
        </Menu>
      </MenuPopup>
    </Menu>
  );
}
