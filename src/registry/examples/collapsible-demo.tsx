import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronRight } from 'lucide-react';
export default function Component() {
  return (
    <Collapsible className="w-48">
      <CollapsibleTrigger className="flex h-8 w-full items-center justify-between bg-secondary px-2">
        <span className="font-medium">Recovery keys</span>
        <ChevronRight
          size={16}
          className="shrink-0 text-text-2 transition-transform duration-200 ease-out-cubic group-data-panel-open:rotate-90 group-data-disabled:text-text-3"
          aria-hidden="true"
        />
      </CollapsibleTrigger>
      <CollapsiblePanel>
        <div className="flex h-8 items-center px-2">alien-bean-pasta</div>
        <div className="flex h-8 items-center px-2">wild-irish-burrito</div>
        <div className="flex h-8 items-center px-2">horse-battery-staple</div>
      </CollapsiblePanel>
    </Collapsible>
  );
}
