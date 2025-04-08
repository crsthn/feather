"use client";
import { buttonStyles } from "@/components/ui/button";
import {
  Menu,
  MenuCheckboxItem,
  MenuGroup,
  MenuGroupLabel,
  MenuPopup,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/menu";
import { Settings } from "lucide-react";
import { useState } from "react";

export default function Component() {
  const [notifications, setNotifications] = useState(true);
  const [emails, setEmails] = useState(false);
  const [updates, setUpdates] = useState(true);
  const [mentions, setMentions] = useState(false);

  return (
    <Menu>
      <MenuTrigger className={buttonStyles({ color: "secondary" })}>
        <Settings size={16} /> Preferences
      </MenuTrigger>
      <MenuPopup>
        <MenuGroup>
          <MenuGroupLabel>Notifications</MenuGroupLabel>
          <MenuCheckboxItem
            checked={notifications}
            onCheckedChange={setNotifications}
          >
            Push Notifications
          </MenuCheckboxItem>
          <MenuCheckboxItem checked={emails} onCheckedChange={setEmails}>
            Email Digests
          </MenuCheckboxItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuGroupLabel>Activity</MenuGroupLabel>
          <MenuCheckboxItem
            checked={updates}
            onCheckedChange={setUpdates}
            disabled
          >
            Project Updates
          </MenuCheckboxItem>
          <MenuCheckboxItem checked={mentions} onCheckedChange={setMentions}>
            @mentions
          </MenuCheckboxItem>
        </MenuGroup>
      </MenuPopup>
    </Menu>
  );
}
