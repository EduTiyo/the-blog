import { MoreHorizontal } from "lucide-react";
import { DeletePostButton } from "../admin/DeletePostButton";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface MainDialogProps {
  title: string;
  description: string;
  children: React.ReactNode;
  postId: string;
  postTitle: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const MainDialog = ({
  title,
  description,
  children,
  postTitle,
  postId,
  open,
  onOpenChange,
}: MainDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div>
            <input type="hidden" defaultValue={postId} name="id" />
            <DeletePostButton
              id={postId}
              title={postTitle}
              onSuccess={() => onOpenChange?.(false)}
            />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MainDialog;
