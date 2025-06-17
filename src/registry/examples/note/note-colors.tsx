import { Note } from '@/components/ui/note';
import { AlertTriangle, CheckCircle, InfoIcon } from 'lucide-react';

export default function Component() {
  return (
    <div className="flex flex-col gap-4">
      <Note>
        <h4 className="flex items-center gap-2 font-medium text-sm">
          <InfoIcon />
          Information
        </h4>
        <p className="text-text-2">
          This note provides additional context for users.
        </p>
      </Note>
      <Note variant="danger">
        <h4 className="flex items-center gap-2 font-medium text-sm">
          <AlertTriangle />
          Warning
        </h4>
        <p className="text-text-2">
          This action cannot be undone. Please proceed with caution.
        </p>
      </Note>
      <Note variant="primary">
        <h4 className="flex items-center gap-2 font-medium text-sm">
          <CheckCircle />
          Success
        </h4>
        <p className="text-text-2">
          Your changes have been saved successfully.
        </p>
      </Note>
    </div>
  );
}
