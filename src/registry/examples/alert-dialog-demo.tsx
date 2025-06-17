import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogMain,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button, buttonStyles } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

export default function Component() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        className={buttonStyles({
          variant: 'subtle',
          className: 'text-danger',
        })}
      >
        <Trash2 />
        Delete account
      </AlertDialogTrigger>
      <AlertDialogPopup>
        <AlertDialogMain>
          <AlertDialogTitle>Delete Account Permanently?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. All your data and settings will be
            permanently removed.
          </AlertDialogDescription>
        </AlertDialogMain>
        <AlertDialogFooter>
          <AlertDialogClose>Cancel</AlertDialogClose>
          <Button variant="danger" className="flex-1">
            Delete Forever
          </Button>
        </AlertDialogFooter>
      </AlertDialogPopup>
    </AlertDialog>
  );
}
