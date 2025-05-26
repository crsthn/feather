import { Label } from '@/components/ui/label';
import { Radio, RadioGroup } from '@/components/ui/radio';

export default function Component() {
  return (
    <RadioGroup aria-labelledby="apples-caption" defaultValue="fuji-apple">
      <div className="font-medium" id="apples-caption">
        Best apple
      </div>

      <Label>
        <Radio value="fuji-apple" />
        Fuji
      </Label>

      <Label>
        <Radio value="gala-apple" />
        Gala
      </Label>

      <Label>
        <Radio value="granny-smith-apple" />
        Granny Smith
      </Label>
    </RadioGroup>
  );
}
