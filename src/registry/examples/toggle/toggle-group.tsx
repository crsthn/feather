import { Toggle, ToggleGroup } from "@/components/ui/toggle";
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react";

export default function Component() {
  return (
    <ToggleGroup defaultValue={["left"]}>
      <Toggle aria-label="Align left" value="left">
        <AlignLeftIcon size={16} />
      </Toggle>
      <Toggle aria-label="Align center" value="center">
        <AlignCenterIcon size={16} />
      </Toggle>
      <Toggle aria-label="Align right" value="right">
        <AlignRightIcon size={16} />
      </Toggle>
    </ToggleGroup>
  );
}
