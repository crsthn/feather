import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle';
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from 'lucide-react';

export default function Component() {
  return (
    <ToggleGroup defaultValue={['left']}>
      <ToggleGroupItem aria-label="Align left" value="left">
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Align center" value="center">
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Align right" value="right">
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
