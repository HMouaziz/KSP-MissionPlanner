import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.jsx";
import { Button } from "@/components/ui/button.jsx";
import {useObjectives} from "@/hooks/useObjectives.js";
import { Trash2 } from 'lucide-react';

export const DeleteObjectiveModal = ({ id }) => {
  const { deleteObjective } = useObjectives()

  const handleDelete = () => {
    deleteObjective(id);
  };

  return (
    <Dialog>
      <DialogTrigger onClick={(event) => event.stopPropagation()}>
        <Trash2 />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            objective and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="destructive" onClick={handleDelete}>
            Confirm
          </Button>
          <Button variant="secondary" type="button">
            {" "}
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
