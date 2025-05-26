import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Component() {
  return (
    <div className="flex gap-4">
      <Avatar size="md">
        <AvatarImage src="/avatar.png" alt="User" />
        <AvatarFallback>CR</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarFallback>CR</AvatarFallback>
      </Avatar>
    </div>
  );
}
