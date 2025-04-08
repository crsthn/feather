"use client";
import { buttonStyles } from "@/components/ui/button";
import {
  Menu,
  MenuGroup,
  MenuGroupLabel,
  MenuPopup,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/menu";
import { Layout } from "lucide-react";
import { useState } from "react";

export default function Component() {
  const [view, setView] = useState("grid");
  const [size, setSize] = useState("medium");

  return (
    <Menu>
      <MenuTrigger className={buttonStyles({ color: "secondary" })}>
        <Layout size={16} /> View Options
      </MenuTrigger>
      <MenuPopup>
        <MenuGroup>
          <MenuGroupLabel>Layout</MenuGroupLabel>
          <MenuRadioGroup value={view} onValueChange={setView}>
            <MenuRadioItem value="grid">Grid View</MenuRadioItem>
            <MenuRadioItem value="list">List View</MenuRadioItem>
            <MenuRadioItem value="compact">Compact View</MenuRadioItem>
          </MenuRadioGroup>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuGroupLabel>Size</MenuGroupLabel>
          <MenuRadioGroup value={size} onValueChange={setSize}>
            <MenuRadioItem value="small">Small</MenuRadioItem>
            <MenuRadioItem value="medium">Medium</MenuRadioItem>
            <MenuRadioItem value="large">Large</MenuRadioItem>
          </MenuRadioGroup>
        </MenuGroup>
      </MenuPopup>
    </Menu>
  );
}
