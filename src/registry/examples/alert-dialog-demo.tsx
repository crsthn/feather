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
import { buttonStyles } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

export default function Component() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        className={buttonStyles({
          color: 'danger',
          variant: 'subtle',
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
          <AlertDialogClose color="secondary">Cancel</AlertDialogClose>
          <AlertDialogClose color="danger">Delete Forever</AlertDialogClose>
        </AlertDialogFooter>
      </AlertDialogPopup>
    </AlertDialog>
  );
}
