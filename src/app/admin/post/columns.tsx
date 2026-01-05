"use client";

import { PostModel } from "@/models/post/post-model";
import { formatDate } from "@/utils/format-datetime";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { ActionsCell } from "./components/ActionsCell";

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
      return <ActionsCell id={post.id} title={post.title} />;
    },
  },
];
