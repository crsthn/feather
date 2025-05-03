import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle';
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from 'lucide-react';

export default function Component() {
  return (
    <ToggleGroup defaultValue={['left']}>
      <ToggleGroupItem aria-label="Align left" value="left">
        <AlignLeftIcon size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Align center" value="center">
        <AlignCenterIcon size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Align right" value="right">
        <AlignRightIcon size={16} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
