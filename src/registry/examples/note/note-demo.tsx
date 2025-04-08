import { Note } from "@/components/ui/note";
import { AlertCircle } from "lucide-react";

export default function Component() {
  return (
    <Note>
      <h4 className="flex items-center gap-2 font-medium text-sm">
        <AlertCircle size={16} />
        Quick Tip
      </h4>
      <p className="text-text-2">
        Components can be easily added to your project using the CLI command.
      </p>
    </Note>
  );
}
