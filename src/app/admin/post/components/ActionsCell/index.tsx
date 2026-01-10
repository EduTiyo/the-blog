import MainDialog from "@/components/MainDialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ActionsCellProps {
  id: string;
  title: string;
  slug: string;
}

export function ActionsCell({ id, title, slug }: ActionsCellProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link
            href={`/post/${slug}`}
            aria-label={`Ver post ${title}`}
            title={`Ver post ${title}`}
          >
            Ver post
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href={`/admin/post/${id}`}
            aria-label={`Ver post ${title}`}
            title={`Ver post ${title}`}
          >
            Editar post
          </Link>
        </DropdownMenuItem>
        <MainDialog
          title="Tem certeza?"
          description="Esta ação não pode ser desfeita. Deseja realmente excluir este post?"
          postTitle={title}
          postId={id}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        >
          <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
            <button className="w-full">Excluir post</button>
          </DropdownMenuItem>
        </MainDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
