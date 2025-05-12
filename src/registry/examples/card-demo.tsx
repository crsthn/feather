import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardMain,
  CardTitle,
} from '@/components/ui/card';

export default function Component() {
  return (
    <div className="bg-bg p-4 max-sm:w-full">
      <Card className="w-full sm:min-w-[340px]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here</CardDescription>
        </CardHeader>
        <CardMain>
          <div className="h-32 w-full border border-primary border-dashed bg-primary-muted" />
        </CardMain>
        <CardFooter>
          <Button className="w-full">Action</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
