import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Component() {
  return (
    <Avatar size="md">
      <AvatarImage src="/avatar.png" alt="User" />
      <AvatarFallback>CR</AvatarFallback>
    </Avatar>
  );
}
