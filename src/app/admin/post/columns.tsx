"use client";

import { DeletePostButton } from "@/components/admin/DeletePostButton";
import MainDialog from "@/components/MainDialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PostModel } from "@/models/post/post-model";
import { formatDate } from "@/utils/format-datetime";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const postStatusLabel = {
  true: "Público",
  false: "Privado",
};

const arrowDirection = {
  asc: <ArrowUp className="ml-2 h-4 w-4" />,
  desc: <ArrowDown className="ml-2 h-4 w-4" />,
};

export const columns: ColumnDef<PostModel>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      const sortDirection = column.getIsSorted();
      return (
        <button
          className="flex items-center"
          onClick={() => column.toggleSorting(sortDirection === "asc")}
        >
          <span className="text-md font-bold">Título</span>
          {sortDirection && arrowDirection[sortDirection]}
          {!sortDirection && <ArrowUpDown className="ml-2 h-4 w-4" />}
        </button>
      );
    },
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => {
      const sortDirection = column.getIsSorted();
      return (
        <button
          className="flex items-center"
          onClick={() => column.toggleSorting(sortDirection === "asc")}
        >
          <span className="text-md font-bold">Última atualização</span>
          {sortDirection && arrowDirection[sortDirection]}
          {!sortDirection && <ArrowUpDown className="ml-2 h-4 w-4" />}
        </button>
      );
    },
    cell: ({ row }) => {
      const rawDate = String(row.getValue("updatedAt"));
      const formatted = formatDate(rawDate);
      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "published",
    header: ({ column }) => {
      const sortDirection = column.getIsSorted();
      return (
        <button
          className="flex items-center"
          onClick={() => column.toggleSorting(sortDirection === "asc")}
        >
          <span className="text-md font-bold">Status</span>
          {sortDirection && arrowDirection[sortDirection]}
          {!sortDirection && <ArrowUpDown className="ml-2 h-4 w-4" />}
        </button>
      );
    },
    cell: ({ row }) => {
      const status = String(row.getValue("published")) as "true" | "false";
      return <div>{postStatusLabel[status]}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const post = row.original;
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
                href={`/admin/post/${post.id}`}
                aria-label={`Ver post ${post.title}`}
                title={`Ver post ${post.title}`}
              >
                Ver post
              </Link>
            </DropdownMenuItem>
            <MainDialog
              title="Tem certeza?"
              description="Esta ação não pode ser desfeita. Deseja realmente excluir este post?"
              postTitle={post.title}
              postId={post.id}
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
    },
  },
];
