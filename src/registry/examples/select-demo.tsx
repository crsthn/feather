import {
  Select,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Component() {
  return (
    <Select>
      <SelectTrigger className="w-44" aria-label="Select workspace">
        <SelectValue placeholder="Select workspace" />
      </SelectTrigger>

      <SelectPopup>
        <SelectGroup>
          <SelectGroupLabel>Personal</SelectGroupLabel>
          <SelectItem value="personal">My Workspace</SelectItem>

          <SelectGroupLabel>Teams</SelectGroupLabel>
          <SelectItem value="design">Design Team</SelectItem>
          <SelectItem value="engineering">Engineering</SelectItem>
          <SelectItem value="marketing">Marketing</SelectItem>
        </SelectGroup>
      </SelectPopup>
    </Select>
  );
}
