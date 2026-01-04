"use client";

import { deletePostAction } from "@/actions/post/delete-post-action";
import { useState, useTransition } from "react";

interface DeletePostButtonProps {
  id: string;
  title: string;
}
export function DeletePostButton({ id, title }: DeletePostButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [showDialog, setShowDialog] = useState(false);

  async function handleClick() {
    startTransition(async () => {
      const result = await deletePostAction(id);
      alert(`o result é ${result}`);
    });
  }

  return (
    <>
      <button
        className="w-full text-left disabled:cursor-not-allowed"
        aria-label={`Apagar post ${title}`}
        title={`Apagar post ${title}`}
        onClick={handleClick}
      >
        Excluir post
      </button>
    </>
  );
}
