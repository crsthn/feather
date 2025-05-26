import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function Component() {
  return (
    <div className="flex gap-4">
      <Link href="#">Support</Link>
      <Separator orientation="vertical" />
      <Link href="#">Log in</Link>
    </div>
  );
}
