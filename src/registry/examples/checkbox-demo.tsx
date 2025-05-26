import { Checkbox, CheckboxGroup } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function Component() {
  return (
    <CheckboxGroup
      aria-labelledby="apples-caption"
      defaultValue={['fuji-apple']}
    >
      <div className="font-medium" id="apples-caption">
        Apples
      </div>

      <Label>
        <Checkbox name="fuji-apple" />
        Fuji
      </Label>

      <Label>
        <Checkbox name="gala-apple" />
        Gala
      </Label>

      <Label>
        <Checkbox name="granny-smith-apple" />
        Granny Smith
      </Label>
    </CheckboxGroup>
  );
}
